const template = require('./shared/_master');
const html = require('html-template-tag');

const htmlString = html`
  <p>Here is our contact info</p>
`;

module.exports = template(htmlString, 'Contact');
