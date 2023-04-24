import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly list = [
    { name: 'Alvaro Martinez Gutierrez' },
    { name: 'Fernando Alonso Díaz' },
    { name: 'Lionel Andrés Messi Cuchetini' },
    { name: 'Cristiano Ronaldo Aveiro Dos Santos' },
    { name: 'Mónica Gutierrez Alonso' },
  ];

  form: FormGroup<{detail: FormArray<FormControl<string | null>>}> = new FormGroup({
    detail: new FormArray(this.list.map(it => new FormControl(it.name))),
  });

  drop($event: CdkDragDrop<any>) {
    moveItemInArray(this.form.controls.detail.controls, $event.previousIndex, $event.currentIndex);
  }
}
