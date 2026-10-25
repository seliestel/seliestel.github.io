# ignasiribo.com

Personal website of Ignasi Ribó, built with Jekyll and hosted on GitHub Pages.
GitHub rebuilds the site automatically a minute or two after every push.

## Where things are

| What | File |
|---|---|
| Site title, email, Google Analytics ID | `_config.yml` |
| Books (one file per book) | `_books/` |
| Book cover images (200 × 300 px JPG) | `assets/img/` |
| Texts page (generated from the CV data) | `texts.md` |
| CV data | `_data/cv.yml` (page: `cv/cv_ignasi.md`) |
| About page | `about.md` |
| Colours, fonts, spacing | top of `assets/css/main.scss` |
| Into Semiotics companion guide | `into-semiotics/` (own layout and styles) |

## Adding a book

1. Export the cover at **200 × 300 px** (other proportions are trimmed to fit) and save it in `assets/img/`, e.g. `assets/img/new_book_cover.jpg`.
2. Create a new file in `_books/`, for example by copying `1_into_semiotics.markdown`. The file name becomes the page address (`_books/new_book.markdown` → `/books/new_book/`), so use lowercase letters, numbers and underscores. **No numbering is needed:** the homepage sorts the covers by year, newest first.
3. Fill in the fields:

```yaml
---
title: "Full title: With subtitle"
year: 2027
month: 3                 # optional (1–12); only used to order books from the same year
genre: Textbook          # Novel, Essay, Edited collection...
publisher: Publisher name   # optional
isbn: "9780000000000"     # optional; used in the book data for search engines
role: editor             # optional; only for books you edited rather than wrote
lang: es                 # optional; es or ca for books in Spanish or Catalan (default: English)
status: In press         # optional; remove when the book is out
img: /assets/img/new_book_cover.jpg
description: One sentence for search engines and link previews.
links_title: Where to find the book   # optional heading for the links
links:                   # optional; shown below the synopsis; the cover links to the first one
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

**Order on the homepage:** newest year first. Books from the same year are shown alphabetically by title, unless you give them a `month`; books with a month come first in that year, latest month first.

The numbers at the start of the existing file names (`1_`, `2_`…) no longer do anything. They are kept only so that the existing page addresses don't change.

## Google Analytics

Paste your GA4 Measurement ID (`G-XXXXXXXXXX`) into `google_analytics` in `_config.yml`.
While it is empty, no analytics code is added to the pages.
