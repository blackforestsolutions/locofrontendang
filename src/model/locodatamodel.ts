
export interface Journey {
    readonly id: string;
    readonly start: TravelPoint;
    readonly destination: TravelPoint;
    readonly travelLine: TravelLine;
    readonly travelProvider: TravelProvider;
    readonly unknownTravelProvider: string;
    readonly startTime: Date;
    readonly arrivalTime: Date;
    readonly duration: number;
    readonly price: Price;
    readonly priceWithCommision: Price;
    readonly childPrice: Price;
    readonly reducedPrice: Price;
    readonly journeysRelated: string[];
    readonly betweenTrips: Journey[];
    readonly distance: number;
    readonly providerId: string;
    readonly delay: number;
    readonly vehicleType: string;
    readonly vehicleName: string;
    readonly vehicleNumber: string;
    readonly startStatus: string;
    readonly arrivalStatus: string;
    readonly matchesRequest: boolean;
    readonly startTimeUpdated: Date;
    readonly arrivalTimeUpdated: Date;
    readonly description: string;
}

export interface TravelPoint {
    readonly city: string;
    readonly country: string;
    readonly postalCode: string;
    readonly stateOrProvince: string;
    readonly street: string;
    readonly streetNumber: string;
    readonly gpsCoordinates: Coordinates;
    readonly airportId: string;
    readonly airportName: string;
    readonly platform: string;
    readonly terminal: string;
    readonly departureTime: Date;
    readonly arrivalTime: Date;
    readonly stationName: string;
    readonly stationId: string;
    readonly vehicleTypes: string[];
}

export interface TravelLine {
    readonly name: string;
    readonly origin: TravelPoint;
    readonly direction: TravelPoint;
    readonly betweenHolds: { [index: string]: TravelPoint };
}

export interface Price {
    readonly value: number;
    readonly currency: string;
    readonly symbol: string;
    readonly affiliateLink: string;
}

export interface Coordinates {
    readonly latitude: number;
    readonly longitude: number;
}

export enum TravelProvider {
    DB,
    SBB,
    OEBB,
    LUFTHANSA,
    EUROWINGS,
    CONDOR,
    BRITISHAIRWAYS,
    FLIXBUS,
    HVV,
    VBB,
    NAHSH,
    PKP,
    BVG,
    NASA,
    RMV,
    CMTA,
    SBAHNMUENCHEN,
    VGS,
    CFL,
    NVV,
    VBN,
    RSAG,
    VMT,
}
