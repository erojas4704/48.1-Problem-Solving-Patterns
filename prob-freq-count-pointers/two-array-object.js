// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    let output = {};
    for (let i = 0; i < keys.length; i++) {
        output[keys[i]] = values[i] || null;
    }
    return output;
}
module.exports = twoArrayObject;