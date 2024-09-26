import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { TaskSelectionComponent } from './task-selection/task-selection.component';
import { TermsComponent } from './terms/terms.component';
import { SuccessComponent } from './success/success.component'; // Asegúrate de que esta ruta sea correcta

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    TaskSelectionComponent,
    TermsComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


