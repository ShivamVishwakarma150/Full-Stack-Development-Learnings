//task 1 =reading a file
//task 2 =keep all the primes till n and store it in a array
//now measure the time taken by task 1 including its start and the end time
//task2 will be started after task 1 is completed
//then measure the time taken by task 2 including its start and the end time
//then measure the total time taken by task 1 ans task 2
function IsPrime(x){
    let isprime=true;
    for(let i=2;i<=x-1;i++){
        if(x%i==0){
            isprime=false;
            break;
        }
    }
    return isprime;
}

let minimist=require('minimist');
let fs=require('fs');
let args=minimist(process.argv);
console.log(args.num);
// let source=args.source;

//task1 area
let t1=Date.now();
console.log("Task 1 started at "+(t1%100000));

let sourceText=fs.readFileSync(args.source);

let t2=Date.now();
console.log("Task1 finished at "+t2%100000);
console.log(t2-t1);

// let num=parseInt(args.number);

let t3=Date.now();

console.log("Task 2 started at "+(t3%100000));

let arr=[];
for(let i=2;i<=args.num;i++){
    let ans=IsPrime(i);
    if(ans=true){
        arr.push(i);
    }
}

let t4=Date.now();
console.log("Task 2 ended at "+(t4%100000));
// console.log(arr);
console.log("Time Taken by task 2 : ",t4-t3);

console.log("Total time taken : ",t4-t1);
