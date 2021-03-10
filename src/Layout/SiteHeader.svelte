<script>
  export let pageName;

  let sidebarOpen = false;

  import HamburgerIcon from '../Elements/HamburgerIcon.svelte';
  import SiteSidebar from './SiteSidebar.svelte';
  import Container from '../Elements/Container.svelte';

  import company from '../static-content';
  import { pages } from '../pages.js';
</script>

<div class="full-width">
  <header class="darken">
      <a href="." class="home"><img src="/images/logo-w-transparency.png" alt="Logo" style="height: 64px; width: 64px; border-radius: 16px"/>
        <h1>{company.name}</h1>
      </a>
      <SiteSidebar bind:open={sidebarOpen} {pageName}/>
      <nav class="navbar-right tablet-hidden">
        {#each pages.filter(p => !!p.showInMainNav && (!pageName || p.name !== pageName)) as page}
          <a class="navlink decor-font" href={page.href}>{page.name}</a>
        {/each}
      </nav>
      <HamburgerIcon bind:open={sidebarOpen}/>
  </header>
</div>

<style>
  .full-width {
    width: 100vw;
    box-shadow: 3px 3px 10px 3px #aaa;
    height: 90px;
    z-index: 999999;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    box-sizing: content-box;
    background-color: rgba(0, 0, 0, 0.0);
    padding-right: 1em;
    height: 90px;
    border-bottom: 10px solid var(--alternate-color);
  }

  nav {
    display: flex;
    flex-direction: row;
  }

  a {
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    height: 60px;
    color: var(--secondary-color);
    padding: 0 0.8em;
  }

  a img {
    width: 38px;
  }

  a img:last-of-type {
    margin-right: 0.5em;
  }

  .home {
    display: flex;
    justify-content: center;
  }

  h1 {
    margin: 10px;
    color: var(--secondary-color);
  }

  .navlink {
    color: var(--secondary-color);
    padding: 0 1.2em;
    font-size: 1.2em;
    line-height: 22px;
    font-weight: 500;
    letter-spacing: 1.5px;
    transition: all 350ms;
    text-align: center;
  }
</style>
