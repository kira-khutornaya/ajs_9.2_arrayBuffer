export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const buf = new Uint16Array(this.buffer);
    return String.fromCharCode(...buf);
  }
}
