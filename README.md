# oscl-slides-themer

Slides template for the [Open Science Community Leiden](https://www.universiteitleiden.nl/open-science-community-leiden) using [**xaringan**](https://github.com/yihui/xaringan).

To download the slides, use:

```sh
git clone git@github.com:bbartholdy/oscl-slides-themer.git`
```

You will also need to install a couple of R packages:

```r
install.packages("xaringan")

# only necessary if you want emojis and icons
devtools::install_github("hadley/emo") # for emojis
devtools::install_github("mitchelloharawild/icons") # for social icons
```

And then download the appropriate icons:

```r
icons::download_fontawesome()
```

Open the `oscl-template.Rmd` file in RStudio and Knit (Ctrl + Shift + K).
You can make changes to the file to create your own slides.

There is also a 16:9 format available (a more conventional slideshow). Just open
the `oscl-template_wide.Rmd` file.

For more information on making slides, see <https://bookdown.org/yihui/rmarkdown/xaringan-format.html> or the **xaringan** [GitHub repo](https://github.com/yihui/xaringan).

There are also additional tools available to make
awesome slides using the [**xaringanExtra**](https://github.com/gadenbuie/xaringanExtra) package.