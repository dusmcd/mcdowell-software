const template = require('./shared/_master');
const html = require('html-template-tag');

const htmlString = html`
  <button type="button">Click Here to Enter!</button>
`;

module.exports = template(htmlString, 'McDowell Software Consulting');
