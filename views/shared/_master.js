const html = require('html-template-tag');

function createTemplate(body) {
  const htmlString = html`
    <html>
      <head>
        <title>McDowell Software Consulting</title>
        <link rel="stylesheet" href="/css/main.css" />
      </head>
      <body>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        $${body}
        <script src="/js/bundle.js"></script>
      </body>
    </html>
  `;

  return htmlString;
}

module.exports = createTemplate;
