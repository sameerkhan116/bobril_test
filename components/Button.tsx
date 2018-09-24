import * as b from 'bobril';

export interface IButtonData {
  title: string;
  onClick?: () => void;
  bold?: boolean;
}

interface IButtonCtx extends b.IBobrilCtx {
  data: IButtonData;
}

const bold = b.styleDef({
  fontWeight: 'bold',
});

const Button = b.createVirtualComponent<IButtonData>({
  id: 'button',
  render(ctx: IButtonCtx, me: b.IBobrilNode) {
    me.tag = 'button';
    b.style(me, ctx.data.bold && bold);
    me.children = ctx.data.title;
  },
  onClick(ctx: IButtonCtx): boolean {
    if (ctx.data.onClick) {
      ctx.data.onClick();
    }

    return true;
  },
});

export default Button;
