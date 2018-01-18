exports.encode = input => {
    return input.toString(36)
}

exports.decode = input => {
    return parseInt(input, 36)
}