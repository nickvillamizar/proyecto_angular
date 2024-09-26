import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Input() userData: any;
  @Output() nextStep = new EventEmitter<void>();

  onSubmit() {
    this.nextStep.emit();
  }
}

