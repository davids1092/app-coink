import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { BtnPricnipalComponent } from '../btn-pricnipal/btn-pricnipal.component';
import { BtnSecundarioComponent } from '../btn-secundario/btn-secundario.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  standalone:true,
  imports:[CommonModule,IonicModule,BtnPricnipalComponent,BtnSecundarioComponent]
})
export class AlertComponent implements OnInit {
  marrano = ''
  @Input() path!: any;
  constructor(
    private router : Router,
    private modalController: ModalController
  ) { }
ngOnInit(): void {
  this.marrano = '../../../assets/img/marrano regalo.svg'
}
volverLogin(){
this.router.navigateByUrl(this.path)
this.modalController.dismiss()
}


}
