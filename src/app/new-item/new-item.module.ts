import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { newItemRouting } from './new-item.routing';

@NgModule({
  imports: [CommonModule, newItemRouting, ReactiveFormsModule],
  declarations: [FormComponent],
})
export class NewItemModule {}
