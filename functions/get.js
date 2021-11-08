/*template*/

API_KEY = XeTQVlPB8ft7gOuRGDJsXEUQ6txJTXkfqXMygXGa;
let response = await fetch('https://api.nasa.gov/planetary/apod?api_key=${API_KEY}');
console.log(response);
let data = await response.json();
console.log(data);
document.querySelector("#APOD").innerHTML = data.explanation;