import * as b from 'bobril';

import List from './List';
import Form from './Form';

const Todo = b.createVirtualComponent({
  id: 'todo',
  render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
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
