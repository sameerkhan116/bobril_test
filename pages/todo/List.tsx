import * as b from 'bobril';

import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';
import { todoStore } from './store.';

const listItemStyle = {
  marginLeft: 10,
  marginRight: 10,
  width: 150,
  display: 'inline-block',
};

const List = b.createVirtualComponent({
  id: 'list',
  render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.children = (
      <div>
        {todoStore.items.map((item, index) => (
          <p>
            <Checkbox
              value={item.completed}
              onChange={completed => todoStore.setCompleted(index, completed)}
            />
            <div style={listItemStyle}>{item.title}</div>
            <Button title="REMOVE" onClick={() => todoStore.remove(index)} />
          </p>
        ))}
      </div>
    );
  },
});

export default List;
