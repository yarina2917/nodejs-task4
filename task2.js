// Example:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

function linkedList(list1, list2) {
    let list1Arr = listToArray(list1).reverse().join('');
    let list2Arr = listToArray(list2).reverse().join('');
    let listArr = (+list1Arr + +list2Arr).toString().split('');
    return arrayToList(listArr);
}

function listToArray(list, arr = []) {
    arr.push(list.value);
    return list.next !== null ? listToArray(list.next, arr) : arr;
}

function arrayToList(arr, obj = {}, i = 0) {
    return i < arr.length - 1 ? {value: arr[i], next: arrayToList(arr, obj.next, i + 1)}
           : {value: arr[i], next: null}
}

const list1 = {
    value: 2,
    next: {
        value: 4,
        next: {
            value: 3,
            next: null
        }
    }
};

const list2 = {
    value: 5,
    next: {
        value: 6,
        next: {
            value: 4,
            next: null
        }
    }
};

console.log(linkedList(list1, list2));
