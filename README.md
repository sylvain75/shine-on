## ☁️ A simple one page marketing site starter for SaaS companies and products.

[Live Demo: https://gatsby-starter-saas-marketing.netlify.com/ ](https://gatsby-starter-saas-marketing.netlify.com/)

### Getting started

install Gatsby CLI - [more info](https://www.gatsbyjs.org/tutorial/part-zero/)

```sh
npm install -g gatsby-cli
```

or

```sh
yarn global add gatsby-cli
```

---

install the starter locally:

```sh
gatsby new gatsby-starter-saas-marketing https://github.com/keegn/gatsby-starter-saas-marketing
```

---

install dependencies:

```sh
yarn install
```

---

start the development server:

```sh
gatsby develop
```

---

At the project root, compile your application for deployment:

```sh
gatsby build
```

---

Clean the cache to fix certain errors - run the clean command before starting the dev server:

```sh
gatsby clean
```

---

At the project root, serve the production build of your site:

```sh
gatsby serve
```

---

### Debugging

Remove `package-lock.json` and/or `yarn.lock`
Issue `gatsby clean` to purge any stale data.
Remove `node_modules` folder.
Install the dependencies again with your package manager of choice, either `npm` or `yarn`.
Issue `gatsby develop` and see if the error does not pop back.
---

### Styles

This starter uses [styled-components](https://www.styled-components.com/). The theme file contains the base styles `src/styles/theme.js` and the global styles file contains basic element styles and a style reset `src/styles/GlobalStyles.js`.

---

### Deploying to Netlify

[Deployment Guide](http://gatsbyjs.org/docs/deploying-to-netlify)

---

### Collect emails with Netlify Forms

[Form Handling with Gatsby.js V2 and Netlify](https://codebushi.com/form-handling-gatsby-netlify/)

---

### Links

[Background image handling](https://markoskon.com/gatsby-background-image-example/)

## Firebase

`firebase login`
`firebase init`
`firebase deploy`

https://www.gatsbyjs.org/docs/deploying-to-firebase/
During the deploy process 
The next step Firebase CLI will ask “Configure as a single-page app?” make sure you answer no (N) to this as Gatsby will generate all the URL paths for you as provides Server side rendering out of the box.