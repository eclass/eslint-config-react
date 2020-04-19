# @eclass/eslint-config-react

[![npm](https://img.shields.io/npm/v/@eclass/eslint-config-react.svg)](https://www.npmjs.com/package/@eclass/eslint-config-react)
[![Build Status](https://travis-ci.org/eclass/eslint-config-react.svg?branch=master)](https://travis-ci.org/eclass/eslint-config-react)
[![downloads](https://img.shields.io/npm/dt/@eclass/eslint-config-react.svg)](https://www.npmjs.com/package/@eclass/eslint-config-react)
[![dependencies Status](https://david-dm.org/eclass/eslint-config-react/status.svg)](https://david-dm.org/eclass/eslint-config-react)
[![devDependencies Status](https://david-dm.org/eclass/eslint-config-react/dev-status.svg)](https://david-dm.org/eclass/eslint-config-react?type=dev)
[![peerDependencies Status](https://david-dm.org/eclass/eslint-config-react/peer-status.svg)](https://david-dm.org/eclass/eslint-config-react?type=peer)

> This package provides eclass eslint shareable config for react.

## Plugins and Configuration included

- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [eslint-config-react-app](https://www.npmjs.com/package/eslint-config-react-app)
- [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard)
- [eslint-plugin-flowtype](https://www.npmjs.com/package/eslint-plugin-flowtype)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node)
- [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-standard](https://www.npmjs.com/package/eslint-plugin-standard)
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)

## Installation

[Install](https://docs.npmjs.com/cli/install) [`eslint`](https://www.npmjs.com/package/eslint) and this package with [npm](https://docs.npmjs.com/about-npm/).

```
npm i -D eslint @eclass/eslint-config-react @typescript-eslint/{parser,eslint-plugin} babel-eslint eslint-plugin-{flowtype,import,jsx-a11y,node,promise,react,react-hooks@2.x,standard}
```

Then add the following configuration to your project's [`package.json`](https://docs.npmjs.com/files/package.json).

```json
"eslintConfig": {
  "extends": "@eclass/eslint-config-react"
}
```

## License

[MIT](https://tldrlegal.com/license/mit-license)
