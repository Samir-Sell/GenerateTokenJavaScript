/*
This function generates a token for an ArcGIS Enterprise and returns the token value to the user

@input --> portalURL --> ex: "https://mceweb.esri.local/portal"
@input --> portalURL --> ex: "samir"
@input --> portalURL --> ex: "IAmAFakePassword"

@output --> token --> ex: "fewhbeuwg23uyvu2y3vu23vrv32u3vru23vjhvfb2hu3vu23"
*/


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