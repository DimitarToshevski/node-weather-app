const request = require('request');

const mapboxUrl =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3JldGVuYSIsImEiOiJjazR3MjZ6bXMwMWRsM2xsa2Jtam5mNmpuIn0.GWbCsjLyn7LFCRqKTQlGlQ&language=bg&limit=1';

const darkSkyUrl =
  'https://api.darksky.net/forecast/ce7b9c247dcad7fb05b8693c479f4882/37.8267,-122.4233?lang=bg&units=si';

request({ url: darkSkyUrl, json: true }, (err, res) => {
  console.log(
    res.body.daily.data[0].summary +
      'Температурата в момента навън е ' +
      res.body.currently.temperature +
      ' градуса. Има ' +
      res.body.currently.precipProbability +
      '% шанс за валежи.'
  );
});

request({ url: mapboxUrl, json: true }, (err, res) => {
  const geoCoordinates = res.body.features[0].center;
  const longitude = geoCoordinates[0];
  const latitude = geoCoordinates[1];
  console.log(longitude);
  console.log(latitude);
});
