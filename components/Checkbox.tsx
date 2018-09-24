import * as b from 'bobril';

export interface ICheckboxData {
  value: boolean;
  onChange?: (newVal: boolean) => void;
}

interface ICheckboxCtx extends b.IBobrilCtx {
  data: ICheckboxData;
}

const Checkbox = b.createVirtualComponent<ICheckboxData>({
  id: 'checkbox',
  render(ctx: ICheckboxCtx, me: b.IBobrilNode) {
    me.tag = 'input';
    me.attrs = { type: 'checkbox', value: ctx.data.value };
  },
  onChange(ctx: ICheckboxCtx, newValue: boolean): boolean {
    ctx.data.onChange(newValue);
    return true;
  },
});

export default Checkbox;
