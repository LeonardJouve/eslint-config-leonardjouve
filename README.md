Personal generic eslint config

`npm init @eslint/config`

`npm i --save-dev eslint-config-leonardjouve`

```javascript
"root": true,
"extends": ["leonardjouve"],
"parserOptions": {
    "project": "./tsconfig.json"
}
```
