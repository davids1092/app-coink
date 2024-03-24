import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonInput } from '@ionic/angular';
import { Observable, Subject, catchError, forkJoin, mergeMap, takeUntil, toArray } from 'rxjs';
import { ServiceStepperService } from 'src/app/services/service-stepper.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-form-dos',
  templateUrl: './form-dos.component.html',
  styleUrls: ['./form-dos.component.scss'],
})
export class FormDosComponent {
  oink = '';
  stepper = '';
  form!: FormGroup;
  loading = false;
  @ViewChild('pinInput', { static: false }) pinInput!: IonInput;
  typeDocument :any = [
   
  ];
  gender = [
    {
      key: 1,
      value: 'Femenino',
    },
    {
      key: 2,
      value: 'Masculino',
    },
  ];
  regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  dataForm = {}
  private unSubscribe = new Subject<void>(); 
  constructor(
    private serviceData: ServiceStepperService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private services: ServicesService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.oink = '../../../../../assets/img/Oink.svg';
    this.stepper = '../../../../assets/img/stepper2.svg';
    this.form = this._formBuilder.group({
      tipo: ['', Validators.required],
      documento: ['', Validators.required],
      fechaEx: ['', [Validators.required, Validators.pattern(this.regex)]],
      fechaNac: ['', [Validators.required, Validators.pattern(this.regex)]],
      genero: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      correo2: ['', [Validators.required, Validators.email]],
      pin1: ['', [Validators.required, Validators.minLength(4),Validators.pattern('[0-9]*')]],
      pin2: ['', [Validators.required, Validators.minLength(4),Validators.pattern('[0-9]*')]],
    });
    this.obtenerDatos();
    this.serviceData.getForm().pipe(takeUntil(this.unSubscribe)).subscribe({
      next:(x:any)=>{
        this.dataForm = x
      }
    })
  }

  obtenerDatos(): void {
    this.loading = true
    forkJoin({
      documentos: this.services.listTypeDocument(),
      generos: this.services.listGenders(),
    }).pipe(takeUntil(this.unSubscribe)).subscribe({
      next: (data: any) => {
        const documentos = data.documentos;
        const generos = data.generos;
        // console.log(documentos);
        this.typeDocument = documentos;
        // console.log(generos);

        this.loading = false;
      },
      error: (error: any) => {
        this.router.navigateByUrl('login')
        this.errorAlert()
        
        console.error('Error al obtener datos:', error);
        this.loading = false;
      },
    });
  }

async errorAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      // subHeader: '',
      message: 'Se ha obtenido un error al consultar, información necesaria para este fomulario.',
      buttons: ['OK']
    });

    await alert.present();
  }

  getErrorMessage(fieldFormGroup: any) {
    const ERROR = fieldFormGroup.errors;
    if (ERROR != null) {
      let message = '';
      if (ERROR['required']) {
        message = 'Este campo es obligatorio';
      } else if (ERROR['email']) {
        message = 'Debe ingresar una dirección de email válida';
      } else if (ERROR['minlength'] || ERROR['maxlength']) {
        message = 'Número de caracteres invalido';
      } else if (ERROR['pattern']) {
        message = 'Valor inválido';
      } else if (ERROR['max']) {
        message = `Valor maximo ${ERROR['max'].max}`;
      } else if (ERROR['valido']) {
        message = 'Los correos ingresados no coinciden';
      } else if (ERROR['pin']) {
        message = 'Los pines ingresados no coinciden';
      } else if (ERROR['min']) {
        message = `Valor minimo ${ERROR['min'].min}`;
      }
      return message;
    }
    return null;
  }
  validarCorreos(control: any) {
    // console.log('valdiando coreos', this.form.controls['correo'].value, this.form.controls['correo2'].value)
    if (
      this.form.controls['correo'].value != this.form.controls['correo2'].value
    ) {
      control.setErrors({ valido: true });
    }
  }
  validarPin(control: any) {
    // console.log('valdiando coreos', this.form.controls['correo'].value, this.form.controls['correo2'].value)
    if (this.form.controls['pin1'].value != this.form.controls['pin2'].value) {
      control.setErrors({ pin: true });
    }
  }
  getErrorMessageDate(fieldFormGroup: any) {
    const ERROR = fieldFormGroup.errors;
    if (ERROR != null) {
      // console.log(ERROR)
      let message = '';
      if (ERROR['required']) {
        message = 'Este campo es obligatorio';
      } else if (ERROR['email']) {
        message = 'Debe ingresar una dirección de email válida';
      } else if (ERROR['minlength'] || ERROR['maxlength']) {
        message = 'Número de caracteres invalido';
      } else if (ERROR['pattern']) {
        message = 'Ingresa una fecha valida';
      } else if (ERROR['max']) {
        message = `Valor maximo ${ERROR['max'].max}`;
      } else if (ERROR['min']) {
        message = `Valor minimo ${ERROR['min'].min}`;
      }
      return message;
    }
    return null;
  }

  nextStep() {
    
    let data = {
      ...this.dataForm,
      'tipoDocumento':this.form.controls['tipo'].value,
      'documento':this.form.controls['documento'].value,
      'fechaExpedicion':this.form.controls['fechaEx'].value,
      'fechaNacimiento':this.form.controls['fechaNac'].value,
      'genero':this.form.controls['genero'].value,
      'correo':this.form.controls['correo2'].value,
      'pin':this.form.controls['pin2'].value,
    }
    this.serviceData.setdata(data);
    this.router.navigate(['/registro-page/form-tres']);
    // this.router.navigateByUrl('registro-page/form-dos')
  }
  ver(element:any) {
    console.log(element.type)
    if(element.type =='password'){
      element.type = 'text'
    }else{
      element.type ='password'
    }
    // this.pinInput.type = this.mostrarContrasena ? 'text' : 'password';
  }
}
