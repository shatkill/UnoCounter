import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSaveService } from './data-save.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[DataSaveService]
})
export class SharedModule { }
