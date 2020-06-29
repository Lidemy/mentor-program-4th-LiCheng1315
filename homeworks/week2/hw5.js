function join(arr, concatStr) {
    var new_str = ""
    for(i=0;i<arr.length-1;i++){
      new_str += arr[i]+concatStr
    }
    new_str += arr[arr.length-1]
    return new_str
}

function repeat(str, times) {
    var repeat_str=""
    for(i=0;i<times;i++){
        repeat_str += str
    }
    return repeat_str
}   

console.log(join([1, 2, 3], ''));
console.log(join(["a", "b", "c"], "!"));
console.log(join(["a", 1, "b", 2, "c", 3], ','));
console.log(repeat('a', 5));
console.log(repeat('yo', 2));

