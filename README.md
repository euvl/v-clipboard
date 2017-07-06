[![npm version](https://badge.fury.io/js/v-clipboard.svg)](https://badge.fury.io/js/v-clipboard)

## Vue.js Clipboard plugin

(No dependencies, less than **2kb** minified)

### Install

```bash
npm install --save v-clipboard
```

### Use

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

...

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
