import * as b from 'bobril';
import * as bs from 'bobrilstrap';

import * as routes from '../../routes';

const About = b.createVirtualComponent({
  id: 'about',
  render(ctx: b.IBobrilCtx, me: b.IBobrilNode) {
    me.children = (
      <bs.Container>
        <bs.H1>About</bs.H1>
        <p>A nice about page</p>
        <bs.Button
          label="Home"
          onClick={() =>
            b.runTransition(b.createRedirectPush(routes.defaultRoute.name))
          }
        />
      </bs.Container>
    );
  },
});

export default About;
