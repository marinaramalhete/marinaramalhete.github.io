# marinaramalhete.github.io

Personal CV site. Static HTML, CSS, and a few lines of JavaScript — no build step, no
dependencies, no external network requests.

## Files

| File | Purpose |
|---|---|
| `index.html` | All content. This is the only file to edit when the CV changes. |
| `styles.css` | Design tokens, layout, dark variant, print rules. |
| `main.js` | Assembles the email address at runtime so it isn't in the served HTML. |
| `.nojekyll` | Tells GitHub Pages to serve files as-is instead of running Jekyll. |
| `robots.txt`, `sitemap.xml` | Crawler hints. Update `lastmod` after substantial edits. |

## Editing

Content lives directly in `index.html`, marked with banner comments:

```html
<!-- ============================== EXPERIENCE ============================== -->
```

Add a role by copying an existing `<article class="entry">` block. Keep the
`<time datetime="YYYY-MM">` attributes accurate — they are machine-readable and feed the
structured data that search engines use.

Note: the two Streamlit app links return a `303` to `/-/login?payload=…` when probed with `curl`.
That is Streamlit's anonymous session bootstrap, not an auth wall — both apps are public and render
normally in a browser. Don't "fix" it.

## Preview locally

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Print / PDF

There is no separate PDF. `styles.css` has a print block that strips navigation, switches to
black on white, prints link destinations, and stops entries from splitting across page breaks.
Cmd+P → "Save as PDF" produces the CV.

## Deploy

The repository must be named `marinaramalhete.github.io` exactly — GitHub Pages only serves a
user site from a repo matching the account name.

```sh
git init
git add .
git commit -m "Personal CV site"
git branch -M main
git remote add origin git@github.com:marinaramalhete/marinaramalhete.github.io.git
git push -u origin main
```

Then: repository **Settings → Pages → Source: Deploy from a branch → `main` / `root`**. The first
build takes about a minute. After that, every push to `main` republishes.

## Notes

- The LinkedIn `Profile.pdf` export is deliberately not in this repo; `.gitignore` excludes PDFs.
- Publications cite author lists exactly as published, including the two different signing forms
  ("Marina Ramalhete Masid" and "Marina Ramalhete"), so the page matches the proceedings.
- Dark mode follows the operating system. There is no toggle by design.
