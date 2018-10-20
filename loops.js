var table = [
    [ 'terry', 'taylor', 'scott', 'phil'],
    [ 'sarah', 'rachel', 'lauren', 'joy'],
    [ 'basketball', 'football', 'baseball', 'soccer'],
    [ 'cbs', 'abc', 'fox', 'espn'],
    ]

for (i=0; i < table.length; i++) {
    for (j=0; j< table[i].length; j++){
    console.log(table[i][j]);
}}

var personOne = {firstname: "Terry", lastname: "Brown", age: 29};
var personTwo = {firstname: "Nate", lastname: "Rakestraw", age: 30};
var personThree = {firstname: "Sarah", lastname: "Brown", age: 31};

var friends = [personOne, personTwo, personThree];

console.log(friends.personOne.firstname);