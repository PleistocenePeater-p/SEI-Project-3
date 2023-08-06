import tokenService from "./tokenService";
const BASE_URL = '/api/boards/';

export function create(data){
	return fetch(BASE_URL, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			// convention for sending jwts
			
			Authorization: "Bearer " + tokenService.getToken(), // < this is how we get the token from localstorage and and it to our api request
			// so the server knows who the request is coming from when the client is trying to make a POST
            'Content-Type': 'application/json'
		}
	}).then(responseFromTheServer => {
		if(responseFromTheServer.ok) return responseFromTheServer.json() // so if everything went well in the response return 
		//the parsed json to where we called the function

		throw new Error('Something went wrong in create Post'); // this will go to the catch block when we call the function in the AddPostPuppyForm
		// handleSubmit
	})
}

export function getBoards(username){
	return fetch(`${BASE_URL}${username}`, {
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