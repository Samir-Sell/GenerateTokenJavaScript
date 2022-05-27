async function get_token(portalURL, userName, password) {

    // Prepare a token request
    let TokenURL = `${portalURL}/sharing/generateToken`;
    let formData = new FormData();
    formData.append("f", "json");
    formData.append("expiration", 60);
    formData.append("referer", portalURL);
    formData.append("username", userName);
    formData.append("password", password);

    // Create callback stack to send post request for token
    fetch(TokenURL, {
        method: "POST",
        body: formData,
    }).then(function (response) {
        // Grab the JSON from the returned object
        return response.json();
    }).then(function (responseJson) {
        // Grab the token key from the JSON
        if (responseJson.token) {
            let token = responseJson.token; // Get token
            return token;
        };
    });
};