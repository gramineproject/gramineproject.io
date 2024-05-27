# Gramine website

The code in this repo powers the Gramine website. The website runs in Hugo and uses [the Dot-Org Hugo theme](https://github.com/cncf/dot-org-hugo-theme/). The theme has many [custom shortcodes](https://github.com/cncf/dot-org-hugo-theme/?tab=readme-ov-file#custom-shortcodes) that can be used to style content in markdown files.


## 🧩 Editing the site

In order to locally develop the website, you'll need to install [Hugo](https://gohugo.io) and [node.js](https://nodejs.org/en).

```bash
# macOS
brew install hugo node
```

Then follow these instructions:

1. Clone this repo to a local directory on your computer.

2. Navigate to the newly created directory, and pull in the theme:

```bash
git submodule update --init --recursive
```

3. Install dependencies:

```bash
npm install
```

4. Build the site:

```bash
npm run build
```

5. Start the local server with live reload:

```bash
npm run start
```

Or use the following command if you'd like the PageFind search to work locally:

```bash
npm run dev:start:with-pagefind
```

This should give an address you can visit on your local machine to see the local copy of your site. Typically this is `localhost:1313`. Just navigate to http://localhost:1313 in your browser and you should see the site running.

Don't edit the theme that is imported via the git submodule as otherwise your changes will be overwritten the next time the theme is updated. Changes should be made to files inside the root directory as this will correctly override the theme directory files. [Read the Hugo docs](https://gohugo.io/getting-started/directory-structure/) for more info.
