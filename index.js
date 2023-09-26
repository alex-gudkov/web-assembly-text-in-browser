function run() {
  fetch('./main.wasm')
    .then((source) => source.arrayBuffer())
    .then((bytes) => WebAssembly.instantiate(bytes))
    .then((webAssemblyObject) => {
      const sumNumsI32 = webAssemblyObject.instance.exports['sum_nums_i32'];

      const result = sumNumsI32(1, 2);

      console.log(result);
    })
    .catch((error) => console.error(error));
}

run();
