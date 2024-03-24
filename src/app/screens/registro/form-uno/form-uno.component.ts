import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceStepperService } from 'src/app/services/service-stepper.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-form-uno',
  templateUrl: './form-uno.component.html',
  styleUrls: ['./form-uno.component.scss'],
})
export class FormUnoComponent implements OnInit  {

  constructor(
    private router : Router,
    private serviceData : ServiceStepperService
  ) { }
oink = ''
stepper = ''
telefono = '( X X X - X X X X X X )'
clear = ''
check = ''
  ngOnInit() {
    this.oink = '../../../../../assets/img/Oink.svg'
    this.stepper = '../../../../assets/img/stepper1.svg'
    this.check = '../../../../assets/img/Check.svg'
    this.clear = '../../../../assets/img/Backspace.svg'
  }
  concatena(text:String, event:any){
 event.stopPropagation()
    this.telefono == '( X X X - X X X X X X )' ? this.telefono ='' : ''
    if(this.telefono.length < 11){
      // console.log(this.telefono.length)
      if(this.telefono.length == 3){
        text = ` ${text}`
      }
      this.telefono = this.telefono + text
    }
  if(this.telefono.length == 11){

  }
  }
  limpiar(){
    // console.log('limpiar',this.telefono)
    if(this.telefono != '( X X X - X X X X X X )'){
      if(this.telefono.length != 1){
        if(this.telefono.length == 4){
          this.telefono = this.telefono.trim();
        }else{
          this.telefono = this.telefono.slice(0, -1);
        }
      }else{
        this.telefono = '( X X X - X X X X X X )'
      }
    
    }
  
 
  }
  
  next(){
    let data = {
      'telefono': this.telefono.replace(/\s/g, '')
    }
    this.router.navigate(['/registro-page/form-dos'])
    this.serviceData.setdata(data)
    // this.router.navigateByUrl('registro-page/form-dos')
  }
}
