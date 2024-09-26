import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-selection',
  templateUrl: './task-selection.component.html',
  styleUrls: ['./task-selection.component.css']
})
export class TaskSelectionComponent {
  @Input() userData: any;
  @Output() nextStep = new EventEmitter<void>();

  tasks = ['Task 1', 'Task 2', 'Task 3'];

  selectedTasks: string[] = [];

  onNext() {
    this.nextStep.emit();
  }
}
