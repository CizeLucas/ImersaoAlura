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

const clientID = "..."; //your_cliend_ID
const clientSecret = "..."; //your_client_secret
//You have to create a new app in https://developer.spotify.com/dashboard and input the 
//client ID and secret keys above

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

