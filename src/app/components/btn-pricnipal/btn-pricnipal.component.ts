import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-btn-pricnipal',
  templateUrl: './btn-pricnipal.component.html',
  styleUrls: ['./btn-pricnipal.component.scss'],
  standalone:true,
  imports:[CommonModule,IonicModule]
})

export class BtnPricnipalComponent {
  @Input() disabled!: boolean;
  constructor() { }

  // ngOnInit() {}

}
