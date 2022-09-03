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

private readonly API = '/assets/courses.json'

  constructor(private httpClient: HttpClient) { }


  list() {
    return this.httpClient.get<Couser[]>(this.API)
    .pipe(
    first(),
    delay(5000),
      tap(courses => console.log(courses))
    );

  }
}
