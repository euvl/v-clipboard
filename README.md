[![npm version](https://badge.fury.io/js/v-clipboard.svg)](https://badge.fury.io/js/v-clipboard)

## Vue.js Clipboard

### Install

```bash
npm install --save v-clipboard
```

```javascript
import Vue from 'vue'
import Clipboard from 'v-clipboard'

Vue.use(Clipboard)
```

### Using

> When an element that contains `v-clipboard` directive is clicked, the value of `value` will be copied into clipboard.

Copying **static** value (directive should receive actual value):

```vue
<button v-clipboard="value">
  Copy to clipboard
</button>
```

Copying **dynamic** value (directive should recieve a function that returns value):

```vue
<button v-clipboard="() => value">
  Copy to clipboard
</button>
```

Copying **anything** in your methods:

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

```js
{
  methods: {
    clipboardSuccessHandler ({ value, event }) {
      console.log('success', value)
    },

    clipboardErrorHandler ({ value, event }) {
      console.log('error', value)
    }
  }
}
```

### Compatibility

<p align="center">
  <img src="https://user-images.githubusercontent.com/1577802/28269902-8ae0e01e-6afb-11e7-9981-d4965bac69d1.png">
</p>
