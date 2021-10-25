function countUniqueValues(arr) {
    if(arr.length === 0) return 0;
    
    const nums = new Set();

    function areAllEqual(left, right) {
        return arr[left] === arr[right];
    }

    function splitAndCheck(left, right) {
        if (areAllEqual(left, right)) {
            nums.add(arr[left]);
        } else if (right - left === 1) {
            nums.add(arr[left]);
            nums.add(arr[right]);
        } else if (left === right) {
            nums.add(arr[left]);
        } else {
            let m = Math.floor((left + right) / 2);
            splitAndCheck(left, m);
            splitAndCheck(m + 1, right);
        }
    }

    splitAndCheck(0, arr.length - 1);
    return nums.size;
}


module.exports = countUniqueValues;