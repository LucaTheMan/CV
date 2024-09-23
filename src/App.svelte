<script lang="ts">
  import page from 'page';
  import router from 'page'
  import Login from './pages/Login.svelte';
  import Portfolio from "./pages/Portfolio.svelte";
  import {isLoggedIn} from "./lib/isLoggedInMW";
  import Error from "./pages/Error.svelte";


  let pageComponent: any;
  let params: any;
  let currentRoute: string;

  router('/',(ctx) => {
    pageComponent = Login;
    currentRoute = ctx.pathname;
  });

  router('/home',isLoggedIn,(ctx) => {
    pageComponent = Portfolio;
    currentRoute = ctx.pathname;
  });

  router('/error',(ctx) => {
    pageComponent = Error;
    currentRoute = ctx.pathname;
  });

  // const userdata: any = sessionStorage.getItem('user');
  // if (userdata.username !== "luca") {
  //
  // }

  router.start();

</script>

<main>
  <svelte:component this={pageComponent} {params} />
</main>

<style>

  :global(body,html) {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;

    background: linear-gradient(#001d37, rgba(1, 62, 112, 0.53));
    color: white;
    /*overflow: auto;*/
  }

  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }


</style>
