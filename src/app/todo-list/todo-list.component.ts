import { Component, OnInit } from '@angular/core';
import { TODOItem } from '@app/shared/models/todo-item';
import { TodoListActions } from './redux-api/todo-list.actions';
import { TodoListSelector } from './redux-api/todo-list.selector';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // TODO: current todo item i store
  public currentTODO: TODOItem = new TODOItem('', '');
  public todoList$ = this.todoListSelector.getTodoList();

  constructor(
    private todoListSelector: TodoListSelector,
    private todoListActions: TodoListActions
  ) {}

  ngOnInit(): void {
    this.todoListActions.loadTodoList();
  }

  public deleteTodo(id: string) {
    this.todoListActions.deleteTodo(id);
  }

  // TODO: dispatch action
  public editTodo(todoItem: TODOItem) {
    this.currentTODO = todoItem;
  }
}
