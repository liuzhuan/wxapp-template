# wxapp-template

A simple template for wxapp, mimicing `lodash.template` api. It supports following syntax:

1. `<%= variable %>` print out raw variable
2. `<%- variable %>` html escape variable
3. `<% if (variable) { %> XXX <% } %>` evaluate condition based on variable

## Install

```sh
$ npm install liuz-wxapp-template
```

## Usage

```js
const template = require('liuz-wxapp-template');
var tpl = 'Hello <%= username %>!';
var data = {
    username: 'Spiderman',
}

console.log(template(tpl)(data));
```