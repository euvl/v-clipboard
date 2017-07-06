[![npm version](https://badge.fury.io/js/v-clipboard.svg)](https://badge.fury.io/js/v-clipboard)

## Vue.js Clipboard plugin

(No dependencies, less than **2kb** minified)

### Install

```bash
npm install --save v-clipboard
```

```javascript
import Vue       from 'vue'
import Clipboard from 'v-clipboard'

Vue.use(Clipboard)
```

### Use

There are 2 ways of using this plugin:

1. Using `v-clipboard="mymodel"` directive. 

When an element that contains `v-clipboard` directive is clicked, the value of `mymodel` will be copied into clipboard.

2. Using `this.$clipboard(value)` function.

This one is simle :-)

### Examples

Option 1: *Using template only*.

```vue
<input v-model="foo">

<button v-clipboard="foo">
  Copy to clipboard
</button> 
```

Option 2: *Using javascript call*.

```vue
<button @click="copy">
  Copy to clipboard
</button> 
```
```javascript
methods: {
  copy () {
    this.$clipboard("Baaaaaaaaar")
  }
}
```

### Events

```vue
<button v-clipboard="foo"
        @copy="clipboardSuccessHandler"
        @copy-error="clipboardErrorHandler">
  Copy to clipboard
</button> 
```
