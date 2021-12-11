const characterSet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
]

const encrypt = (character, shift, order) => {
  const index = characterSet.indexOf(character)
  if (order === 0){
    return characterSet[(index + shift)%characterSet.length]
  }
  return characterSet[(characterSet.length + index - shift)%characterSet.length]
}

const cipher = (text) => {
  const length = text.length
  let result = ""
  for (let i=0; i<length; i++){
    if (!characterSet.includes(text[i])){
      return "__garbage__"
    }
    let encryptedCharacter = encrypt(text[i], length, i%2)
    result = result.concat(encryptedCharacter)
  }
  return result
}

export {cipher}