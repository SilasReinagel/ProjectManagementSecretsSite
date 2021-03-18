<script>
  export let productId = "";
  export let text = "I want this!";
</script>

<svelte:head>
  <script src="https://gumroad.com/js/gumroad.js"></script>
</svelte:head>

<div class="cta">
  <a class="order-button decor-font" href="https://gum.co/{productId}?wanted=true" target="_blank">{text}</a>
</div>

<style>

.cta {
  display: flex;
  align-content: center;
  justify-items: center;
  justify-content: center;
  align-items: center;
  margin: 1em;
}

.order-button {
  border-radius: 3px;
  background-color: #00439b;
  background-repeat: no-repeat;
  max-width: 400px;
  margin: 0.6em auto;
  margin-left: auto;
  margin-right: auto;
  padding: 0.8em 1.8em;
  transition-duration: 0.2s;
  color: #fcf58c;
  line-height: 1.5em;
  overflow: hidden;
  font-weight: 500;
  box-shadow: 0 4px 8px 0 rgba(0.2, 0.2, 0.2, 0.8);
  /* font-family: $heading-font-family;
  font-size: $h3;
  font-weight: $bold-font-weight;
  box-shadow: 0 4px 8px 0 $shadow; */
}

.order-button:hover,
.order-button:active,
.order-button:focus  {
  background-color: #0099ce;
}

</style>