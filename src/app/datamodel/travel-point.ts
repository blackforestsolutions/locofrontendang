export interface TravelPoint {
  city: string;
  country: string;
  postalCode: string;
  stateOrProvince: string;
  street: string;
  streetNumber: string;
  gpsCoordinates: Coordinates;
  dbStationId: string;
  dbStationName: string;
  airportId: string;
  airportName: string;
  platform: string;
  terminal: string;
  departureTime: Date;
  arrivalTime: Date;
  stationName: string;
  stationId: string;
}
