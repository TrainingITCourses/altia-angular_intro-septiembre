import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Agency } from "src/app/models/agency.interface";
import { ApiService } from "src/app/services/api.service";

@Injectable()
export class AgenciesNewService {
  constructor(private api: ApiService) {}

  saveAgency$(agency: Omit<Agency, "id">): Observable<Agency> {
    const id = agency.name.toLowerCase().replace(" ", "-");
    const payload: Agency = { id, ...agency };
    return this.api.postAgency$(payload);
  }
}
