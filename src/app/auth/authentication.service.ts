import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthenticationService {
  public token: string;  

  constructor(private http: Http) {
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'      
    });
    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    let options = new RequestOptions({headers: headers});
    return this.http
      .post(
        "http://192.168.1.15:8000/auth/login/",
        body,
        options
      )
      .map((response: Response) => {
        let token = response.json() && response.json().token;
        if (token) {
          this.token = token;

          localStorage.setItem(
            "currentUser",
            JSON.stringify({ username: username, token: token })
          );

          return true;
        } else {            
          return false;
        }
      });
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem("currentUser");
  }
}
