import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = (apiEndPoint) => {
  fetch(apiEndPoint)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
};

fetchData(jsonTypicode);

fetchDetails(jsonTypicode);
async function fetchDetails(input) {
  try {
  const responsedet = await fetch(input);  
  if (responsedet.ok) {
  const responsedata = await responsedet.json();
  console.log(responsedata);
  }
}
  catch (err) {
    console.log(err);
  }
}

fetchDetails('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=df193315a4981dd6efc272f5e432ca6b');
