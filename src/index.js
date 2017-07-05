/** 
  * Copyright (c) 2017 - Yev Vlasenko
  */
const copy = (text) => {
  var textArea = document.createElement("textarea")

  textArea.style.cssText = 
    'position:fixed;pointer-events:none;visible:hidden;'
  textArea.value = text
    
  document.body.appendChild(textArea)
  textArea.select()

  let success = false

  try {
    success = document.execCommand('copy')
  } catch (err) {
    // success = false
  }

  document.body.removeChild(textArea)
  return success
}

export default {
  install (Vue) {
    Vue.prototype.$clipboard = copy

    Vue.directive('clipboard', {
      bind (el, binding, vnode) {
        el.addEventListener('click', (event) => {
          if (binding.hasOwnProperty('value')) {
            let value = binding.value
            
            copy(value)
              ? vnode.$emit('copy', value)
              : vnode.$emit('copyError')
          }
        })
      }
    })
  }
}
