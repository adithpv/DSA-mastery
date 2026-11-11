// Pattern: Read/write pointers on sorted input.

function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let x = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[x]) {
            x = x + 1;
            nums[x] = nums[i];
        }
    }

    return x + 1;
}

function removeDuplicates2(arr) {
    if (arr.length === 0) return 0;

    let x = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[x]) {
            x = x + 1;
            arr[x] = arr[i];
        }
    }

    return x + 1;
}
