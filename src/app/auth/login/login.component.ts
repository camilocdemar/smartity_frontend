import { User } from "./../../models/user";
import { AuthenticationService } from "./../authentication.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-page-login",
  styles: [],
  templateUrl: "./login.component.html"
})
export class PageLoginComponent implements OnInit {
  model: any = {};
  error = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.authenticationService.logout();
  }

  login(): void {
    this.authenticationService
      .login(this.model.username, this.model.password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(["/"]);
        } else {
          this.error = 'Username or password is incorrect';
        }
      });
  }
}
