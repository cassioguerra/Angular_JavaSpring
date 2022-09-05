import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CoursesService } from './../services/courses.service';

import { Component, OnInit } from '@angular/core';
import { Couser } from '../model/couser';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

courses$: Observable<Couser[]>;
displayedColumns = ['nome' , 'tipo' ,'ações']

//coursesService: CoursesService
  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router:Router,
    private route : ActivatedRoute

    ) {
   // this.coursesService= new CoursesService();
   this.courses$ = this.coursesService.list().pipe(
    catchError(error => {

      this.onError('Erro ao Carregar o Site')

      return of ([])
    })
   );

   }
   onError(errorMsg: string) {
    this.dialog.open( ErrorDialogComponent, {
      data:errorMsg
    });
  }

  ngOnInit(): void {
  }


  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
