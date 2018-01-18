const rawEmojis = '😀😃😄😁😆😅😂🤣☺️😊😇🙂🙃😉😌😍😘😗😙😚😋😜😝😛🤑🤗🤓😎🤡🤠😏😒😞😔😟😕🙁☹️😣😖😫😩😤😠😡😶😐😑😯😦😧😮😲😵😳😱😨😰😢😥🤤😭😓😪😴🙄🤔🤥😬🤐🤢🤧😷🤒🤕😈👿';

const emojis = [];

for (let i = 0; i < rawEmojis.length; i += 2) {
    const emoji = rawEmojis.substr(i, 2);
    emojis.push({
        index: i / 2,
        emoji: emoji,
        code: {
            base: emoji.charCodeAt(0),
            part: emoji.charCodeAt(1)
        }
    });
}

module.exports = emojis;