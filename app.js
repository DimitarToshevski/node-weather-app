const request = require('request');

const url =
  'https://api.darksky.net/forecast/ce7b9c247dcad7fb05b8693c479f4882/37.8267,-122.4233';

request({ url }, (err, res) => {
  const data = JSON.parse(res.body);
  console.log(data.currently);
});
