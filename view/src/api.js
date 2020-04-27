

  export const loginRequest = async (data) => {
	try{
	const response = await fetch("http://localhost:8080/api/loginUser", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
	const res = await response.json();
	return res
	}catch(e){
		console.log(e)
	}
}

 export const addEventRequest = async (data) => {
	try{
	const response = await fetch("http://localhost:8080/api/createEvent", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
	const res = await response.json();
	return res
	}catch(e){
		console.log(e)
	}
}

 export const getEventsRequest = async () => {
	try{
	const response = await fetch("http://localhost:8080/api/getEvents", {
      method: "GET",
      headers: {
          'Content-Type': 'application/json'
        },
    });
	const res = await response.json();
	return res
	}catch(e){
		console.log(e)
	}
}

