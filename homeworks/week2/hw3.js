function reverse(str) {
    var rstr=""
    for(i=0;i<str.length;i++){
        rstr += str[str.length-1-i]
    }
    console.log(rstr)
}

reverse('hello')
