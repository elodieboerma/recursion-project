function fibs(n) {
    let arr = [0];
    if (n === 0) {
        return arr;
    } else if (n === 1) {
        arr.push(1);
        return arr;
    }

    let num0 = 0;
    let num1 = 1;
    arr.push(1);

    for (let i = 2; i < n; i++) {
        let num = num0 + num1;
        num0 = num1;
        num1 = num;
        arr.push(num);
    }

    return arr;
}

console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(9));


function fibsRec(n) {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];

    const arr = fibsRec(n - 1);
    console.log(arr);
    const nextNum = arr[arr.length - 1] + arr[arr.length - 2];
    console.log(nextNum);
    arr.push(nextNum);
    return arr;
}

console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(9));
