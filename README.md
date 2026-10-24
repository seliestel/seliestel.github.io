# ignasiribo.com

Personal website of Ignasi Ribó, built with Jekyll and hosted on GitHub Pages.
GitHub rebuilds the site automatically a minute or two after every push.

## Where things are

| What | File |
|---|---|
| Site title, email, Google Analytics ID | `_config.yml` |
| Books (one file per book) | `_books/` |
| Book cover images (212 × 300 px JPG) | `assets/img/` |
| Texts page (generated from the CV data) | `texts.md` |
| CV data | `_data/cv.yml` (page: `cv/cv_ignasi.md`) |
| About page | `about.md` |
| Colours, fonts, spacing | top of `assets/css/main.scss` |
| Into Semiotics companion guide | `into-semiotics/` (own layout and styles) |

## Adding a book with its own page

1. Export the cover at **212 × 300 px** and save it in `assets/img/`, e.g. `assets/img/new_book_cover.jpg`.
2. Copy one of the files in `_books/` (e.g. `1_into_semiotics.markdown`) and fill in the fields:

```yaml
---
order: 1                 # position on the homepage (1 = first); renumber the others if needed
title: "Full title: With subtitle"
year: 2027
genre: Textbook          # Novel, Essay, Edited collection...
publisher: Publisher name   # optional
status: In press         # optional; remove when the book is out
img: /assets/img/new_book_cover.jpg
description: One sentence for search engines and link previews.
links_title: Where to find the book   # optional heading for the links
links:                   # optional; the cover links to the first one
  - label: Publisher's page
    url: https://...
reviews_title: Book reviews           # optional
reviews:                 # optional
  - text: "Reviewer name, *Journal* 10(2), 2027"
    url: https://...
---

The synopsis goes here, in plain Markdown. *Italics* with asterisks.

> “An endorsement quote.”
> <cite>Name, Institution</cite>
```

## Adding a book that only links elsewhere (no page of its own)

```yaml
---
layout: redirect
order: 12
title: "Book title"
year: 2001
genre: Novel
img: /assets/img/book_cover.jpg
redirect: https://www.amazon.es/...
sitemap: false
---
```

## Google Analytics

Paste your GA4 Measurement ID (`G-XXXXXXXXXX`) into `google_analytics` in `_config.yml`.
While it is empty, no analytics code is added to the pages.
