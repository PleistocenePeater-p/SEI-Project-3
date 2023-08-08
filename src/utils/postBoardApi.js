import tokenService from "./tokenService";
const BASE_URL = '/api/boards/';

export function create(data){
	console.log(data, "CHECKING POSTBOARD API.............")
	return fetch(BASE_URL, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			Authorization: "Bearer " + tokenService.getToken(),
            'Content-Type': 'application/json'
		}
	}).then(responseFromTheServer => {
		console.log(responseFromTheServer, "This is the responseFrom the SEerver")
		if(responseFromTheServer.ok) return responseFromTheServer.json()
		throw new Error('Something went wrong in create Post');
	})
}

export function edit(data, id) {
    return fetch(`${BASE_URL}${id}`, {
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
			  Authorization: "Bearer " + tokenService.getToken()
		  }
	}).then(responseFromTheServer => {
		  if(responseFromTheServer.ok) return responseFromTheServer.json()
		  throw new Error('Something went wrong in getAll posts, check the terminal');
	  })
  }