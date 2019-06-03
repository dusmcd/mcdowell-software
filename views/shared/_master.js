const html = require('html-template-tag');

function createTemplate(body, header) {
  const htmlString = html`
    <!DOCTYPE html>
    <html>
      <head>
        <title>McDowell Software Consulting</title>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="/css/main.css" />
      </head>
      <body>
        <nav id="main-nav">
          <section id="nav-logo">
            <a href="/" class="page-links">MCDEV</a>
          </section>
          <section id="right-nav">
            <div><a href="/about" class="page-links">About</a></div>
            <div><a href="/services" class="page-links">Services</a></div>
            <div><a href="/contact" class="page-links">Contact</a></div>
          </section>
        </nav>
        <div id="header"><h1>${header}</h1></div>
        $${body}
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"
        ></script>
        <script src="/js/bundle.js"></script>
      </body>
    </html>
  `;

  return htmlString;
}

module.exports = createTemplate;
