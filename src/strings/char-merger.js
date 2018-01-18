exports.encode = input => {
    var output = ''
    for (var i = 0; i < input.length; i += 2) {
        var x = input[i].charCodeAt(0)
        var y = (input[i + 1] || '').charCodeAt(0) || 0

        output += String.fromCharCode(x | (y << 8))
    }
    return output
}

exports.decode = input => {
    var output = ''
    for (var i = 0; i < input.length; i++) {
        var c = input[i].charCodeAt(0)

        var x = c & 255
        var y = (c >> 8) & 255

        output += String.fromCharCode(x) + String.fromCharCode(y)
    }
    return output
}