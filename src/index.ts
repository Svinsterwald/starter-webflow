import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Cesar Simeoni';
  greetUser(name);
  const testing = document.querySelector('body') || document.head;
  testing.style['backgroundColor'] = 'black';
});
