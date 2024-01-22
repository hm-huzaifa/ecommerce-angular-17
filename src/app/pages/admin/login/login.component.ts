import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObject: any = {
    username: '',
    password: ''
  }
  constructor(private router: Router) {
  }

  onLogin() {
    if(this.loginObject.username == 'admin' && this.loginObject.password == "11223344"){
      this.router.navigateByUrl('/products')
    }else {
      alert("Wrong Credentials")
    }
  }

}
