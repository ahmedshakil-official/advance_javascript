const numbers=[1,2,3,4,5,6,7,8,9];
const result=numbers.map((element)=>Math.pow(element,2));
console.log(result);
const even_numbers=result.filter(x=>x%2===0);
console.log(even_numbers);
const find_ex=result.find((x)=>x%2===0);
console.log(find_ex);
