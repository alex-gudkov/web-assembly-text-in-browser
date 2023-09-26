function run() {
  fetch('./main.wasm')
    .then((source) => source.arrayBuffer())
    .then((bytes) => WebAssembly.instantiate(bytes))
    .then((webAssemblyObject) => {
      const sumI32 = webAssemblyObject.instance.exports['sum_i32'];

      const result = sumI32(1, 2);

      console.log(result);
    })
    .catch((error) => console.error(error));
}

run();
