import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  logo  = ''
  constructor(
    private router : Router
  ) { }


  ngOnInit() {
    this.logo = '../../../../assets/img/logo.svg'
  }

  registrarse(){
    // console.log('registrarme')
    this.router.navigateByUrl('registro-page/form-uno')
  }

}


