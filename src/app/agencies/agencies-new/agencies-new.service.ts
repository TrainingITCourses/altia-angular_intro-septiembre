import { Injectable } from "@angular/core";
import { Agency } from "src/app/models/agency.interface";
import { DataService } from "src/app/services/data.service";

@Injectable()
export class AgenciesNewService {
  constructor(private data: DataService) {}

  saveAgency(agency: Omit<Agency, "id">) {
    const id = agency.name.toLowerCase().replace(" ", "-");
    const payload: Agency = { id, ...agency };
    this.data.postAgency(payload);
  }
}
