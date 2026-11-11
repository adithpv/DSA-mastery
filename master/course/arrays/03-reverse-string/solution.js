// Pattern: Converging two pointers.

function ReverseString(str) {
    let len = str.length;
    let halfLength = Math.floor(len / 2);

    for (let i = 0; i < halfLength; i++) {
        let temp = str[i]
        str[i] = str[len - 1 - i]
        str[len - 1 - i] = temp;
    }

    return str
}
