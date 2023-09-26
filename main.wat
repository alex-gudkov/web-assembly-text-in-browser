(module
    (func $sum_nums_i32 (param $a i32) (param $b i32) (result i32)
        local.get $a    ;; push $a to stack
        local.get $b    ;; push $b to stack
        i32.add         ;; pop $a and $b, summarize them, push result to stack
                        ;; return stach head
    )
    (export "sum_nums_i32" (func $sum_nums_i32))
)