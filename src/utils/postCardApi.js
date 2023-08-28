import tokenService from "./tokenService";

const BASE_URL = '/api/cards/'

export function create(boardId, content){
	return fetch(`${BASE_URL}${boardId}`, {
		method: 'POST',
        body: JSON.stringify({content}), 
		headers: {
			Authorization: "Bearer " + tokenService.getToken(), 
            'Content-Type': 'application/json'
		}
	}).then(responseFromTheServer => {
		if(responseFromTheServer.ok) return responseFromTheServer.json() // 
		throw new Error('Something went wrong in create bookmark'); 
	})
}

export function removeCard(boardId, cardId){
	return fetch(`${BASE_URL}${boardId}/${cardId}`, {
		method: 'DELETE',
		headers: {
			Authorization: "Bearer " + tokenService.getToken()
		}
	}).then(responseFromTheServer => {
		if(responseFromTheServer.ok) return responseFromTheServer.json() // 
		throw new Error('Something went wrong in delete bookmark'); 
	})
}


export function getAllCards(id){
    console.log(BASE_URL)
	return fetch(`${BASE_URL}${id}`, {
	  method: 'GET',
	  headers: {
			  Authorization: "Bearer " + tokenService.getToken()
		  }
	}).then(responseFromTheServer => {
		  if(responseFromTheServer.ok) return responseFromTheServer.json()
		  throw new Error('Something went wrong in getAll cards, check the terminal');
	  })
  }