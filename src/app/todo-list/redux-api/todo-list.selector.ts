import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { TodoListState } from './todo-list.model';

export const getTodolistState = createFeatureSelector<TodoListState>('todoList');

export const todoListSelectorFn = createSelector(
  getTodolistState,
  (todoListState) => todoListState.todos
);

@Injectable({
  providedIn: 'root'
})
export class TodoListSelector {
  /**
   *
   */
  constructor(private store: Store<TodoListState>) {}
  /**
   * getTodoList
   */
  public getTodoList() {
    return this.store.select(todoListSelectorFn);
  }
}
