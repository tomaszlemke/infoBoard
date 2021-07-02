import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsernameValidators} from "./username.validators";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  private url = 'http://localhost:3000/users';
  posts: any = [];
  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router) {
  }

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpaces,
    ],
      UsernameValidators.shouldBeUnique),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  addUser(input: HTMLInputElement) {
    this.http.post(this.url, JSON.stringify(input), {headers: this.headers})
      .subscribe(response => this.redirect())
  }

  redirect() {
    this.router.navigate(['./']);
  }

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }
}
