# Harin Dave — QA + Data Analytics Portfolio

Personal portfolio website for Harin Dave, focused on **Quality Assurance, automation exposure, Data Analytics, Data QA, and QA + Data roles**.

The site is a static HTML/CSS/JavaScript portfolio with no build step. It is published through GitHub Pages with GitHub Actions.

## What the portfolio covers

- Professional QA experience and measurable testing outcomes
- Manual, functional, regression, API and database testing
- Automation exposure with Selenium, Cucumber, an existing Page Object Model framework and Jenkins
- SQL and data validation
- Data Analytics projects using Excel, SQL and Python/Pandas
- QA + Data projects focused on data quality and validation
- Completed IIT Delhi Data Analysis certification program and Microsoft certificate
- Resume, GitHub and LinkedIn links

## Website sections

**Home · About · Services · Experience · Skills · Projects · Resume · Contact**

The Services section is intentionally presented as **areas of expertise/capabilities only**. It does not publish service charges, packages, budgets or pricing.

## Files

- `index.html` — page entry point and SEO metadata
- `content.js` — all editable site content
- `assets/app.js` — page rendering, filtering, contact form handling and private browser editor
- `assets/style.css` — site styling and responsive layout
- `resumes/Harin_Dave_QA_Data_Analytics_Resume.pdf` — public portfolio resume
- `.github/workflows/pages.yml` — GitHub Pages deployment workflow
- `.nojekyll` — keeps the site compatible with static GitHub Pages deployment

## Run locally

Because the site is static, you can preview it with a simple local server. From the project folder in PowerShell:

```powershell
python -m http.server 8000
```

Then open:

`http://localhost:8000`

You can also use the VS Code Live Server extension.

## Publish with GitHub Pages

The repository should remain **public** for this portfolio. Push the project to the `main` branch, then set **Settings → Pages → Build and deployment → Source → GitHub Actions**. The existing workflow deploys the root of the repository.

After a successful push, open the repository's **Actions** tab and confirm the **Deploy site** workflow completes successfully. The published site is:

`https://harindave.github.io/`

## Updating the portfolio

### Simple method

Edit `content.js`, save the file, commit the change and push to `main`. GitHub Actions will publish the update.

### Optional browser editor

Open the live site with `?edit` appended to the URL. The private editor lets the owner preview content changes in that browser. To publish those edits, use **Download content.js**, replace the repository's `content.js`, commit and push it.

Use `?lock` to clear the private edit state from that browser.

## Adding a new project

Add a new object to the `projects` array in `content.js` using the same fields as the existing projects:

```text
n  = project name
cat = QA / Data Analytics / QA + Data
c   = status and type
p   = problem
a   = approach
r   = result
tools = tools used
l   = GitHub project URL without https://
v   = true
```

When the GitHub repository for a project is ready, add its URL to `l` and push the change.

## Contact form

The portfolio contact form currently falls back to the visitor's email app. For direct form delivery, add a Formspree or Web3Forms endpoint to `form.endpoint` in `content.js`.

## Public repository safety

Do not commit employer-confidential information, private client data, credentials, API keys, internal screenshots or any other non-public material. Professional project descriptions on the portfolio should stay at a high level where client details are confidential.

## Future improvements

Possible future additions include dedicated project repositories, stronger automation projects, richer Data Analytics case studies, a professional photo, and a custom domain after the portfolio content is finalized.
