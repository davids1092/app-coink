import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent{
  splash = true
  constructor() {}
  // ngOnInit(): void {
  //   setTimeout(() => {
  //     this.splash = false
  //   }, 1000);
  // }
}
