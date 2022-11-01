function add(n1,n2,n3){
    x = n1 + 2
    y = n2 * 2
    z = n3 * n3
    return x + y + Z
}

console.log(add(10,20,30));

function sum(x) {
    x = x + 2
    return function(y) {
        y = y * 2
        return function(z) {
            z = z * z
            return x + y + z
        }
    }
}