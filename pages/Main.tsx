import * as b from 'bobril';

import Button from '../components/Button';
import Todo from './todo/Todo';

const Main = b.createVirtualComponent({
  id: 'main',
  render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.children = (
      <div>
        <h1>Hello!</h1>
        <Todo />
      </div>
    );
  },
});

export default Main;
