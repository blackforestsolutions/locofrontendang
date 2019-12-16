/* eslint-disable */
// Generated using typescript-generator version 2.18.565 on 2019-12-16 20:59:39.

export interface Journey {
    id: string;
    start: TravelPoint;
    destination: TravelPoint;
    betweenHolds: { [index: string]: TravelPoint };
    travelProvider: TravelProvider;
    unknownTravelProvider: string;
    startTime: Date;
    arrivalTime: Date;
    duration: number;
    price: Price;
    priceWithCommision: Price;
    journeysRelated: string[];
    distance: number;
    providerId: string;
    delay: number;
    trainName: string;
    vehicleName: string;
    vehicleNumber: string;
    startStatus: string;
    arrivalStatus: string;
    startTimeUpdated: Date;
    arrivalTimeUpdated: Date;
    description: string;
    aircraftTypeCode: number;
    matchesRequest: boolean;
}

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

export interface Price {
    value: number;
    currency: string;
    symbol: string;
}

export interface Coordinates {
    latitude: number;
    longitude: number;
}

export enum TravelProvider {
    DB = 'DB',
    SBB = 'SBB',
    ÖBB = 'ÖBB',
    LUFTHANSA = 'LUFTHANSA',
    EUROWINGS = 'EUROWINGS',
    CONDOR = 'CONDOR',
    FLIXBUS = 'FLIXBUS',
    BRITISHAIRWAYS = 'BRITISHAIRWAYS',
}
