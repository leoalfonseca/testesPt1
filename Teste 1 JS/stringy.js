function stringy(size) {
    let result = '';
    for (let i = 0; i < size; i++) {
        result += i % 2 === 0 ? '1' : '0';
    }
    return result
}

console.log(stringy(6) + " size 6 Resultado deve ser 101010");
console.log(stringy(4) + " size 4 Resultado deve ser 1010");
console.log(stringy(12) + " size 12 Resultado deve ser 101010101010");
