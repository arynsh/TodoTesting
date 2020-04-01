import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    return [
      {
        id : 1,
        title : 'Todo task one',
        completed : false
      },
      {
        id : 2,
        title : 'Todo task two',
        completed : true
      },
      {
        id : 3,
        title : 'Todo task three',
        completed : false
      }
    ]
  }
}

