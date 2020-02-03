function rubah(x) {

    var a = x;
    x = 80;
    return {
        a, x
    };
}

console.log("Sebelum dan sesudah dirubah", rubah(10));