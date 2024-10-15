const fetch = require('node-fetch');
require('dotenv').config(); // Load .env file locally

exports.handler = async (event) => {
  const { userInput } = JSON.parse(event.body);

  // Dummy account credentials stored in Netlify environment variables or .env file
  const dummyEmail = process.env.DUMMY_EMAIL;
  const dummyPassword = process.env.DUMMY_PASSWORD;
  const apiUrl = 'https://dev-nakama.winterpixel.io/v2/';

  let token = null;
  let lastRefresh = null;

  // Helper function to make POST requests
  async function post(url, data, headers = {}) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  }

  // Function to refresh the token
  async function refreshToken() {
    if (token && lastRefresh) {
      const timeElapsed = new Date().getTime() - lastRefresh.getTime();
      if (timeElapsed < 540000) return; // 9 minutes
    }

    const data = {
      email: dummyEmail,
      password: dummyPassword,
      vars: {
        client_version: '99999',
      },
    };

    const response = await post(`${apiUrl}account/authenticate/email?create=false`, data);
    token = response.token;
    lastRefresh = new Date();
  }

  // Fetch user information by User ID
  async function getUserInfoById(userId) {
    await refreshToken();
    const headers = { authorization: `Bearer ${token}` };

    const data = { ids: [userId] };
    return await post(`${apiUrl}rpc/rpc_get_users_with_profile`, data, headers);
  }

  // Convert Friend Code to User ID
  async function friendCodeToId(friendCode) {
    await refreshToken();
    const headers = { authorization: `Bearer ${token}` };

    const data = { friend_code: friendCode };
    return await post(`${apiUrl}rpc/winterpixel_query_user_id_for_friend_code`, data, headers);
  }

  try {
    let userId = userInput;

    // If the input is not a number, treat it as a Friend Code
    if (isNaN(userId)) {
      const friendCodeResponse = await friendCodeToId(userId);
      userId = friendCodeResponse.user_id;
    }

    const userInfo = await getUserInfoById(userId);
    return {
      statusCode: 200,
      body: JSON.stringify(userInfo), // Always return JSON
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }), // Return error as JSON
    };
  }
};
