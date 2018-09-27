import * as b from 'bobril';
import Main from './pages/Main';
import Todo from './pages/todo/Todo';
import About from './pages/about/about';

export const main: b.IRoute = { handler: Main };
export const todo: b.IRoute = {
  handler: Todo,
  name: 'todo',
  url: '/todo/:item?',
};
export const about: b.IRoute = { handler: About, name: 'about', url: '/about' };

export const defaultRoute = todo;
