import * as b from 'bobril';

import Button from '../components/Button';

interface IMainCtx extends b.IBobrilCtx {
  counter: number;
  intervalId: number;
}

const Main = b.createVirtualComponent({
  id: 'main',
  init(ctx: IMainCtx) {
    start(ctx);
  },
  render(ctx: IMainCtx, me: b.IBobrilNode) {
    me.children = (
      <div>
        <h1>Hello!</h1>
        <p>Counter: {ctx.counter.toString()}</p>
        <Button title="Reset" onClick={() => reset(ctx)} bold />
      </div>
    );
  },
  destroy(ctx: IMainCtx) {
    stop(ctx);
  },
});

function start(ctx: IMainCtx) {
  ctx.counter = 0;
  ctx.intervalId = window.setInterval(() => {
    ctx.counter++;
    b.invalidate();
  }, 1000);
}

function stop(ctx: IMainCtx) {
  window.clearInterval(ctx.intervalId);
}

function reset(ctx: IMainCtx) {
  ctx.counter = 0;
  b.invalidate(ctx);
}

export default Main;
