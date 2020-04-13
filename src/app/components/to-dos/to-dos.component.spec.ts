import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ToDosComponent } from './to-dos.component';
import { Todo } from 'src/app/models/Todo';

describe('ToDosComponent', () => {
  let component: ToDosComponent;
  let fixture: ComponentFixture<ToDosComponent>;
  let testNormalTodoCount: number;
  let importantTodosCount: number;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    // // set the dummy data
    // let normalTodosToInject = new TodoComponentTestUtility();
    // normalTodosToInject.buildTodos(testNormalTodoCount);
    // let importantTodosToInject = TodoComponentTestUtility.buildTodos(importantTodosCount);

    // let normalTodosToInject = TodoComponentTestUtility.buildTodos(testNormalTodoCount);
    // let importantTodosToInject = TodoComponentTestUtility.buildTodos(importantTodosCount);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display proper information for normal todo element class', () => {
    const normal = fixture.debugElement.query(By.css('.normal')).nativeElement;
    expect(normal.innerHTML).not.toBeNull();
    expect(normal.innerHTML.length).toBeGreaterThan(0);
    // Add a check to verify that an <li> element is displayed containing the title of one of our todos
  });

  it('should display proper information for important todo element class', () => {
    const important = fixture.debugElement.query(By.css('.important')).nativeElement;
    expect(important.innerHTML).not.toBeNull();
    expect(important.innerHTML.length).toBeGreaterThan(0);
    // Add a check to verify that an <li> element is displayed containing the title of one of our todos
  });
  
  it('should display the right number of normal todos', () => {
    expect(component.todos.length).toEqual(3);
    // add check for html to see how many li elements rather than todo length
    // add check to verify html is properly formed with correct number of todo divs
    // testNormalTodoCount, "the number of normal todos should be the passed value"
  });

  it('should display the right number of important todos', () => {
    
    expect(component.importantTodos.length).toEqual(3);
    // add check to verify html is properly formed with correct number of todo divs
  });

  it('should display all todos when both displayflags are true', () => {
    const normal = fixture.debugElement.query(By.css('.normal')).nativeElement;
    expect(normal.innerHTML).not.toBeNull();
    expect(normal.innerHTML.length).toBeGreaterThan(0);
    const importantElement = fixture.debugElement.query(By.css('.normal')).nativeElement;
    expect(importantElement.innerHTML).not.toBeNull();
    expect(importantElement.innerHTML.length).toBeGreaterThan(0);
  });

  it('should not display normal todos when normal displayflag is false', () => {
    component.normal = false; 
    fixture.detectChanges();
    const normalElement = fixture.debugElement.query(By.css('.normal'));
    console.log(normalElement);
    expect(normalElement).toBeNull();
    // expect(normalElement.innerHTML.length).toEqual(0);
  });

  // it('should not display important todos when important displayflag is false', () => {
  //   // define expectation for checking html for important todos
  // });

  // it('should not display any todos when both displayflags are false', () => {
  //   // define expectation for checking html for both important and normal todos
  // });
});

// class TodoComponentTestUtility {
//   private idCounter: number = 0;

//   public buildTodos(numberToBuild: number): Todo[] {
//     let normalTodos: Todo[] = [];
//     for (let x = 0; x < numberToBuild; x++) {
//       let newTodo = new Todo();
//       newTodo.title = "The lord of the rings";
//       newTodo.completed = false;
//       newTodo.id = this.id;
//       normalTodos.push(newTodo);
//     }

//     return normalTodos;
//   }

//   get id (): number {
//     return ++this.idCounter;
//   }

