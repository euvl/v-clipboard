[![npm](https://img.shields.io/npm/v/v-clipboard)](https://img.shields.io/npm/v/v-clipboard)
[![npm](https://img.shields.io/npm/dy/v-clipboard)](https://img.shields.io/npm/dy/v-clipboard)

## Vue Clipboard

### Supporters

<p >
  <a href="https://blitz.so/yev_vlasenko?utm_source=github" target="_blank" align="left">
      <img src="https://user-images.githubusercontent.com/1577802/208237314-b5921a5a-4b90-4689-8c0d-4948f98b6ba1.png" />
  </a>
  <a href="https://shareback.com?utm_source=github" align="right" target="_blank">
      <img src="https://user-images.githubusercontent.com/1577802/208237315-4039fb0e-dd59-42e6-829c-bd6fdae7a673.png" />
  </a>
</p>

Check them out.

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

### Usage

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
import { Clipboard } from 'v-clipboard'

await Clipboard.copy(value)
```

### Events

```vue
<button
  v-clipboard="foo"
  v-clipboard:success="clipboardSuccessHandler"
  v-clipboard:error="clipboardErrorHandler"
>
  Copy to clipboard
</button>
```

```js
{
  methods: {
    clipboardSuccessHandler (value, event) {
      console.log('success', value)
    },

    clipboardErrorHandler (value, event) {
      console.log('error', value)
    }
  }
}
```

### How it works

`copy / $clipboard` is an `async` call. Firstly, library makes an attempt to update clibpoard using `exectCommand`, if that operation is unsuccessful it makes an attemnt to use Navigator Clipboard API and automatically requests access, waits for access to be granted, then writes to clipboard.


### Demo

https://codesandbox.io/s/epic-waterfall-17yet5?file=/src/App.vue


### Compatibility

<p align="center">
  <img src="https://user-images.githubusercontent.com/1577802/28269902-8ae0e01e-6afb-11e7-9981-d4965bac69d1.png">
</p>
