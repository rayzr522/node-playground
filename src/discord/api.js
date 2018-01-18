const got = require('got');
const settings = {
    token: 'none'
}

exports.get = (url) => {
    if (!url.indexOf('?') > -1) {
        url += '?';
    }
    return got(`https://discordapp.com/api${url}&token=${settings.token}`);
}

exports.setToken = (token) => {
    settings.token = token;
}