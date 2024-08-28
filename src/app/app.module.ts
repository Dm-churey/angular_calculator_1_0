import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponentComponent } from './calculator-component/calculator-component.component';
import { DisplayComponentComponent } from './display-component/display-component.component';
import { AddButtonComponentComponent } from './add-button-component/add-button-component.component';
import { SubtractButtonComponentComponent } from './subtract-button-component/subtract-button-component.component';
import { MultiplyButtonComponentComponent } from './multiply-button-component/multiply-button-component.component';
import { DivideButtonComponentComponent } from './divide-button-component/divide-button-component.component';
import { NumberButtonComponentComponent } from './number-button-component/number-button-component.component';
import { EqualsButtonComponentComponent } from './equals-button-component/equals-button-component.component';
import { DeleteButtonComponentComponent } from './delete-button-component/delete-button-component.component';
import { ClearButtonComponentComponent } from './clear-button-component/clear-button-component.component';
//import { PointButtonComponentComponent } from './point-button-component/point-button-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponentComponent,
    DisplayComponentComponent,
    AddButtonComponentComponent,
    SubtractButtonComponentComponent,
    MultiplyButtonComponentComponent,
    DivideButtonComponentComponent,
    NumberButtonComponentComponent, 
    EqualsButtonComponentComponent, DeleteButtonComponentComponent, ClearButtonComponentComponent, 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
