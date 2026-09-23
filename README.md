# Kelly Natalia: Portfolio Website

A plain website (no frameworks, nothing to install). Navy theme with dark/light toggle.
Layout follows a Google Sites style portfolio: 4 pages (Home, Experiences, Projects, Certificates & Skills), image cards on Home that you can click to open the full details.

## Folder contents

| File | What it is |
|---|---|
| `index.html` | All 4 pages, text and structure. Each page starts with a `===== PAGE: ... =====` comment. Edit your words here. |
| `style.css` | Colors, fonts, spacing. Colors are at the top. |
| `script.js` | The dark/light toggle. You won't need to touch it. |
| `Kelly-Natalia-CV.pdf` | Your CV (the "View my CV" button opens this). **Replace with your latest CV, same file name.** |
| `images/` | Put your photo, logos, project images and certificates here. See `images/README.txt` for exact file names. |

## 1. Edit it

- Open `index.html` in any text editor (VS Code, Notepad, TextEdit in plain-text mode).
- Read the comment block at the top of the file, it explains everything.
- Change text between the tags. To add or remove an experience or project, copy or delete a whole `<li> ... </li>` or `<article> ... </article>` block.
- Search for the word **EDIT** to find spots that need your own links (GitHub, project links).

## 2. Preview on your computer

Double-click `index.html`. It opens in your browser. Refresh the page after each change.

## 3. Put it online (GitHub Pages, free)

1. Create a free account at https://github.com
2. Click **New repository**. Name it e.g. `portfolio`. Set it to **Public**. Create it.
3. On the empty repo page click **uploading an existing file**. Drag in **everything inside this folder** (`index.html`, `style.css`, `script.js`, the CV, and the `images` folder). Click **Commit changes**.
4. Go to **Settings > Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, Branch **main**, folder **/ (root)**, then **Save**.
5. Wait 1-2 minutes and refresh. GitHub shows your link: `https://YOUR-USERNAME.github.io/portfolio/`

(Tip: if you name the repository `YOUR-USERNAME.github.io`, your link becomes just `https://YOUR-USERNAME.github.io`.)

To update later: open the repo, click a file, click the pencil icon to edit (or **Add file > Upload files** to replace images), then Commit. The site refreshes in about a minute.

## Common problems

- **Image doesn't show online but works on your computer:** file names are case sensitive online. `Profile.JPG` is not `profile.jpg`.
- **Placeholder text like "Add your photo" still visible:** the file name or extension in `index.html` doesn't match the file in `images/`.
- **The CV button says "not found":** the file must be named exactly `Kelly-Natalia-CV.pdf` and sit next to `index.html`.
