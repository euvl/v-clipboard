import { Convert } from './convert'
import { Textarea } from './textarea'

export const Clipboard = {
  /**
   * Requests Navigator API persmission to clipboard.
   */
  async requestClipboardPermission() {
    return navigator.permissions.query({
      name: 'clipboard-write' as PermissionName
    })
  },
  /**
   * Writes to cliboard using Navigator API.
   */
  async writeClipboard(value: string) {
    const permissions = await Clipboard.requestClipboardPermission()

    if (permissions.state === 'granted') {
      await navigator.clipboard.writeText(value)
      return true
    }

    return false
  },
  /**
   * Writes to clipboard using old-school execCommand('copy').
   */
  writeClipboardExecCommand(value: string) {
    const textarea = Textarea.createTextarea(value)

    document.body.appendChild(textarea)

    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      textarea.contentEditable = 'true'
      textarea.readOnly = true

      const range = document.createRange()

      range.selectNodeContents(textarea)

      const selection = window.getSelection()

      if (selection) {
        selection.removeAllRanges()
        selection.addRange(range)
        textarea.setSelectionRange(0, 999999)
      }
    } else {
      textarea.select()
    }

    const result = document.execCommand('copy')
    document.body.removeChild(textarea)

    return result
  },
  /**
   * Maes an attempt to copy data to the clipboard.
   */
  async copy(input: any) {
    const data = typeof input === 'function' ? input() : input
    const value = Convert.asString(data)

    const copied = Clipboard.writeClipboardExecCommand(value)

    if (copied) {
      return true
    }

    await Clipboard.writeClipboard(value)
  }
}
