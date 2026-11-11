let n = 5;

for (let i = 0; i < n; i++) {
    // for row
    let row = "";

    for (let j = 0; j < n; j++) {
        // for columns
        row = row + "* ";
    }

    console.log(row);
}

console.log("================");

// increasing star pattern
for (let i = 0; i < n; i++) {
    // for row
    let row = "";

    for (let j = 0; j <= i; j++) {
        // for columns
        row = row + "* ";
    }

    console.log(row);
}

console.log("================");

// print numbers in triangle
for (let i = 0; i <= n; i++) {
    // for row
    let row = "";

    for (let j = 0; j <= i; j++) {
        // for columns
        row = row + (j + 1) + " ";
    }

    console.log(row);
}

// print same in number in triangle
for (let i = 0; i < n; i++) {
    // for row
    let row = "";

    for (let j = 0; j <= i; j++) {
        // for columns
        row = row + (i + 1) + " ";
    }

    console.log(row);
}

console.log("================");

// decreasing number
for (let i = 0; i < n; i++) {
    // for row
    let row = "";

    for (let j = 0; j < n - i; j++) {
        // for columns
        row = row + (j + 1) + " ";
    }

    console.log(row);
}

console.log("================");

for (let i = 0; i < n; i++) {
    // for row
    let row = "";

    for (let j = 0; j < n - i; j++) {
        // for columns
        row = row + "*" + " ";
    }

    console.log(row);
}

console.log("================");
// right side star pattern starting gradually grow
// output idea when n = 5:
// - - - - *
// - - - * *
// - - * * *
// - * * * *
// * * * * *

for (let i = 0; i < n; i++) {
    // i controls the row number
    // i starts from 0 and goes up to n - 1
    let row = "";

    // first add spaces/dashes before the stars
    // n - (i + 1) means:
    // row 0 -> 4 dashes
    // row 1 -> 3 dashes
    // row 2 -> 2 dashes
    // row 3 -> 1 dash
    // row 4 -> 0 dashes
    for (let j = 0; j < n - (i + 1); j++) {
        // j controls how many dashes are added before stars
        row = row + "-" + " ";
    }

    // then add stars after the dashes
    // i + 1 means:
    // row 0 -> 1 star
    // row 1 -> 2 stars
    // row 2 -> 3 stars
    // row 3 -> 4 stars
    // row 4 -> 5 stars
    for (let k = 0; k < i + 1; k++) {
        // k controls how many stars are added in this row
        row = row + "*" + " ";
    }

    // print the final row after dashes and stars are added
    console.log(row);
}

console.log("================");
// increate 1 and 0 triangle
for (let i = 0; i < n; i++) {
    // for row
    let row = "";
    let toggle = 1;

    for (let j = 0; j <= i; j++) {
        row = row + toggle + " ";
        // for columns
        if (j % 2 === 0) {
            toggle = 0 + " ";
        } else {
            toggle = 1 + " ";
        }
    }

    console.log(row);
}

console.log("================");

/*
 1 
 0 1
 0 1 0
 1 0 1 0
*/
let toggle = 1;
for (let i = 0; i < n; i++) {
    // for row
    let row = "";

    for (let j = 0; j <= i; j++) {
        row = row + toggle + " ";
        // for columns
        if (j % 2 === 0) {
            toggle = 0 + " ";
        } else {
            toggle = 1 + " ";
        }
    }

    console.log(row);
}
