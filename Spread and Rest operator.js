/* 

const sum = (first, last) => { var nums = first + last; console.log(nums)};

sum ("David ","shema"); */


// Spread operator : it expands the items of an Array or an Object into individual values 

// (When its Object it Expands Key-Value into properties )



/* ===============SPREAD OPERATOR =================== */

/* [+++ ARRAY +++] */

const Num = [2, 4, 6, 8]

const withExpanded = [...Num, 10, 12] // spread Operator 
console.log(withExpanded)


/* [Object] */

const Car = {brand: 'Maserati', Model: 2001,
spareParts: 'Available', Date: 2017
}


const Expanded = { ...Car , hon:() => console.log('VHUUUUUHmm!!!')}

console.log(Expanded)

console.log(Expanded.hon())
/* =================  */



function Multiply (num, ...numbers){

    
    return numbers.map(mult =>mult * num)

}

const result = Multiply(3, 1, 4, 5)
console.log(result)
