// var table = [
//     [ 'terry', 'taylor', 'scott', 'phil'],
//     [ 'sarah', 'rachel', 'lauren', 'joy'],
//     [ 'basketball', 'football', 'baseball', 'soccer'],
//     [ 'cbs', 'abc', 'fox', 'espn'],
//     ]

// for (i=0; i < table.length; i++) {
//     for (j=0; j< table[i].length; j++){
//     console.log(table[i][j]);
// }}

// var personOne = {firstname: "Terry", lastname: "Brown", age: 29};
// var personTwo = {firstname: "Nate", lastname: "Rakestraw", age: 30};
// var personThree = {firstname: "Sarah", lastname: "Brown", age: 31};

// var friends = [personOne, personTwo, personThree];

// var tmp = {
//     repete3: function(x){
//         for(var i = 1; i <= 3; i++){
//             x();
//         }
//     }
// }
// function hello(){
//     console.log('Hello');
// }

// tmp.repete3(hello);

var math = {
    add: function(one, two){
        var sum = one + two;
        console.log(sum);
    },
    subtract: function(one, two){
        var diff = one - two;
        console.log(diff)},
    multiply: function (one, two){
        var prod = one * two;
        console.log(prod)},
    divide: function(one, two){
        var quot = one - two;
        console.log(quot)}
    }

math.add(7, 8)
math.subtract(9, 4)