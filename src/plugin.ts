import { Directive, Plugin } from 'vue'
import { Cache } from './cache'
import { Clipboard } from './clipboard'

type ClipboardDirective = Function | string | object | null | undefined

const cache = new Cache()

export const ClipboardPlugin: Plugin = {
  install(app) {
    const context =
      // @ts-ignore
      app.version[0] === '3' ? app.config.globalProperties : app.prototype

    context.$clipboard = Clipboard.copy

    app.directive('clipboard', <Directive<HTMLElement, ClipboardDirective>>{
      beforeMount(el, binding) {
        const arg = binding.arg
        const value = binding.value
        const isFn = typeof value === 'function'

        if (arg === 'error' && isFn) {
          el.dataset.clipboardError = cache.add(value)
          return
        }

        if (arg === 'error' && isFn) {
          el.dataset.clipboardSuccess = cache.add(value)
          return
        }

        const onClick = async (event: MouseEvent) => {
          const success = await Clipboard.copy(value)

          const callbackId = success
            ? el.dataset.clipboardSuccess
            : el.dataset.clipboardError

          cache.get(callbackId!)?.(value, event)
        }

        el.dataset.clipboardClick = cache.add(onClick)
        el.addEventListener('click', onClick)
      },

      unmounted(el) {
        const {
          clipboardSuccessHandler,
          clipboardErrorHandler,
          clipboardClickHandler
        } = el.dataset

        if (clipboardSuccessHandler) {
          cache.delete(clipboardSuccessHandler)
        }

        if (clipboardErrorHandler) {
          cache.delete(clipboardErrorHandler)
        }

        if (clipboardClickHandler) {
          const handler = cache.get(clipboardClickHandler)

          if (handler) {
            el.removeEventListener('click', handler as () => {})
            cache.delete(clipboardClickHandler)
          }
        }
      },
      /**
       * Vue 2 compatability
       */
      get bind() {
        // @ts-ignore
        return this.beforeMount
      },

      get unbind() {
        // @ts-ignore
        return this.unmounted
      }
    })
  }
}
