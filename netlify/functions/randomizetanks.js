const axios = require("axios");
const color = require("./colorlog.js");

exports.handler = async function(event, context) {
    try {
        // Parse the incoming request
        const body = JSON.parse(event.body);

        // Sanitize the user input (email and password)
        const sanitize = (str) => {
            return str.replace(/[^\w\s@.-]/gi, ''); // Allow only letters, numbers, and email special characters
        };

        const email = sanitize(body.email);
        const password = sanitize(body.password);

        // Log the sanitized email and password to verify data is correct
        console.log("Sanitized email:", email);
        console.log("Sanitized password:", password);

        // Get the token from your authentication service
        const token = await getToken(email, password);
        const bearer = `Bearer ${token}`;

        // Get user profile info
        const user = await getUserProfile(bearer);

        // Set a random tank for the user
        const tank = await setTank(bearer, user);

        // Return a successful response
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Tank randomized successfully!",
                tank: tank // Return the randomized tank
            })
        };
    } catch (error) {
        // Log the full error in the console for internal debugging
        console.error("Error details:", error);

        // Return detailed error message to the frontend
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: "An error occurred while processing the request",
                details: error.message,  // Include the error message
                stack: error.stack  // Include the stack trace for more context
            })
        };
    }
};

// Function to get token (replace URL with your API endpoint)
async function getToken(email, password) {
    let requestData = {
        email: email,
        password: password,
        vars: { client_version: "94387677" }  // Ensure this matches the API spec
    };

    // Log request data to check before sending it
    console.log("Sending request to authenticate:", requestData);

    return await sendReq(requestData, "v2/account/authenticate/email", "Basic OTAyaXViZGFmOWgyZTlocXBldzBmYjlhZWIzOTo=", "post")
        .then(res => res.token)
        .catch(err => {
            console.error("Error while getting token:", err.response ? err.response.data : err.message);
            throw err;  // Re-throw the error so it's caught in the handler
        });
}

// Function to fetch user profile
async function getUserProfile(bearer) {
    console.log("Fetching user profile with bearer token:", bearer);
    return await sendReq(null, "v2/account", bearer, "get")
        .then(res => res.user)
        .catch(err => {
            console.error("Error while fetching user profile:", err.response ? err.response.data : err.message);
            throw err;
        });
}

// Function to randomize and set the tank
async function setTank(bearer, user) {
    let requestData = { skin: "random_tank" };  // You can customize this logic

    // Log what we are sending to set the tank
    console.log("Setting tank with request:", requestData);

    return await sendReq(requestData, "v2/rpc/tankkings_set_skin", bearer, "post")
        .then(res => {
            if (!res) throw new Error("Failed to set tank");
            return "random_tank"; // Replace with actual randomized tank result
        })
        .catch(err => {
            console.error("Error while setting tank:", err.response ? err.response.data : err.message);
            throw err;
        });
}

// Reusable function to send requests
async function sendReq(data, uri, auth, method) {
    data = JSON.stringify(data);
    
    // Log the request before sending
    console.log(`Sending ${method.toUpperCase()} request to ${uri}:`, data);

    return await axios({
        method: method,
        url: `https://dev-nakama.winterpixel.io/${uri}`,
        data: data,
        headers: {
            Authorization: auth
        }
    }).then(res => res.data)
      .catch(err => {
          // Log detailed error message from the request
          console.error(`Request failed for ${uri}:`, err.response ? err.response.data : err.message);
          throw err;
      });
}
