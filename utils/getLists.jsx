const AUTH = process.env.NEXT_PUBLIC_AUTH
const headers = {
  accept: 'application/json',
  Authorization: AUTH
}

export async function getDetails(list_id) {
  const options = {
    method: 'GET',
    headers,
    cache: 'no-store'

  };
  const data = await fetch(`https://api.themoviedb.org/3/list/${list_id}?language=en-US`, options)
  return data.json()
}



export async function addToList(listId,id,sessionId){
  console.log(listId,id,sessionId)
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: AUTH
    },
    body: JSON.stringify({media_id: id})
  };
  
  fetch(`https://api.themoviedb.org/3/list/${listId}/add_item?session_id=${sessionId}`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

export async function deleteList(id, sessionId) {
  const options = {
    method: 'DELETE',
    headers
  };

  await fetch(`https://api.themoviedb.org/3/list/${id}?session_id=${sessionId}`, options)
    .catch(err => console.error(err));
}


export async function clearList(id, sessionId) {
  const options = {
    method: 'POST',
  };
  await fetch(`https://api.themoviedb.org/3/list/${id}/clear?session_id=${sessionId}&confirm=true`, options)
    .catch(err => console.error(err));

}


export async function removeFromList(id, media_id, sessionId) {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: AUTH
    },
    body: JSON.stringify({ media_id })
  };

  fetch(`https://api.themoviedb.org/3/list/${id}/remove_item?session_id=${sessionId}`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

export async function addFavorite(media_type, media_id, favorite, account) {

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: AUTH
    },
    body: JSON.stringify({ media_type, media_id, favorite })
  };

  const data = await fetch(`https://api.themoviedb.org/3/account/${account}/favorite`, options)
  return data.json()
}




export async function createList(name, sessionId) {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: AUTH
    },
    body: JSON.stringify({
      name,
      description: '',
      language: 'en'
    })
  };

  fetch(`https://api.themoviedb.org/3/list?session_id=${sessionId}`, options)
    .catch(err => console.error(err));
}
