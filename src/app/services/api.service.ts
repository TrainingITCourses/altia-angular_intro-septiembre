import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { Agency } from "../models/agency.interface";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  agenciesUrl = `${environment.apiServerUrl}/agencies`;

  constructor(private http: HttpClient) {
    // this.http.get<Agency[]>(this.agenciesUrl).subscribe(
    //   (body) => console.log(body),
    //   (e) => console.error(e)
    // );
    // const subscriber = {
    //   next: (body: Agency[]) => console.log(body),
    //   error: (e: HttpErrorResponse) => console.error(e),
    // };
    // this.http.get<Agency[]>(this.agenciesUrl).subscribe({
    //   next: (body: Agency[]) => console.log(body),
    //   error: (e: HttpErrorResponse) => console.error(e),
    // });
  }

  getAgencies$(): Observable<Agency[]> {
    return this.http.get<Agency[]>(this.agenciesUrl).pipe(
      tap((agencies) => console.log("Agencies received: ", agencies.length)),
      map((agencies) =>
        agencies.map((agency) => {
          agency.name = "🔭 " + agency.name.toUpperCase();
          return agency;
        })
      )
    );
  }

  getActiveAgencies$(): Observable<Agency[]> {
    return this.getAgencies$().pipe(
      map((agencies) => agencies.filter((a) => a.status === "Active")),
      tap((agencies) => console.log("Agencies count: ", agencies.length))
    );
  }

  getAgencyById$(id: string): Observable<Agency> {
    return this.http.get<Agency>(`${this.agenciesUrl}/${id}`);
  }

  postAgency$(payload: Agency): Observable<Agency> {
    console.log("posting...", payload);
    return this.http.post<Agency>(this.agenciesUrl, payload);
  }

  putAgency$(payload: Agency): Observable<Agency> {
    return this.http.put<Agency>(`${this.agenciesUrl}/${payload.id}`, payload);
  }

  deleteAgency$(id: string): Observable<void> {
    return this.http.delete<void>(`${this.agenciesUrl}/${id}`);
  }
}
