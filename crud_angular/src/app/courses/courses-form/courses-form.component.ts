import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements OnInit {
  Form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.Form = this.formBuilder.group({
      nome: [null],
      tipo:[null]
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){

  }
  onCancel(){

  }


}
