import tokenService from "./tokenService"

const BASE_URL = '/api'

export function create(sunPostId){
	return fetch(`${BASE_URL}/sunPosts/${sunPostId}/comments`, {
		method: 'POST',
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		  }
	}).then(res => {
		if(res.ok) return res.json()
		throw new Error('Not logged In! Check Express terminal')
	})
}

export function removeComment(commentId){
	return fetch(`${BASE_URL}/comments/${commentId}`, {
		method: 'DELETE',
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		  }
	}).then(res => {
		if(res.ok) return res.json()
		throw new Error('Not logged In! Check Express terminal')
	})
}