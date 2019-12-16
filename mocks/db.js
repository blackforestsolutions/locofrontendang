var journeys = require('./json/journeys.json');
var travelPoints = require('./json/travelpoints.json');

module.exports = function () {
  return {
    journeys,
    travelPoints
  }
}
