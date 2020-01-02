const request = require('request');

const url =
  'https://api.darksky.net/forecast/ce7b9c247dcad7fb05b8693c479f4882/37.8267,-122.4233?lang=bg&units=si';

request({ url, json: true }, (err, res) => {
  console.log(
    res.body.daily.data[0].summary +
      'Температурата в момента навън е ' +
      res.body.currently.temperature +
      ' градуса. Има ' +
      res.body.currently.precipProbability +
      '% шанс за валежи.'
  );
});
