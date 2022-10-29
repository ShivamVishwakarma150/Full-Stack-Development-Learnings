let arr =[

    {name:"A",age:22,gender:"M"},
    {name:"B",age:14,gender:"F"},
    {name:"C",age:44,gender:"F"},
    {name:"D",age:65,gender:"M"},
    {name:"E",age:33,gender:"F"},
    {name:"F",age:55,gender:"M"},
    {name:"G",age:33,gender:"F"},
 
]

let newArr = arr.filter(x=>x.gender=="F").map(x=>{
    return x.age;
});

console.log(newArr);