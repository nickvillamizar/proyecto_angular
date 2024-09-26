import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-selection',
  templateUrl: './task-selection.component.html',
  styleUrls: ['./task-selection.component.css']
})
export class TaskSelectionComponent {
  @Input() tasks: string[] = []; // Asegúrate de que tasks sea un arreglo de strings
  selectedTasks: { [key: string]: boolean } = {}; // Usar un objeto para las tareas seleccionadas

  constructor() {
    // Inicializar selectedTasks con todas las tareas en falso
    this.tasks.forEach(task => {
      this.selectedTasks[task] = false;
    });
  }

  onNext() {
    // Lógica para manejar el siguiente paso
    console.log(this.selectedTasks);
  }
}
