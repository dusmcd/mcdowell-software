const template = require('./shared/_master');
const html = require('html-template-tag');

const htmlString = html`
  <p>This is the about page</p>
`;

module.exports = template(htmlString, 'About');
