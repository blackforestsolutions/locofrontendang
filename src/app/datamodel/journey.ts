import { TravelPoint } from './travel-point';
import { TravelProvider } from './travel-provider';
import { Price } from './price';

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
