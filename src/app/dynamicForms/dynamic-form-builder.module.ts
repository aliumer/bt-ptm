import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';
import { FieldBuilderComponent } from './field-builder/field-builder.component';
import { TextBoxComponent } from './atoms/textbox';
import { DropDownComponent } from './atoms/dropdown';
import { CheckBoxComponent } from './atoms/checkbox';
import { RadioComponent } from './atoms/radio';
import { FileComponent } from './atoms/file';

@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
    ],
    declarations: [
      DynamicFormBuilderComponent,
      FieldBuilderComponent,
      TextBoxComponent,
      DropDownComponent,
      CheckBoxComponent,
      RadioComponent,
      FileComponent
    ],
    exports: [DynamicFormBuilderComponent],
    providers: []
  })
  export class DynamicFormBuilderModule { }
  