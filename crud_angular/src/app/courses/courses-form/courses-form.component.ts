import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Location} from '@angular/common';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements OnInit {
  Form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location:Location) {
    this.Form = this.formBuilder.group({
      nome: [''],
      tipo:['']
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
   this.service.save(this.Form.value)
   .subscribe(result =>this.onSuccess() ,error => this.onError);
   }
  onCancel(){
this.location.back();
  }

  private onSuccess(){
    this._snackBar.open('ok Obrigado Por sua Doação!!', '',{duration:5000});
    this.onCancel();
}


private onError(){
  this._snackBar.open('Erro ao salvar intes', '',{duration:5000});
}
}
