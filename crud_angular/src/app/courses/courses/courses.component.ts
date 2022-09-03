
import { Component, OnInit } from '@angular/core';
import { Couser } from '../model/couser';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
courses: Couser[] = [{_id:"1", nome:"angular",tipo:"fronte"}];
displayedColumns = ['nome' , 'tipo']
  constructor() { }

  ngOnInit(): void {
  }

}
