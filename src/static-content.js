const address = (line1, city, state, zip5, mapLink) => ({ line1, city, state, zip5, mapLink, toString: () => `${line1}, ${city}, ${state}, ${zip5}`});

const site = ({
  name: 'Project Management Secrets',
  siteOwner: 'Silas Reinagel',
  owner: 'Silas Reinagel',
  slogan: 'The Simple Techniques You Need to Hit A Bullseye Every Time',
  heroHeader: 'Tricks to successfully deliver your projects every time!',
  heroSubheader: '',
  email: 'silas@silasreinagel.com',
  logo: './images/logo-w-transparency.png',
  logoMobile: './images/logo-w-transparency.png',
  address: address("2030 W Plata Ave", "Mesa", "AZ", "85202", ""),
  contactPrompt: 'Got a question?<br>Need help with an order?<br>Send us a message',
  social: {
  },
  screenshots: [
  ]
});

export default site;
