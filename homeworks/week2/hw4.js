function printFactor(n) {
    var factor = ""
    for(i=1;i<n;i++){
        if(n % i === 0){
            factor += i + "\n"
        }
    }
    factor += n
    return factor    
}

console.log(printFactor(100))
