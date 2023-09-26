async function run() {
  const source = await fetch('./main.wasm');
  const bytes = await source.arrayBuffer();
  const webAssemblyObject = await WebAssembly.instantiate(bytes);

  const sumI32 = webAssemblyObject.instance.exports['sum_i32'];

  const result = sumI32(1, 2);

  console.log(result);
}

run();
