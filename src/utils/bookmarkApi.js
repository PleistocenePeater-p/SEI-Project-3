import tokenService from "./tokenService";

const BASE_URL = '/api/boards/bookmarks/'

export function create(boardId){
	return fetch(`${BASE_URL}${boardId}`, {
		method: 'POST',
		headers: {
			Authorization: "Bearer " + tokenService.getToken(), 
            'Content-Type': 'application/json'
		}
	}).then(responseFromTheServer => {
		if(responseFromTheServer.ok) return responseFromTheServer.json() // 
		throw new Error('Something went wrong in create bookmark'); 
	})
}

export function removeBookmark(bookmarkId){
	return fetch(`${BASE_URL}${bookmarkId}`, {
		method: 'DELETE',
		headers: {
			Authorization: "Bearer " + tokenService.getToken()
		}
	}).then(responseFromTheServer => {
		if(responseFromTheServer.ok) return responseFromTheServer.json() // 
		throw new Error('Something went wrong in delete bookmark'); 
	})
}