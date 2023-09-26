(module
    (func $sum_i32 (param $a i32) (param $b i32) (result i32)
        local.get $a    ;; push $a to stack
        local.get $b    ;; push $b to stack
        i32.add         ;; pop $a and $b, summarize them, push result to stack
                        ;; return stach head
    )
    (func $div_i32 (param $a i32) (param $b i32) (result i32)
        local.get $a    ;; push $a to stack
        local.get $b    ;; push $b to stack
        i32.div_s       ;; pop $a and $b, divide signed them, push result to stack
                        ;; return stach head
    )
    (export "sum_i32" (func $sum_i32))
    (export "div_i32" (func $div_i32))
)
