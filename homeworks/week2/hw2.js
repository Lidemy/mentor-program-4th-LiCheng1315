function capitalize(str) {
  var original_first_alphabet = str[0].charCodeAt()
  if(original_first_alphabet>=97 && original_first_alphabet <= 122){
    return str.replace(str[0],String.fromCharCode(original_first_alphabet-32))
  } else {
      return str
  }
}

console.log(capitalize('nick'))

console.log(capitalize('Nick'))

console.log(capitalize(',hello'))
