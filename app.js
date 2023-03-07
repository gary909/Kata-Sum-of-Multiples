function sumMul(n,m){
    let cnt = 0;
    if (m <= 0){
        return "INVALID"
    } else {
        for(let i = 0; (i*n)< m; i++){
            cnt +=i*n
        }
    }
    return cnt
}

console.log(sumMul(0,0)); // "INVALID"
console.log(sumMul(2,9)); // 20
console.log(sumMul(4,-7)); // "INVALID"
console.log(sumMul(3,13)); // 30
console.log(sumMul(4,123)); // 1860