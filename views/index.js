const template = require('./shared/_master');
const html = require('html-template-tag');

const htmlString = html`
  <h1>McDowell Software Consulting</h1>
  <button type="button">Click Here to Enter!</button>
`;

module.exports = template(htmlString);
