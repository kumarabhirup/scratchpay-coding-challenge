# 🏄 scratchpay-coding-challenge

[![Type](https://img.shields.io/badge/type-monorepo-yellow.svg?style=flat-square)](https://github.com/KumarAbhirup/jamstack-boilerplate)
[![emoji-log](https://cdn.jsdelivr.net/gh/ahmadawais/stuff@ca978741836412b5e33ce8561f5f95c933177067/emoji-log/flat.svg)](https://github.com/KumarAbhirup/Emoji-Log/)
[![Twitter](https://img.shields.io/twitter/follow/kumar_abhirup.svg?style=social&label=@kumar_abhirup)](https://twitter.com/kumar_abhirup/)

## 📦 Setup

### 🖥️ Development environment

- Run

```bash
$ git clone https://github.com/KumarAbhirup/scratchpay-coding-challenge <PROJECT_NAME> # to clone project
$ cd <PROJECT_NAME> # enter in the project

# Please only use yarn. NPM has few issues with Lerna.
$ yarn # install modules
$ yarn dev # run development server
```

- Visit `http://localhost:3001/`

### ⚒️ Linting

#### In VSCode

- Install ESLint and Prettier VSCode extensions.
- **Done! Now you have live linting and autofixing setup!**

#### In Any other IDE

- Run `npm run lint` to check for linting errors.
- Run `npm run lint:fix` to fix the linting errors.

## 🦄 Info

- Everytime the master branch is updated, Travis tests and Now deploys the stuff to [scratchpayUserManagementUI.now.sh](scratchpayUserManagementUI.now.sh).
- I chose to make it a monorepo because if I would have to add a backend to the project in the future, it would be easier to do so.
- This repository was made for a coding challenge at Scratchpay.
- To customize the linter, use `.eslintrc.js` and `.prettierrc` file. [Learn more](https://eslint.org)

## 📝 License

**MIT - Source code by [Kumar Abhirup](https://kumar.now.sh)**

_Follow me 👋 **on Twitter**_ → [![Twitter](https://img.shields.io/twitter/follow/kumar_abhirup.svg?style=social&label=@kumar_abhirup)](https://twitter.com/kumar_abhirup/)
