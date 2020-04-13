import { Injectable } from '@angular/core';

import { Todo } from 'src/app/models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  public getTodos(numberToBuild: number): Todo[]{

      let normalTodos: Todo[] = [];
      for (let x = 0; x < numberToBuild; x++) {
        let newTodo = new Todo();
        debugger;
        newTodo.title = "The lord of the rings";
        newTodo.completed = false;
        // newTodo.id = this.id;
        normalTodos.push(newTodo);
      }
  
      return normalTodos;
    }

    // return [
    //   {
    //     id : 1,
    //     title : 'Todo task one',
    //     completed : false
    //   },
    //   {
    //     id : 2,
    //     title : 'Todo task two',
    //     completed : false
    //   },
    //   {
    //     id : 3,
    //     title : 'Todo task three',
    //     completed : false
    //   }
    // ]
  

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