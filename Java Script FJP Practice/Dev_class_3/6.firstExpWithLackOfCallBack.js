//task 1 =reading a file
//task 2 =keep all the primes till n and store it in a array
//now measure the time taken by task 1 including its start and the end time
//task2 will be started after task 1 is completed
//then measure the time taken by task 2 including its start and the end time
//then measure the total time taken by task 1 ans task 2

let minimist=require('minimist');
let fs=require('fs');
let args=minimist(process.argv);
console.log(args.number);
let source=args.source;

let time11=Date.now();

console.log("Task 1 started at "+(time11%10000));

let sourceText=fs.readFileSync(source,"utf-8");

let time12=Date.now();

// console.log(sourceText);
console.log("The time taken by task 1 is "+time12-time11);

let num=parseInt(args.number);

let time21=Date.now();

console.log("Task 2 started at "+(time21%10000));

let arr=[];

for(let i=1;i<=num;i++){
    let ans=IsPrime(i);
    if(ans=true){
        arr.push[i];
    }
}
function IsPrime(x){
    let isprime=true;
    for(let i=2;i<=x;i++){
        if(x%i==0){
            isprime=false;
            break;
        }
    }
    return isprime;
}

let time22=Date.now();
console.log("Task 2 ended at "+(time22%10000));
// console.log(arr);
console.log("Time Taken by Task2 is "+time22-time21);
console.log("Total time taken by task 1 and task 2 is "+time22-time11);
