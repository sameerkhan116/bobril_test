import * as b from 'bobril';
import button from './button';

b.init(() => {
  return [
    { tag: 'h1', children: 'Hello world!' },
    button({
      title: 'Click Me!',
      onClick: () => alert('Yeah I was clicked!'),
    }),
  ];
});
