import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Agency } from "src/app/models/agency.interface";
import { ApiService } from "src/app/services/api.service";
import { HelperService } from "src/app/services/helper.service";

@Component({
  styles: [],
  template: `
    <article *ngIf="agency; else noData">
      <h2>{{ agency.name }}</h2>
      <pre> {{ agency | json }} </pre>
      <button (click)="onRemove()">➖ Remove Agency</button>
    </article>
    <ng-template #noData>Agency data coming soon... 🔭</ng-template>
  `,
})
export class AgenciesViewPage implements OnInit {
  agency: Agency | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private helper: HelperService,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    const agencyId = this.helper.getIdFromRoute(this.route);
    this.api.getAgencyById$(agencyId).subscribe({
      next: (body) => (this.agency = body),
    });
  }

  onRemove() {
    if (this.agency) {
      this.api
        .deleteAgency$(this.agency.id)
        .subscribe(() => this.router.navigate(["agencies"]));
    }
  }
}
