import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent {
  @Input() userData: any;
  @Output() nextStep = new EventEmitter<void>();

  acceptedTerms = false;

  onNext() {
    if (this.acceptedTerms) {
      this.nextStep.emit();
    }
  }
}
