async function run() {
  const source = await fetch('./main.wasm');
  const webAssemblyObject = await WebAssembly.instantiateStreaming(source, {});

  const sumI32 = webAssemblyObject.instance.exports['sum_i32'];
  const divI32 = webAssemblyObject.instance.exports['div_i32'];

  const result = divI32(20, -6);

  console.log(result);
}

run();
