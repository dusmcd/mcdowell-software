const template = require('./shared/_master');
const html = require('html-template-tag');

const htmlString = html`
  <p>These are our services</p>
`;

module.exports = template(htmlString, 'Services');
