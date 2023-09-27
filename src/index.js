/**
 * @description Wrapper which contains all functions exported from WebAssembly module instance.
 * @type {{
 *  sumI32: (a: number, b: number) => number;
 *  divI32: (a: number, b: number) => number;
 * }}
 */
const exports = {};

async function load() {
  const source = await fetch('../out/main.wasm');
  const webAssemblyObject = await WebAssembly.instantiateStreaming(source, {});

  exports.sumI32 = webAssemblyObject.instance.exports['sum_i32'];

  if (!exports.sumI32) {
    throw new Error('"sumI32" export not found');
  }

  exports.divI32 = webAssemblyObject.instance.exports['div_i32'];

  if (!exports.divI32) {
    throw new Error('"divI32" export not found');
  }
}

load();

const runButtonElement = document.getElementById('run-button');

function run() {
  const a = 20;
  const b = -6;
  const result = exports.divI32(a, b);

  console.log(result);
}

runButtonElement.onclick = () => {
  run();
};
