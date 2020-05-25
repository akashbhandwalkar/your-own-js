// saves left side in the array to comare with right hand key
function __compareValues(a, b) {
    var obj = {};
    obj[a] = true;
    return obj[b] ? obj[b]: false;
}


/* 
* Number Comparision: checks if types are same and compare only when it's true
*/
function numberEquality(a, b, typedeOfB) {
    switch(typedeOfB) {
        case 'number':
            return __compareValues(a, b);
        default:
            return false;
    }
}

/* 
* String Comparision: checks if types are same and compare only when it's true
*/
function stringEquality(a, b, typedeOfB) {
    switch(typedeOfB) {
        case 'string':
            return __compareValues(a, b);
        default:
            return false;
    }
}

/* 
* Boolean Comparision: checks if types are same and compare only when it's true
*/
function booleanEquality(a, b, typedeOfB) {
    switch(typedeOfB) {
        case 'boolean':
            return __compareValues(a, b);
        default:
            return false;
    }
}

function strictEquality(a, b) {
    var typedeOfA = typeof a;
    var typedeOfB = typeof b;

    switch(typedeOfA) {
        case 'number':
            return numberEquality(a, b, typedeOfB);

        case 'string':
            return stringEquality(a, b, typedeOfB);

        case 'object':
                return false;

        case 'boolean':
                return booleanEquality(a, b, typedeOfB);

        default:
            return false;
    }
}


var testCases = [{
    left: 10,
    right: 10,
    expected: true
},{
    left: 10,
    right: '10',
    expected: false
},
{
    left: 10,
    right: new Number(10),
    expected: false
},
{
    left: 'Akash',
    right: 'akash',
    expected: false
},
{
    left: "Akash",
    right: "Akash",
    expected: true
},{
    left: "Akash",
    right: new String("Akash"),
    expected: true
}, {
    left: true,
    right: true,
    expected: true
},
{
    left: false,
    right: false,
    expected: true
},{
    left: false,
    right: "false",
    expected: false
},{
    left: {},
    right: {},
    expected: false
},{
    left: ({}).toString(),
    right: ({}),
    expected: false
}
]

const totalCases = testCases.length;
let testPassed = 0, testFailed = 0;
testCases.forEach((element, index) => {
    if(strictEquality(element.left, element.right) === element.expected) {
        testPassed++;
        console.log(`test passed ${testPassed} / ${totalCases}`);
    } else {
        testFailed++;
        console.error(`ALERT:-->  test failed ${testFailed} / ${totalCases}`);
    }
});