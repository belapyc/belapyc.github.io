# belapyc.github.io

Personal website of **Artsiom Hramyka** — ML researcher and CRUK ACED Pathway Award Principal Investigator at the University of Cambridge.

Live at https://belapyc.github.io.

Built with [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme, hosted on GitHub Pages.

## Editing

| What to change             | Where                                             |
| -------------------------- | ------------------------------------------------- |
| Bio on the homepage        | `_pages/about.md`                                 |
| Site title / URL / footer  | `_config.yml`                                     |
| Social links (email, etc.) | `_data/socials.yml`                               |
| Publications               | `_bibliography/papers.bib`                        |
| CV (rendered page)         | `_data/cv.yml`                                    |
| CV (PDF download)          | `assets/pdf/cv.pdf`, `assets/pdf/cv_industry.pdf` |
| Profile picture            | `assets/img/prof_pic.png`                         |
| News items (homepage feed) | `_news/YYYY-MM-DD-slug.md`                        |
| Blog posts                 | `_posts/YYYY-MM-DD-slug.md`                       |
| Project pages              | `_projects/*.md`                                  |

## Local preview

Requires Ruby >= 3.0 and Bundler.

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

## Deployment

Pushes to `main` trigger the `.github/workflows/deploy.yml` GitHub Action, which builds Jekyll and deploys to GitHub Pages. Settings -> Pages -> Source must be set to **GitHub Actions**.

## Credits

Theme: [al-folio](https://github.com/alshedivat/al-folio) by Maruan Al-Shedivat and contributors.
