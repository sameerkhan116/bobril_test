import * as b from 'bobril';

export interface ITextboxData {
  value: string;
  onChange: (newVal: string) => void;
}

interface ITextboxCtx extends b.IBobrilCtx {
  data: ITextboxData;
}

const Textbox = b.createVirtualComponent<ITextboxData>({
  id: 'textbox',
  render(ctx: ITextboxCtx, me: b.IBobrilNode) {
    me.tag = 'input';
    me.attrs = { type: 'text', value: ctx.data.value };
  },
  onChange(ctx: ITextboxCtx, newValue: string): boolean {
    ctx.data.onChange(newValue);
    return true;
  },
});

export default Textbox;
