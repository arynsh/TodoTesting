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
        completed : false
      },
      {
        id : 3,
        title : 'Todo task three',
        completed : false
      }
    ]
  }

  getImportantTodos() {
    return [
      {
        id : 4,
        title : 'Todo task four',
        completed : false
      },
      {
        id : 5,
        title : 'Todo task five',
        completed : false
      },
      {
        id : 6,
        title : 'Todo task six',
        completed : false
      }
    ]
  }
}

// this.todos= [
//     {
//       id : 1,
//       title : 'Todo task one',
//       completed : false
//     },
//     {
//       id : 2,
//       title : 'Todo task two',
//       completed : false
//     },
//     {
//       id : 3,
//       title : 'Todo task three',
//       completed : false
//     }
//   ],
//   this.importantTodos = [ 
//     {
//       id : 4,
//       title : 'Todo task four',
//       completed : false
//     },
//     {
//       id : 5,
//       title : 'Todo task five',
//       completed : false
//     },
//     {
//       id : 6,
//       title : 'Todo task six',
//       completed : false
//     }
//   ]