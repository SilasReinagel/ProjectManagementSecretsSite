<script>
  import TwoColumnLayout from '../Elements/TwoColumnLayout.svelte';

  import company from '../static-content';
</script>

<TwoColumnLayout>
  <div class='center-vertically' slot='first'>
    <img class="logo" src={company.logo} alt="{company.name} Logo"/>
  </div>
  <div slot='second'>
    <h1>{company.name}</h1>
    <p><b>{company.name}</b> is located in Tempe, AZ, at the NE Corner of McClintock and Southern.</p>
    <p class='quote decor-font'>Choice of the Connoisseur</p>
    <p>{company.name} is a family owned and operated coffee shop which is centered around its community. Live jazz, game nights, 
      and the cozy, homey interior all provide you with the personal warmth and connection you are longing for. 
    <p>The carefully selected, high-quality coffees, teas, and specialty mochas seal the deal with beverages that satifsy even 
      the most discerning customers.</p>
    <p>Come on in and have a drink with us today...</p>
  </div>
</TwoColumnLayout>

<style>
  .center-vertically {
    display: flex;
    justify-content: center;
    margin-top: auto;
    margin-bottom: auto;
  }

  h1 {
    color: var(--alternate-color);
  }

  p {
    color: var(--alternate-color-light);
    font-size: 1.1em;
    line-height: 1.3em;
  }

  .logo {
    width: 360px;
    max-width: 80vw;
    height: auto;
  }

  .quote {
    border-left-color: var(--secondary-color);
    border-left-style: solid;
    border-left-width: 6px;
    padding: 1em;
    font-size: 1.4em;
    font-weight: 700;
    color: var(--alternate-color);
    margin: 1.5em 0px;
  }
</style>
