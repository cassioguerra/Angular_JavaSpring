import { Injectable } from '@angular/core';
import { Couser } from '../model/couser';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';
import { first } from 'rxjs/internal/operators/first';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

private readonly API = 'api/courses'

  constructor(private httpClient: HttpClient) { }


  list() {
    return this.httpClient.get<Couser[]>(this.API)
    .pipe(
    first(),
    //delay(5000),
      tap(courses => console.log(courses))
    );

  }

  save(record:Couser){
   return this.httpClient.post<Couser>(this.API, record).pipe(first());
  }
}
