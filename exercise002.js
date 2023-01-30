import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";
const tryApi = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=df193315a4981dd6efc272f5e432ca6b";

const fetchData = async (apiEndPoint) => {
  try {
    const responsedet = await fetch(apiEndPoint);  
    if (responsedet.ok) {
    const responsedata = await responsedet.json();
    console.log(responsedata);
    }
  }
    catch (err) {
      console.log(err);
    }
  }
  
fetchData(jsonTypicode);
fetchData(tryApi);
