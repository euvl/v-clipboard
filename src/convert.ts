const message = 'Failed to copy value to clipboard. Unknown type.'

export const Convert = {
  asString(value: any): string {
    if (value == null) {
      console.warn('Clipboard input is empty')
      return ''
    }

    if (typeof value !== 'string') {
      try {
        return JSON.stringify(value)
      } catch (error) {
        console.warn(message, error)

        return ''
      }
    }

    return value
  }
}
