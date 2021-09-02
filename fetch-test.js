 import fetch from "node-fetch";

 fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log("Oh noes an error:", err));