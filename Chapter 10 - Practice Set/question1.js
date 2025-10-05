// Question - 1 : Use a free API from the internet & feed your app with live app.

async function fetchAPI(data){
    try{

        let response = await fetch(`${data}`);
        let getData = await response.json();
        console.log(getData)
        return getData;
    } catch(error){
        console.log(error);
    }
}

fetchAPI('https://jsonplaceholder.typicode.com/todos/1');
