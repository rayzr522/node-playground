const BASE = 65
const letters = new Array(26)

for (let i = 0; i < 26; i++) {
    letters[i] = String.fromCharCode(BASE + i)
}

exports.encrypt = function (key, input) {
    return input.toUpperCase().split('')
        .map(c => c.charCodeAt(0))
        .map(c => {
            if (c >= BASE && c < BASE + 26) {
                return letters[(c + key - BASE) % 26]
            }
            return String.fromCharCode(c)
        })
        .join('')
}

exports.decrypt = function (key, input) {
    return this.encrypt(26 - (key % 26), input)
}