import { Component, OnInit } from "@angular/core";

@Component({
  template: `
    <h2>🔐 Login with your account</h2>
    <form>
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
    </form>
  `,
  styles: [],
})
export class LoginPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
