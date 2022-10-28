let arr = [
    "Shivam Vishwakarma",
    "Arvind Vishwakarma",
    "Nirmala Vishwakarma",
    "Santosh Gupta",
    "Viaksh PAswan",
    "Prashant Bhardwaj"
];

// let iarr = arr.map(function(v,i){
//     let ans="";
//     let name = v.split(" ");
//     ans=name[0][0]+". "+name[1][0]+".";

//     return ans;

// });
let iarr = arr.map(function(name,i){
    let names = name.split(" "); // Here split return an array
    let fname = names[0];
    let lname=names[1];
    let fnamefc= fname[0];
    let lnamefc= lname[0];

    return fnamefc+". "+lnamefc+".";

});

console.log(iarr);