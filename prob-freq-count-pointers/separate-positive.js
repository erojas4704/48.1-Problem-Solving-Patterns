// add whatever parameters you deem necessary
function separatePositive(arr) {
    let mid = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            if (i !== mid) {
                //Swap the values at the mid if positive.
                let buffer = arr[i];
                arr[i] = arr[mid];
                arr[mid] = buffer;
            }
            mid++;
        } else {
        }
    }
    console.log(arr);

    return arr;
}

module.exports = separatePositive;