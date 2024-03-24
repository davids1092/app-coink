import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
  standalone: true,
  imports:[CommonModule,IonicModule]
})
export class SplashComponent implements OnInit {
  logo  = ''
  constructor() { }

  ngOnInit() {
    this.logo = '../../../../assets/img/logo.svg'
  }

}
