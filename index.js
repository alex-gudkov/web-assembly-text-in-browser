/**
 * @description Wrapper which contains all functions exported from WebAssembly module instance.
 * @type {{
 *  sumI32: (a: number, b: number) => number;
 *  divI32: (a: number, b: number) => number;
 * }}
 */
const exports = {};

async function run() {
  const source = await fetch('./main.wasm');
  const webAssemblyObject = await WebAssembly.instantiateStreaming(source, {});

  exports.sumI32 = webAssemblyObject.instance.exports['sum_i32'];

  if (!exports.sumI32) {
    throw new Error('"sumI32" export not found');
  }

  exports.divI32 = webAssemblyObject.instance.exports['div_i32'];

  if (!exports.divI32) {
    throw new Error('"divI32" export not found');
  }

  const result = exports.divI32(20, -6);

  console.log(result);
}

run();
