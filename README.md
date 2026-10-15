# Cara Ko portfolio site

Static site, no build step. Open index.html in a browser to preview.

Files
- index.html: gallery of 18 works, opening with a large hero piece (change the hero by editing the img src in the hero section) with a lightbox (click a work; arrow keys move between works; Esc closes)
- resume.html: full resume page, with a Download PDF link to Cara_Ko_Resume.pdf
- works.js: titles, media, and descriptions for the gallery (edit text here)
- style.css: all styling
- works/: web-size images (2200 px long edge) and the Thought Cake video
- thumbs/: gallery thumbnails

Publish on GitHub Pages
1. Create a new public repository on GitHub, for example cara-ko-portfolio (or carako.github.io for a root address).
2. Upload every file and folder in this zip to the repository root (Add file, Upload files; drag the whole contents in).
3. Repository Settings, Pages, Source: Deploy from a branch; Branch: main, folder: / (root). Save.
4. After a minute the site is live at https://USERNAME.github.io/cara-ko-portfolio/ (or https://carako.github.io/ for the root repo).

Updating
- Change a description: edit works.js.
- Swap a resume PDF: replace Cara_Ko_Resume.pdf, keep the name.
- Add a work: put the image in works/ and a thumbnail in thumbs/, then add an entry to works.js.
