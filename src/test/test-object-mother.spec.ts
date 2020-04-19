import { ApiTokenAndUrlInformation, Journey } from '@blackforestsolutions/locodatamodel';

export const testUuuid1 = 'd3078d7a-2351-4620-927c-d793c053a630';

export const apiToken: ApiTokenAndUrlInformation = {
  arrival: 'Hamburg',
  departure: 'München',
  departureDate: new Date().toISOString(),
};

export const journey: Journey = { id: testUuuid1 };
