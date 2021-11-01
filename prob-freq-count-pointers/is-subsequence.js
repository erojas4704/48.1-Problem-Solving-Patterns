// add whatever parameters you deem necessary
function isSubsequence(find, sequence) {
    let i = 0;
    for (let i2 = 0; i2 < sequence.length; i2++) {
        if (sequence[i2] === find[i]) {
            i++;
        }

        if (i >= find.length) return true;
    }
    return false;
}

module.exports = isSubsequence;