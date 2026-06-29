# PSU AI Workshop Website

Simple static site for the "AI for Administrative Staff" workshop.

## Files

- `index.html` — landing page with agenda and prep info
- `materials.html` — links to all workshop documents and data files
- `self-guided.html` — full self-guided exercise instructions for 10:30–11:15
- `css/style.css` — mobile-first styles
- `js/nav.js` — active nav marker
- `slides.pdf` — exported Slidev deck (generated separately)
- `data/` — copied data files for exercises
- `presentation/` — copied HTML slide deck
- `*.md` — copied source documents for download

## Local preview

```bash
cd workshops/ai_workshop_claude_2026/site
python -m http.server 8000
```

Open http://localhost:8000

## Export slides to PDF

```bash
cd ../presentation
npm install
npm i -D playwright-chromium
npm run export
mv slides-export.pdf ../site/slides.pdf
```

## Deployment

Deploy the contents of this `site/` folder to any static host.

### GitHub Pages + custom subdomain

1. In repo settings, enable GitHub Pages from `main` branch `/docs` folder or `gh-pages` branch.
2. Place site files in the served folder.
3. Add `CNAME` file containing the desired subdomain, e.g. `ai-workshop.tanwa.info`.
4. Ask the Tanwa.info DNS administrator to add a CNAME record:
   - Name: `ai-workshop`
   - Target: `CommanderCrowCode.github.io`

### Netlify Drop

1. Go to https://app.netlify.com/drop
2. Drag and drop this `site/` folder.
3. In site settings → Domain management, add custom domain.
4. Configure CNAME at Tanwa.info DNS provider.
