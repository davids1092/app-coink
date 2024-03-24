import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-btn-secundario',
  templateUrl: './btn-secundario.component.html',
  styleUrls: ['./btn-secundario.component.scss'],
  standalone:true,
  imports:[CommonModule,IonicModule]
})
export class BtnSecundarioComponent  {

  constructor() { }

  // ngOnInit() {}

}
