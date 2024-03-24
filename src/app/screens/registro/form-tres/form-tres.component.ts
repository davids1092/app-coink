import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { ServiceStepperService } from 'src/app/services/service-stepper.service';

@Component({
  selector: 'app-form-tres',
  templateUrl: './form-tres.component.html',
  styleUrls: ['./form-tres.component.scss'],
})
export class FormTresComponent implements OnInit {
  oink = ''
  stepper = ''
  check !: FormControl
  dataForm = {}
  constructor(
    private serviceData: ServiceStepperService,
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.check = new FormControl()
    this.check.setValidators(Validators.requiredTrue)
    this.oink = '../../../../../assets/img/OinkPolicia.svg'
    this.stepper = '../../../../assets/img/stepper3.svg'
    this.serviceData.getForm().subscribe({
      next:(x:any)=>{
        this.dataForm = x
      }
    })
  }

  getErrorMessage(fieldFormGroup: any) {
    const ERROR = fieldFormGroup.errors;
    if(ERROR != null){
      let message = '';
      if (ERROR['required']) {
        message = 'Por favor acepta los terminos y condiciones para continuar';
      } 
      return message;
    }
    return null
    
  }
  next(){
    let data = {
      ...this.dataForm,
      'terminos': this.check.value
    }
    console.log('data para enviar', data)
    this.serviceData.setdata(data)
    this.presentCustomAlert()
  }
  async presentCustomAlert() {
    const modal = await this.modalController.create({
      component: AlertComponent,
      componentProps:{path:'login'}
    });

    await modal.present();
  }

}
