import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServiceStepperService } from 'src/app/services/service-stepper.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class StepperComponent implements OnInit   {
  steps = [1,2,3];
  width: string = '0%';
  step = {id:1,value:'NÚMERO CELULAR'};
  constructor(
    private service : ServiceStepperService
  ) { }

  ngOnInit() {
    this.service.getForm().subscribe({
      next: (x: any) => {
        // console.log('valor',x)
        this.step = x
        this.width = this.getWidth();
      }
    })
  }
  getWidth(): string {
    const width = ((this.step.id - 1) / (this.steps.length - 1)) * 100;
    return `${width}%`;
  }
}
