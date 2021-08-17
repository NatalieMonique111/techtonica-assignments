const express = require('express');
const app = express();


app.use((req, res) => {
  console.log('WE GOT A NEW REQUEST')
})

//starts the server
app.listen(3000, () => {
  console.log('LISTENING ON PORT 3000')
})

// fetch("https://api.openweathermap.org/data/2.5/weather?q=sausalito&units=imperial&appid=8c02423bf7bfa815939618ae563b9c9b")
//   .then((response) => response.json())
//   .then(function (json) {
//     const body = document.getElementById('root');
//     // console.log(json);
//     // body.textContent = json.name;
//     const nameParagraph = document.createElement('p');
//     const tempParagraph = document.createElement('p');
//     body.appendChild(nameParagraph);
//     body.appendChild(tempParagraph);
//     nameParagraph.textContent = "Name: " + json.name;
//     tempParagraph.textContent = "Temperature: " + json.main.temp;
//   })