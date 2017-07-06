/** 
  * Copyright (c) 2017 - Yev Vlasenko
  */
const cssText = 
  'position:fixed;pointer-events:none;z-index:-9999;visible:hidden;'

const copy = (text) => {
  let textArea = document.createElement("textarea")
  let success = false

  textArea.value = text
  textArea.style.cssText = cssText
    
  document.body.appendChild(textArea)
  textArea.select()

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
            let { value } = binding
            let payload = { value, srcEvent: event }
            
            copy(value)
              ? vnode.$emit('copy', payload)
              : vnode.$emit('copyError', payload)
          }
        })
      }
    })
  }
}
