export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    let string = '';
    const buf = new Uint16Array(this.buffer);
    for (const item of buf) {
      string += String.fromCharCode(item);
    }

    return string;
  }
}
