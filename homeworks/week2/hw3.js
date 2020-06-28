function reverse(str) {
    var rstr=""
    for(i=0;i<str.length;i++){
        rstr += str[str.length-1-i]
    }
    return rstr
}

console.log(reverse('hello'))


console.log(reverse('yoyoyo'))


console.log(reverse('1abc2'))


console.log(reverse('1,2,3,2,1'))
