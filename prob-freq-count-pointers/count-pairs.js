// add whatever parameters you deem necessary
function countPairs(arr, num) {
    arr = arr.sort((a, b) => a - b);
    let l = 0;
    let r = arr.length - 1;
    let c = 0;
    while (l < r) {
        let sum = arr[l] + arr[r];
        if (sum === num) {
            c++;
            l++;
            r--;
        } else if (sum < num) {
            l++;
        } else {
            r--;
        }
    }

    return c;
}

module.exports = countPairs;