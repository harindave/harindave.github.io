# Harin Dave — QA + Data Analytics site (Phase 1)

Public website for the "Quality. Data. Insights." brand: services, INR pricing, packages, projects, resume and a Start a Project form. Plain HTML, CSS and JavaScript, no build step.

## Files
- `content.js` — **all site content and prices** (the Phase 1 CMS). Change text, prices, services, projects, section order here.
- `assets/app.js`, `assets/style.css`, `index.html` — the site itself.
- `resumes/Harin_Dave_QA_Data_Analytics_Resume.pdf` — the public resume.
- `.github/workflows/pages.yml` — publishes the site on every push to `main`.

## Publish for free (GitHub Pages)
1. Create a public repo named `harindave.github.io` and push this folder to `main`.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. After the "Deploy site" action finishes, the site is live at `https://harindave.github.io`.

## Edit without touching code (only you)
Open your live site with `?edit` on the end once. That browser then shows **Edit page**. Click any text to change it; use the orange bar above each section to move or hide it. Edits are a private draft (the page itself is your preview). To **publish**, click **Download content.js**, replace the file in the repo and push. Visitors never see edit controls. `?lock` turns editing off.

## Receive form submissions
Until you add an endpoint, the forms open the visitor's email app with the details filled in. For direct delivery, create a free form at formspree.io or web3forms.com and paste its URL into `form.endpoint` in `content.js`.

## Placeholders to fill
- Photo: edit mode → Change photo.
- Microsoft certificate status (`certs` in `content.js`; hidden until a status is set).
- GitHub links on each project as repos go live.
- Privacy, Terms and Refund text in the footer.
- Testimonials: only add real, approved ones.

## Not in Phase 1 (planned later)
Client accounts and portal, invoices and Razorpay payments, admin dashboards, analytics, server-side CMS. These need a backend (e.g. Supabase) and cannot run on GitHub Pages alone.
