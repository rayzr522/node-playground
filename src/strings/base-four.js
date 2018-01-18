#!/usr/bin/env node

exports.encode = input => {
    var output = ''
    for (var i = 0; i < input.length; i++) {
        var c = input[i]
        if (c.toLowerCase() !== c) {
            output += '4'
        }
        output += c.toLowerCase().charCodeAt(0).toString(4) + Math.floor((Math.random() * 5) + 5).toFixed(0)
    }
    return output.substr(0, output.length - 1)
}

exports.decode = input => {
    return input.split(/[5-9]+/).map(c => {
        var upper = c.startsWith('4')
        var input = parseInt(upper ? c.substr(1) : c, 4)
        if (upper) {
            input &= 95
        }
        return String.fromCharCode(input)
    }).join('')
}