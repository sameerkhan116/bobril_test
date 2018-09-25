import * as b from 'bobril';
import * as bs from 'bobrilstrap';

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
      <bs.Table>
        <bs.TBody>
          {todoStore.items.map((item, index) => (
            <bs.Tr>
              <bs.Td style={bs.typography.textLeft}>
                <bs.InputCheckbox
                  checked={item.completed}
                  onChange={completed =>
                    todoStore.setCompleted(index, completed)
                  }
                />
              </bs.Td>
              <bs.Td>{item.title}</bs.Td>
              <bs.Td style={bs.typography.textRight}>
                <bs.Button
                  label="REMOVE"
                  onClick={() => todoStore.remove(index)}
                />
              </bs.Td>
            </bs.Tr>
          ))}
        </bs.TBody>
      </bs.Table>
    );
  },
});

export default List;
