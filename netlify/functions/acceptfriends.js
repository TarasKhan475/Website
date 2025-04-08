// netlify/functions/acceptfriends.js

const axios = require("axios");

const batchAmount = 5;
const standardUrl = "https://dev-nakama.winterpixel.io/";

async function sendReq(data, uri, auth, method, params) {
  data = JSON.stringify(data);
  return await axios({
    method: method,
    url: standardUrl + uri,
    data: data,
    headers: {
      Authorization: auth,
    },
    params: params,
  })
    .then((res) => res.data)
    .catch((err) => {
      console.error("Request failed:", err.message);
      throw new Error("Failed to contact API");
    });
}

async function getToken(email, password) {
  const requestData = {
    email: email,
    password: password,
    vars: {
      client_version: "94387677",
    },
  };

  return await sendReq(
    requestData,
    "v2/account/authenticate/email?create=false&=",
    "Basic OTAyaXViZGFmOWgyZTlocXBldzBmYjlhZWIzOTo=",
    "post"
  ).then((res) => res.token);
}

async function getFriends(bearer, cursor) {
  return await sendReq(null, `v2/friend`, bearer, "get", {
    limit: 100,
    cursor: cursor,
  });
}

async function friendUser(bearer, id) {
  return await sendReq(null, `v2/friend`, bearer, "post", {
    ids: id,
  });
}

exports.handler = async function (event) {
  try {
    const { email, password } = JSON.parse(event.body);

    const token = await getToken(email, password);
    const bearer = "Bearer " + token;

    let cursorFinished = false;
    let requests = [];
    let page = 0;
    let cursor;

    while (!cursorFinished) {
      const request = await getFriends(bearer, cursor);
      const friendRequests = request["friends"].filter(
        (object) => object.state === 2
      );
      friendRequests.forEach((o) => requests.push(o["user"]["id"]));
      page++;
      if (!request.cursor) {
        cursorFinished = true;
      }
      cursor = request.cursor;
    }

    let batch = [];
    let batchPage = 0;

    while (batchPage < requests.length) {
      for (let i = 0; i < batchAmount && batchPage < requests.length; i++) {
        batch.push(friendUser(bearer, requests[batchPage]));
        batchPage++;
      }
      await Promise.all(batch);
      batch = [];
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        accepted: requests.length,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
