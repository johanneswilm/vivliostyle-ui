# Vivliostyle.js

Vivliostyle.js is a web application displaying and typesetting HTML(XML)/CSS documents.
This is a bundled package of [Vivliostyle Engine](https://github.com/vivliostyle/vivliostyle.js), [Vivliostyle UI](https://github.com/vivliostyle/vivliostyle-ui) and other typesetting libraries.

- View samples online: <http://vivliostyle.com/en/sample/>
- Download release version (beta): <http://vivliostyle.github.io/vivliostyle.js/downloads/vivliostyle-js-viewer-0.2.0.zip>
- Download latest development version: <http://vivliostyle.github.io/vivliostyle.js/downloads/vivliostyle-js-latest.zip>

## How to use

1. Unzip the downloaded ZIP file.

2. Open a terminal or a command prompt and navigate to the folder (`vivliostyle-js-[version]`) generated in the step 1.

3. Run the following command:

  ```
  (Shell environment like Mac OS X or Linux)
  > ./start-webserver
  (Windows)
  > .\start-webserver
  ```

  This command starts a web server if either of Node.js, Ruby, Python is installed.

  If a message
  ```
  Please install Node.js or Python or Ruby and rerun this script, or use your favorite HTTP server.
  ```
  is shown, install either of them and rerun the command, or start your favorite web server.

4. Open <http://localhost:8000> with a web browser.

## Bug reports & feature requests

Please send them to

- GitHub Issues: <https://github.com/vivliostyle/vivliostyle.js/issues>
- Mailing list: <https://groups.google.com/forum/?hl=ja#!forum/vivliostyle>

## Source code

- Vivliostyle Engine on GitHub: <https://github.com/vivliostyle/vivliostyle.js>
- Vivliostyle UI on GitHub: <https://github.com/vivliostyle/vivliostyle-ui>

## License

Licensed under [GPL Version 3](http://www.gnu.org/licenses/gpl.html).

This package includes following libraries:

- [Font Awesome](http://fontawesome.io/) (Only includes font files, which are licensed under [SIL OFL 1.1](http://scripts.sil.org/OFL))
- [MathJax](https://www.mathjax.org/) ([Apache License, Version 2.0](http://cdn.mathjax.org/mathjax/2.0-latest/LICENSE))
