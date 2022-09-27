# Project usage guide
## Dependency installation
To use this project without installation of everything by yourself just use
```bash
npm install package-lock.json
```
## npm scripts
### 🔨 build
Builds project into /public/ using Vite with SASS
```bash
npm run build
```
### ⚡ start
First builds project with build, then runs live-server on localhost with index.html file from /public
```bash
npm run dev
```
## Project structure
```
📦iatp-dev-website
 ┣ 📂.git
 ┣ 📂.node_modules
 ┣ 📂public
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂css
 ┃ ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📂img
 ┃ ┃ ┗ 📂js
 ┃ ┣ 📂project-blocks
 ┃ ┃ ┣ 📂about-us
 ┃ ┃ ┃ ┗ 📜about-us.html
 ┃ ┃ ┣ 📂members
 ┃ ┃ ┃ ┗ 📜members.html
 ┃ ┃ ┗ 📂projects
 ┃ ┃   ┗ 📜projects.html
 ┃ ┗ 📜index.html
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂fonts
 ┃ ┃ ┗ 📂img
 ┃ ┣ 📂project-blocks
 ┃ ┃ ┣ 📂abstracts
 ┃ ┃ ┃ ┗ 📜__abstracts-dir.scss
 ┃ ┃ ┣ 📂base
 ┃ ┃ ┃ ┣ 📜__base-dir.scss
 ┃ ┃ ┃ ┗ 📜_reset.scss
 ┃ ┃ ┣ 📂blocks
 ┃ ┃ ┃ ┗ 📜__blocks-dir.scss
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📜__components-dir.scss
 ┃ ┃ ┣ 📂layout
 ┃ ┃ ┃ ┗ 📜__layout-dir.scss
 ┃ ┃ ┗ 📂page
 ┃ ┃ ┃ ┣ 📂about-us
 ┃ ┃ ┃ ┃ ┣ 📜about-us-index.js
 ┃ ┃ ┃ ┃ ┗ 📜about-us.html
 ┃ ┃ ┃ ┣ 📂members
 ┃ ┃ ┃ ┃ ┣ 📜members-index.js
 ┃ ┃ ┃ ┃ ┗ 📜members.html
 ┃ ┃ ┃ ┣ 📂projects
 ┃ ┃ ┃ ┃ ┣ 📜projects-index.js
 ┃ ┃ ┃ ┃ ┗ 📜projects.html
 ┃ ┃ ┃ ┣ 📜__page-dir.scss
 ┃ ┃ ┃ ┗ 📜projects.html
 ┃ ┣ 📜index.html
 ┃ ┣ 📜index.js
 ┃ ┗ 📜index.scss
 ┣ 📜LICENSE
 ┣ 📜README.md
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ vite.config.js
 ```
