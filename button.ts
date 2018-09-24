import * as b from 'bobril';
import { IButtonData } from './button';

export interface IButtonData {
  title: string;
  onClick?: () => void;
}

interface IButtonCtx extends b.IBobrilCtx {
  data: IButtonData;
}

const button = b.createComponent({
  render(ctx: IButtonCtx, me: b.IBobrilNode) {
    me.tag = 'button';
    me.children = ctx.data.title;
  },
  onClick(ctx: IButtonCtx): boolean {
    if (ctx.data.onClick) {
      ctx.data.onClick();
    }

    return true;
  },
});

export default button;
