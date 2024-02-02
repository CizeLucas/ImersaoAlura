async function getAcessToken(apiEndPoint, headerContent, httpRequestBody) {
    
    const response = await fetch(apiEndPoint, {
        method:'POST',
        headers: headerContent,
        body: httpRequestBody
    })
    return response.json()
}

async function getArtistData(apiURL, artistID, sessionAcessToken){
    const fullURL = apiURL+'/artists'+'/'+artistID
    console.log(fullURL)
    const response = await fetch(fullURL, {
        method: 'GET',
        mode: 'cors',
        headers: {
            "Authorization": `Bearer ${sessionAcessToken}`
        }
    })

    return response.json()
}

const clientID = "acc0478f790144b8bc47d99cf517a072"; //your_cliend_ID
const clientSecret = "868c00e7abf14b41b28834402f860221"; //your_client_secret

const artistID_EDEN = "1t20wYnTiAT0Bs7H1hv9Wt";

const tokenEndpoint = "https://accounts.spotify.com/api/token";
//Send a POST request to the token endpoint URI

const basicAuth = btoa(`${clientID}:${clientSecret}`);
//Encondes in Base 64 the string that contains the client ID and client secret key separated by ':'

const postData = {
    grant_type: 'client_credentials'
};

const headerContent = {
    'Authorization': `Basic ${basicAuth}`,
    'Content-Type': 'application/x-www-form-urlencoded'
};

//const httpReqBody = new URLSearchParams(postData)
const httpReqBody = 'grant_type=client_credentials'

//console.log("basicAuth: ", basicAuth);
//console.log("postData", postData);
//console.log("URLSearchParams(postData): ", httpReqBody.toString());

let accessToken = null;
try{
    const data = await getAcessToken(tokenEndpoint, headerContent, httpReqBody)
    accessToken = data.access_token
    console.log(`Acess Token: ${accessToken}`)
} catch(err){
    console.log(`ERROR! ${err}`)
}

/*
fetch(tokenEndpoint, {
    method: 'POST',
    headers: headerContent,
    body: httpReqBody
})
    .then(response => response.json())
    .then(data => {
        console.log('Response data: ', data); //prints the whole response data

        accessToken = data.access_token; //separates the access_token field from the rest of the response
        if (accessToken) {
            console.log('Access Token:', accessToken);
        } else {
            console.error('Access token not found in the response:', data);
        }
    })
    .catch(error => {
        console.error('Error: ', error);
    })

    console.log(accessToken)
*/

if(!accessToken!=null){
    try{
        const response = await getArtistData("https://api.spotify.com/v1", artistID_EDEN, accessToken)
        console.log(response)
    } catch(err) {
        console.error(`Error: ${err}`)
    }
} else {
    console.error("Acess token cannot be null")
}

