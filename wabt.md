# WABT: WebAssembly Binary Toolkit

WABT (pronounce it "wabbit") is a suite of tools for WebAssembly.

It includes following command-line tools:

* `wat2wasm` - translate from WebAssembly text format (.wat) to WebAssembly binary format (.wasm) 
* `wasm2wat` - translate from WebAssembly binary format (.wasm) back to WebAssembly text format (.wat)
* `wasm2c` - convert WebAssembly binary file (.wasm) to C source and header (.c and .h)
* ...

## Commands

```bash
wat2wasm ./main.wat -o ./main.wasm 
```
