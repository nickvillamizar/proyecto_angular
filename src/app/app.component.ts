import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  currentStep = 1;
  userData: any = {};

  goToNextStep(data: any) {
    this.userData = { ...this.userData, ...data };
    this.currentStep++;
  }
}
