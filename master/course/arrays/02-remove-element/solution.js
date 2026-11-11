// Pattern: Read/write pointers (stable compaction).

function removeElements(arr, n) {
    let x = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== n) {
            arr[x] = arr[i];
            x++;
        }
    }

    return x;
}
