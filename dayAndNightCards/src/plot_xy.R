#!/usr/bin/env Rscript

# plot_xy.R
# 2022-02-23

parse_array_str <- function(list_string) {
  list_string |>
    gsub(pattern = "[][]", replacement = "") |>  # Remove square brackets
    strsplit(",") |>  # Parse numbers, delimited by commas
    unlist() |>  # Convert to vector
    as.numeric()  # Convert to numeric
}

read_dayandnightcards_csv <- function(file) {
  df <- read.csv(file)
  cols <- c(
    "blockName",
    "pracNum",
    "tryNum",
    "maxScore",
    "trialNum",
    "stimulus",
    "corrAns",
    "coords_x",
    "coords_y",
    "coords_t"
  )
  df[df$coords_x != "[]", cols]
}

plot_dayandnightcards <- function(file, save_pngs = TRUE, width = 1200, height = 600) {
  df <- read_dayandnightcards_csv(file)
  colfunc <- colorRampPalette(c("blue", "red"))
  colvals <- colfunc(256)
  
  N_ROWS <- 2
  N_COLS <- 4
  n_figs <- N_ROWS * N_COLS
  n_pages <- ceiling(nrow(df) / n_figs)
  
  if (save_pngs && !dir.exists("_pngs"))
    dir.create("_pngs")
  
  for (k in 1:n_pages) {
    if (save_pngs) {
      filepath <- sprintf("_pngs/image-%02d.png", k)
      png(filepath, width = width, height = height)
    }
    par(mfrow = c(N_ROWS, N_COLS))
    
    for (j in 1:n_figs) {
      i <- (k - 1) * n_figs + j
      if (i > nrow(df))
        break
      
      x <- parse_array_str(df$coords_x[i])
      y <- parse_array_str(df$coords_y[i])
      t <- parse_array_str(df$coords_t[i])
      t_rescale <- round((t - min(t)) / (max(t) - min(t)) * 255) + 1
      
      if (is.na(df$tryNum[i]) || df$tryNum[i] == "NA")
        title <- sprintf(
          "%s, trial %s, corrAns: %s",
          df$blockName[i],
          df$trialNum[i],
          df$corrAns[i]
        )
      else
        title <- sprintf(
          "%s, try %s, trial %s, corrAns: %s",
          df$blockName[i],
          df$tryNum[i],
          df$trialNum[i],
          df$corrAns[i]
        )
      title <- paste(strwrap(title, width = 40), collapse = "\n")
      
      plot(
        x,
        y,
        pch = 16,
        type = "b",
        asp = 1,
        cex = t * 1.25,
        col = colvals[t_rescale],
        main = title,
        xlim = c(-0.8, 0.8),
        ylim = c(-0.5, 0.5)
      )
    }
    if (save_pngs) {
      dev.off()
      message(sprintf("File written: '%s'", normalizePath(filepath)))
    }
  }
}

results_file <- "../../PARTICIPANT_dayAndNightCards_2022-02-23_19h26.02.241.csv"

plot_dayandnightcards(results_file)


