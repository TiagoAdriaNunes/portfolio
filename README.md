# Tiago Adria Nunes' Portfolio

Hi, I'm Tiago Adria Nunes. Welcome to my portfolio repository.

This project was developed in Quarto with R, using this template.

My portfolio is hosted on GitHub Pages. Check it out here: [Tiago Adria Nunes' Portfolio](https://tiagoadrianunes.github.io/portfolio/)

If you have any questions about how to use or host the portfolio, feel free to contact me.

## Getting started

This project uses [renv](https://rstudio.github.io/renv/) for R package management. To restore the environment:

```r
renv::restore()
```

## Rendering the portfolio

Make sure [Quarto](https://quarto.org/docs/get-started/) is installed, then use one of the options below.

**Quarto CLI (terminal):**

```bash
# Render to docs/ (for GitHub Pages deployment)
quarto render

# Preview locally with live reload
quarto preview
```

**R console:**

```r
# Render to docs/ (for GitHub Pages deployment)
quarto::quarto_render()

# Preview locally with live reload
quarto::quarto_preview()
```

> **Note (Windows):** If you get a file-in-use error during `quarto render`, make sure no browser tab or `quarto preview` process has `index.html` open. Also pause OneDrive sync if it is actively syncing the file.

The output is written to the `docs/` folder, which is the source configured for GitHub Pages.

## Contact

-   Email: [tiagoadrianunes@gmail.com](mailto:tiagoadrianunes@gmail.com)
-   LinkedIn: [Tiago Adria Nunes](https://www.linkedin.com/in/tiago-adria-nunes/)
-   GitHub: [Tiago Adria Nunes](https://github.com/TiagoAdriaNunes)
