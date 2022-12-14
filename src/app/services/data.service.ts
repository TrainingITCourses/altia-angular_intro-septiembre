import { Injectable } from "@angular/core";
import { data } from "../data.repository";

@Injectable({
  providedIn: "root",
})
export class DataService {
  // getAgencies(): Agency[] {
  //   return data.agencies;
  // }

  // getAgencyById(agencyId: string): Agency | undefined {
  //   return data.agencies.find((a) => a.id === agencyId);
  // }

  // postAgency(agency: Agency): void {
  //   data.agencies.push(agency);
  // }

  getTrips() {
    return data.trips;
  }

  getTripsById(tripId: string) {
    return data.trips.find((t) => t.id === tripId);
  }
}
