
/* test1()  */ // its not hoisted because this is a function expression

test2(); // this will work as this is not a function expression
const test1 = () => console.log('lets test if it is working');

function test2() {console.log('now you can see that it is working')}


//if you try accessing variabl with let or const it will return ReferenceError



/*role();  */


function getName(name){
    
    return name
}

console.log(`Her name was ${getName('Henriette')}`)