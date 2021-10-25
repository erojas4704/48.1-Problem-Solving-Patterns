// add whatever parameters you deem necessary
function constructNote(message, letters) {
    const messageChars = getCharCount(message);
    const lettersChars = getCharCount(letters);

    for (let char of messageChars.keys()) {
        if (!lettersChars.has(char)) return false;
        if (lettersChars.get(char) < messageChars.get(char)) return false;

    }

    return true;
}

function getCharCount(str) {
    const counts = new Map();
    for (let char of str.toLowerCase()) {
        counts.set(char, (counts.get(char) || 0) + 1);
    }
    return counts;
}

module.exports = constructNote;