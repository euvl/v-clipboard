export class Cache {
  private seed = 0
  private data: Map<string, Function> = new Map()

  private id() {
    return Date.now().toString(26) + this.seed++
  }

  add(value: Function, id: string = this.id()) {
    this.data.set(id, value)

    return id
  }

  get(id: string) {
    return this.data.get(id)
  }

  delete(id: string) {
    this.delete(id)
  }
}
