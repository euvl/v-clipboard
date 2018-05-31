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

### Using

```vuejs
<!-- If "value" is static -->
<button v-clipboard="() => value">
  Copy to clipboard
</button>

<!-- If "value" is dynamic -->
<button v-clipboard="() => value">
  Copy to clipboard
</button>
```

When an element that contains `v-clipboard` directive is clicked, the value of `value` will be copied into clipboard.

```js
this.$clipboard(value)
```

### Events

```vue
<button v-clipboard="foo"
        v-clipboard:success="clipboardSuccessHandler" // Success event handler 
        v-clipboard:error="clipboardErrorHandler">    // Error event handler
  Copy to clipboard
</button> 
```

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

### Compatibility

<p align="center">
  <img src="https://user-images.githubusercontent.com/1577802/28269902-8ae0e01e-6afb-11e7-9981-d4965bac69d1.png">
</p>
