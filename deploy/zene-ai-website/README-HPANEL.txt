ZENE AI — WEBSITE DEPLOY PACKAGE
==================================

Upload this folder to your Hostinger hPanel for design review.

HOW TO UPLOAD
-------------
1. Log in to hPanel → Files → File Manager
2. Open your domain's public folder (usually public_html)
3. Upload zene-ai-website.zip
4. Right-click the zip → Extract
5. Move all files from the extracted folder into public_html
   (index.html must sit directly inside public_html, not in a subfolder)

IMPORTANT
---------
- Keep .htaccess in the same folder as index.html (required for page links like /about, /blog)
- If .htaccess is missing after extract, upload the .htaccess file from this folder manually
- Enable "Show hidden files" in File Manager if you don't see .htaccess

CONTACT FORM (PRODUCTION)
-------------------------
The contact form uses Web3Forms. The access key must be set in .env BEFORE running
npm run build:deploy (VITE_WEB3FORMS_ACCESS_KEY). Rebuild and re-upload if the form
does not submit on the live site.

iOS / iPHONE TESTING (INCLUDED IN THIS BUILD)
---------------------------------------------
This build includes fixes for blank black/white screens on iPhone/iPad Safari:

1. Main JavaScript bundle size reduced
   - The contact-form city database is NO LONGER bundled into the homepage JS
   - India cities load from /assets/data/india-cities.json on the Contact page only
   - Route pages are code-split so Home loads a smaller initial script

2. iOS layout + reveal fallbacks
   - html.ios-touch class applied before React loads
   - Section reveal content shows immediately (no stuck opacity: 0 panels)
   - Viewport snap scroll disabled on Apple touch devices at all breakpoints
   - CSS forces normal scroll + visible content inside white section cards

After upload, test on a real iPhone (Safari + Chrome):
- Home page loads with hero content visible (not an empty black screen)
- Scroll all sections — white cards show text/images
- /contact — state + city dropdowns still work
- English AI, Code Monkey, The Edge, About

PAGES TO REVIEW
---------------
/              Home
/about         About
/english-ai    English AI
/code-monkey   Code Monkey
/the-edge      The Edge
/blog          Blog
/contact       Contact
/thank-you     Thank You

Built: 2026-06-09 18:05 (production static export, Vite)

