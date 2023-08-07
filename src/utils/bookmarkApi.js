import tokenService from "./tokenService";

const BASE_URL = '/api/bookmarks/'

// THe user is logged in, so what do you have to include

export function create(boardId){
	return fetch(`${BASE_URL}boards/${boardId}/bookmarks`, {
		method: 'POST',
		headers: {
			// convention for sending jwts
			
			Authorization: "Bearer " + tokenService.getToken() // < this is how we get the token from localstorage and and it to our api request
			// so the server knows who the request is coming from when the client is trying to make a POST
		}
	}).then(responseFromTheServer => {
		if(responseFromTheServer.ok) return responseFromTheServer.json() // 
		throw new Error('Something went wrong in create bookmark'); 
	})
}

export function removeBookmark(bookmarkId){
	return fetch(`${BASE_URL}boards/${bookmarkId}`, {
		method: 'DELETE',
		headers: {
			// convention for sending jwts
			
			Authorization: "Bearer " + tokenService.getToken() // < this is how we get the token from localstorage and and it to our api request
			// so the server knows who the request is coming from when the client is trying to make a POST
		}
	}).then(responseFromTheServer => {
		if(responseFromTheServer.ok) return responseFromTheServer.json() // 
		throw new Error('Something went wrong in delete bookmark'); 
	})
}