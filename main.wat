(module
    (func $get_10_i32 (result i32)
        i32.const 10    ;; push 10 to stack
                        ;; return stach head
    )
    (export "get_10_i32" (func $get_10_i32))
)
