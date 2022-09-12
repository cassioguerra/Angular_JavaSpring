import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements OnInit {
  Form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar) {
    this.Form = this.formBuilder.group({
      nome: [null],
      tipo:[null]
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
   this.service.save(this.Form.value)
   .subscribe(result => console.log(result),error => {
    this._snackBar.open('Erro ao salvar curso')
  });
   }
  onCancel(){

  }


}
