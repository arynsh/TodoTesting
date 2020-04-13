import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
 @Input() todos: Todo[];
 @Input() importantTodos: Todo[];
 normal: boolean = true;
 important: boolean = true;

  constructor(private todoService:TodoService) { 
    this.todos = this.todoService.getTodos(3);
    this.importantTodos = this.todoService.getImportantTodos();
  }

  ngOnInit() {
  }

}
