### Install

```
npm install --save v-clipboard
```

### Use

```
// Option 1:
// Using template only

<input v-model="foo">

<button v-clipboard="foo">
  Copy to clipboard
</button> 

// Option 2:
// Using javascript call

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
