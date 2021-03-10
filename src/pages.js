import Home from './Pages/Home.svelte';
import About from './Pages/About.svelte';
import Contact from './Pages/Contact.svelte';

const DefaultPage = Home;
export const pages = [
  { path: '/', href: '/', name: 'Home', component: DefaultPage, showInMainNav: true },
  // { path: '/about', href: '/index.html?page=about', name: 'About', component: About, showInMainNav: true },
  // { path: '/contact', href: '/index.html?page=contact', name: 'Contact', component: Contact, showInMainNav: true },
]
