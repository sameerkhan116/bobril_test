import * as b from 'bobril';

import List from './List';
import Form from './Form';
import { todoStore } from './store.';

interface ITodoData {
  routeParams: {
    item?: string;
  };
}

interface ITodoCtx extends b.IBobrilCtx {
  data: ITodoData;
}

const Todo = b.createVirtualComponent<ITodoData>({
  id: 'todo',
  init(ctx: ITodoCtx) {
    if (ctx.data.routeParams.item) {
      todoStore.currentValue = ctx.data.routeParams.item;
      todoStore.add();
    }
  },
  render(ctx: ITodoCtx, me: b.IBobrilNode) {
    me.children = (
      <div>
        <h2>TODO</h2>
        <Form />
        <List />
      </div>
    );
  },
});

export default Todo;
