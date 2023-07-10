 getSession(token){


    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDkzOTVlMjUwMzViNDdiN2RlZDNmZDVhOGRiYjhiYyIsInN1YiI6IjYyZWQ5OGI0N2Q1NTA0MDA3YmI2NGQ4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._hIns-0CEgnfXu03uYgfEyy3gWhg5quT5YHE92A2Tyc'
      },
      body: JSON.stringify({request_token: token})
    };
    
    fetch('https://api.themoviedb.org/3/authentication/session/new', options)
      .then(response => response.json())
      .then(response =>{
        console.log("getSession id",response.session_id)
         response.cookies.set("sessionId",response?.session_id)
         response.cookies.set()
         cookie.set()
         return response.session_id
      })
      .catch(err => console.error(err));

  }


  function getDetails(sessionId){
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: auth
      }
    };
    
    fetch(`https://api.themoviedb.org/3/account?session_id=${sessionId}`, options)
      .then(response => response.json())
      .then(response => {
        const id = response.id
        console.log("is it the session id?", sessionId)
        console.log("getDetails",id)
        // const language = response.iso_639_1.toString()
        // const region = response.iso_3166_1.toString()
        // const avatar = response.avatar.tmdb.avatar_path.toString()
        const name = response.name
        cookie.set("account_id",response.id)
        cookie.set("language",response.iso_639_1 + '-' + response.iso_3166_1)
        cookie.set("avatar",response.avatar.tmdb.avatar_path)
        cookie.set("name",response.name)
        window.location.replace('/account')
      })
      .catch(err => console.error("getDetails",err));
  }
