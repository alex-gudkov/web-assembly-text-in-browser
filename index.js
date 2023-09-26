function run() {
  fetch('./main.wasm')
    .then((source) => source.arrayBuffer())
    .then((bytes) => WebAssembly.instantiate(bytes))
    .then((webAssemblyObject) => {
      const get10I32 = webAssemblyObject.instance.exports['get_10_i32'];

      const result = get10I32();

      console.log(result);
    })
    .catch((error) => console.error(error));
}

run();
