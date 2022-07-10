const baseURL = "/api/guitars/"

  const GuitarsService = {
    getGuitars() {
      return fetch(baseURL,)
      .then(res => res.json())
      .then(res => console.log(res.json()))
    },

    postGuitars(payload) {
      return fetch(baseURL, {
        method: 'POST',
          body: JSON.stringify(payload),
          headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' }
        })
      .then(res => res.json())
      .then(res => console.log(res.json()))

    }


  };



export default GuitarsService;