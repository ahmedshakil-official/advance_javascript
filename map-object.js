const student=[
    {id:1,name:"omor sunny"},
    {id:2,name: "manna"},
    {id:3,name: "purnima"}
];
const names=student.map((s)=>s.name);
console.log(names);
const  ids=student.map((s)=>s.id);
console.log(ids);
const big=student.filter((s)=>s.id>1);
console.log(big);