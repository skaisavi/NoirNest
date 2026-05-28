# NoirNest - Luxury Creative Studio

NoirNest is a static luxury creative studio portfolio. It includes a polished homepage, three case-study pages, Netlify form wiring, and simple deployment configuration.

## Files

- `index.html` - homepage
- `styles.css` - shared styling
- `script.js` - navigation and form behavior
- `projects/` - case-study pages
- `assets/favicon.svg` - favicon
- `netlify.toml` and `_redirects` - static deployment config

## Local Preview

Run a static file server from this folder:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deployment

Netlify:

1. Create a new Netlify site from the Git repo or drag this folder into Netlify.
2. Use the repository root as the publish directory.
3. Netlify Forms will detect the contact form because it includes `data-netlify="true"`.

Vercel:

1. Import the Git repo in Vercel.
2. Leave framework settings unset because this is a static site.
3. Use the repository root as the output directory.

## Automation

The repo includes GitHub Actions workflows for Netlify and Vercel:

- `.github/workflows/deploy_netlify.yml`
- `.github/workflows/deploy_vercel.yml`

Required secrets:

- Netlify: `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`
- Vercel: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`
