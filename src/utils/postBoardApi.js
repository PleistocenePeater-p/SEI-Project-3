import tokenService from "./tokenService";
const BASE_URL = '/api/boards/';

export function create(data){
	console.log(data, "CHECKING POSTBOARD API.............")
	return fetch(BASE_URL, {
		method: 'POST',
		body: JSON.stringify(data), //Sunday night, 5:48PM this was formerly JSON.stringify(data) //Re-added from body: data
		headers: {
			// convention for sending jwts
			
			Authorization: "Bearer " + tokenService.getToken(), // < this is how we get the token from localstorage and and it to our api request
			// so the server knows who the request is coming from when the client is trying to make a POST
            'Content-Type': 'application/json'
		}
	}).then(responseFromTheServer => {
		console.log(responseFromTheServer, "This is the responseFrom the SEerver")
		if(responseFromTheServer.ok) return responseFromTheServer.json() // so if everything went well in the response return 
		//the parsed json to where we called the function

		throw new Error('Something went wrong in create Post'); // this will go to the catch block when we call the function in the AddPostPuppyForm
		// handleSubmit
	})
}

export function edit(data, id) {
    return fetch(`${BASE_URL}${id}`, {  // append the id to the base URL to target the specific board
        method: 'PUT', 
        body: JSON.stringify(data),
        headers: {
            Authorization: "Bearer " + tokenService.getToken(),
            'Content-Type': 'application/json'
        }
    }).then(responseFromTheServer => {
        if(responseFromTheServer.ok) return responseFromTheServer.json()
        throw new Error('Something went wrong in edit Post');
    })
}

export function getBoards(username){
	return fetch(`${BASE_URL}`, {
	  method: 'GET',
	  headers: {
			  // convention for sending jwts
			  
			  Authorization: "Bearer " + tokenService.getToken() // < this is how we get the token from localstorage and and it to our api request
			  // so the server knows who the request is coming from when the client is trying to make a POST
		  }
	}).then(responseFromTheServer => {
		  if(responseFromTheServer.ok) return responseFromTheServer.json() // so if everything went well in the response return 
		  //the parsed json to where we called the function
  
		  throw new Error('Something went wrong in getAll posts, check the terminal!'); // this will go to the catch block when we call the function in the AddPostPuppyForm
		  // handleSubmit
	  })
  }