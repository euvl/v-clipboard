[![npm](https://img.shields.io/npm/v/v-clipboard)](https://img.shields.io/npm/v/v-clipboard)
[![npm](https://img.shields.io/npm/dy/v-clipboard)](https://img.shields.io/npm/dy/v-clipboard)

## Vue Clipboard

### Demo 

https://codesandbox.io/s/epic-waterfall-17yet5?file=/src/App.vue

### Install

```bash
npm install --save v-clipboard
```

```bash
yarn add v-clipboard
```

```javascript
import Vue from 'vue'
import Clipboard from 'v-clipboard'

Vue.use(Clipboard)
```

### Using

When an element that contains `v-clipboard` directive is clicked, the value of `value` will be copied into clipboard.

---

Copying **static** value (directive should receive actual value):

```vue
<button v-clipboard="value">
  Copy to clipboard
</button>
```

```vue
<button v-clipboard="'some text'">
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

Without plugin: 
```js
import { Clipboard } from "v-clipboard"

Clipboard.copy(value)
```

### Events

```vue
<button v-clipboard="foo"
        v-clipboard:success="clipboardSuccessHandler"
        v-clipboard:error="clipboardErrorHandler">
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
