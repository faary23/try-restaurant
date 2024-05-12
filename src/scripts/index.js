/* eslint-disable import/no-unresolved */
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('.hamburger'),
  drawer: document.querySelector('.drawer-menu'),
  content: document.querySelector('main'),
  hero: document.querySelector('.hero'),
});
