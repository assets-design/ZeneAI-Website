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

Built: production static export (Vite)
