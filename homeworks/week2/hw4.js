function printFactor(n) {
    var factor = ""
    for(i=1;i<n;i++){
        if(n % i === 0){
            factor += i + " "
        }
    }
    console.log(factor)
}

printFactor(100)
