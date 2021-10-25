// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    let num1Counts = getCharCount(num1.toString());
    let num2Counts = getCharCount(num2.toString());

    if (num1Counts.size !== num2Counts.size) return false;
    for (let char of num1Counts.keys()) {
        if (num2Counts.get(char) !== num1Counts.get(char)) return false;
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

module.exports = sameFrequency;