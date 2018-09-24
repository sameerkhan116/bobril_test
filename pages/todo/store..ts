import { observable } from 'bobx';

import { IItem } from './Item';

export class TodoStore {
  @observable
  currentValue: string = '';
  @observable
  private _items: IItem[] = [];

  get items(): IItem[] {
    return this._items;
  }

  get isValueEmpty(): boolean {
    return this.currentValue.trim().length === 0;
  }

  add(): void {
    if (this.isValueEmpty) return;

    this._items.unshift({
      completed: false,
      title: this.currentValue,
    });

    this.currentValue = '';
  }

  remove(index: number): void {
    this._items.splice(index, 1);
  }

  setCompleted(index: number, completed: boolean) {
    this._items[index].completed = completed;
  }
}

export const todoStore: TodoStore = new TodoStore();
