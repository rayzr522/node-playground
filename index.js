const modules = require('./src')

const caesar = modules.Caesar

const input = 'Congratulations. You just decrypted one of the simplest "encryptions" ever. Go give yourself a cookie.'
const key = 42
console.log(input)

const encrypted = caesar.encrypt(key, input)
console.log(encrypted)
const decrypted = caesar.decrypt(key, encrypted)
console.log(decrypted)