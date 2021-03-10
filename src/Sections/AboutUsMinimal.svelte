<script>
  import Container from '../Elements/Container.svelte';
</script>

<Container>
  <div class="sizer center-vh">
    <div>
      <h2>Our toys are sold through Amazon FBA.</h2>
      <h3>If you are a customer, go to Amazon and shop as you normally would.</h3>
      <h3>If you are a wholesaler or supplier, feel free to send us a message on the Contact form.</h3>
      <a href="https://www.amazon.com" class="amazon-link">
        <img src="/images/available-at-amazon.png" alt="Available at Amazon"/>
      </a>
    </div>
  </div>
</Container>

<style>
  .sizer {
    min-height: 80vh;
    padding: 2em 2em;
  }

  .amazon-link {
    max-width: 600px;
  }
</style>
