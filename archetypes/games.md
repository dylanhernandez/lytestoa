---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
draft: false
description: "Short SEO and card summary of the game (120–160 chars)."
summary: "Brief card teaser shown in the homepage game gallery."
weight: 10

# Playable Stage Configuration
playable: true
# Optional override; defaults to "/builds/<slug>/index.html" when playable = true
build_url: ""
aspect_ratio: "16/9" # e.g., "16/9", "4/3", "1/1"

# Media
cover:
  image: "https://placehold.co/600x400"
  alt: "{{ replace .File.ContentBaseName "-" " " | title }} screenshot"
  caption: "{{ replace .File.ContentBaseName "-" " " | title }}"
screenshots: []

# Game Metadata & SEO (Schema.org VideoGame)
genres: ["Puzzle"]
tags: ["html5", "canvas", "open-source"]
developer: "LyteCade"
engine: "HTML5 Canvas / Vanilla JS"
license: "MIT"
repo_url: "https://github.com/lytecade"
operating_system: "Web Browser"
application_category: "Game"

# Structured Controls List (rendered in "How to play" section or markdown body)
controls:
  - "Tap anywhere or press any key to start."
---

## About this game

Write the detailed description of the game here.
