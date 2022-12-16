const cssText = 'position:fixed; pointer-events:none; z-index:-9999; opacity:0;'

export const Textarea = {
  createTextarea(value: string) {
    const textarea = document.createElement('textarea')

    textarea.addEventListener('focusin', (event) => {
      event.stopPropagation()
    })

    textarea.value = value
    textarea.setAttribute('readonly', '')
    textarea.style.cssText = cssText

    return textarea
  }
}
