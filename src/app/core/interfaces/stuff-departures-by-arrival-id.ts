import { StuffDeparture } from './stuff-departure'

export interface StuffDeparturesByArrivalId {
	[arrivalId: number]: StuffDeparture[]
}