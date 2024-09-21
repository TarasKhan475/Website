const axios = require('axios');

exports.handler = async function (event, context) {
    try {
        // Parse the request body (assuming the email, password, and times are passed in JSON format)
        const { email, password, times } = JSON.parse(event.body);

        const maxPings = parseInt(times, 10);
        let pingCount = 0;
        let results = [];

        // Function to fetch items
        async function getItem() {
            while (pingCount < maxPings) {
                try {
                    // Step 1: Authenticate and get the token
                    const authResponse = await axios.post(
                        'https://dev-nakama.winterpixel.io/v2/account/authenticate/email?create=false',
                        JSON.stringify({
                            email: email,
                            password: password,
                            vars: { client_version: "99999" }
                        }),
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Basic OTAyaXViZGFmOWgyZTlocXBldzBmYjlhZWIzOTo='
                            }
                        }
                    );

                    // Step 2: Extract the token from the response
                    const token = authResponse.data.token;

                    // Step 3: Send the lootbox request with the token and payload
                    const payload = '"{}"';  // Send '{}' as a string
                    const lootboxResponse = await axios.post(
                        'https://dev-nakama.winterpixel.io/v2/rpc/tankkings_consume_lootbox',
                        payload,
                        {
                            headers: {
                                'Authorization': `Bearer ${token}`,
                                'Content-Type': 'application/json'
                            }
                        }
                    );

                    // Step 4: Collect the response
                    results.push(`Ping ${pingCount + 1}: ${JSON.stringify(lootboxResponse.data)}`);

                } catch (error) {
                    results.push(`Error on ping ${pingCount + 1}: ${error.response ? JSON.stringify(error.response.data) : error.message}`);
                }

                // Increment the ping counter
                pingCount++;

                // Optional delay to avoid too frequent requests
                await new Promise(resolve => setTimeout(resolve, 1000));  // 1-second delay between requests
            }

            return results;
        }

        // Call the function to start the loop and get the results
        const finalResults = await getItem();

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: `Finished pinging the API ${maxPings} times.`,
                results: finalResults
            })
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
