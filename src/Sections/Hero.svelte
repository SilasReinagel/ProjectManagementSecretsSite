<script>
  import company from '../static-content.js';
</script>

 <div class="hero-image">
  <img src="./images/project-management-secrets-hardcover.png" alt="Project Management Secrets Book Cover"/>
  <div class="hero-text center-vh center">
    <h1 class="sans-font">{company.heroHeader}</h1>
    <p class="mb2">{company.heroSubheader}</p>
  </div>
</div>

<style>
  .hero-image {
    background-color: #fff;

    min-height: 86vh;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 0;
  }

  img {
    max-width: 750px;
    margin-top: 1em;
    margin-left: 1em;
    
    top: 45%;
    left: 66%;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  .hero-text {
    max-width: 500px;
    text-align: center;
    position: absolute;
    top: 45%;
    left: 30%;
    transform: translate(-50%, -50%);
    color: var(--primary-color);
  }

  h1 {
    font-size: 2em;
    color: var(--primary-color);
  }

  p {
    color: var(--primary-color);
    line-height: 1.2em;
    font-size: 1.2em;
  }
</style>
