import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Couser } from '../../model/couser';


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

 @Input() courses : Couser []=[];
 @Output() add= new EventEmitter(false)
 @Output() edit= new EventEmitter(false)

 readonly displayedColumns = ['nome' , 'tipo' ,'ações']

  constructor( ) { }

  ngOnInit(): void {
  }

  onAdd(){
this.add.emit(true)
  }

  onEdit(course: Couser){
this.edit.emit(course);
  }
}
