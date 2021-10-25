function characterFrequencyCounter(str) {
    let freqs = new Map();
    if (!str) return freqs;
    for (let char of str) {
        let count = freqs.get(char) || 0;
        freqs.set(char, count + 1);
    }

    return freqs;
}

function validAnagram(str1, str2) {
    str1Map = characterFrequencyCounter(str1);
    str2Map = characterFrequencyCounter(str2);

    if (str1 == undefined || str2 == undefined) return false;
    if (str1Map.size !== str2Map.size) return false;

    for (let char of str1Map.keys()) {
        if (str1Map.get(char) !== str2Map.get(char))
            return false;
    }

    return true;
}

module.exports = validAnagram;