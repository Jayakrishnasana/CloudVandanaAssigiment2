// Method-1----With Using Inbuilt Functions

const array1=[2,5,8,4,9,1]
console.log(array1.sort().reverse())



// Method-2----WithOut Using Inbuilt Functions
const arr=[2,5,8,4,9,1]
let len=count(arr)

for(let i=0;i<len;i++){
    for(let j=1;j<len-i;j++){
        if(arr[j-1]<arr[j]){
            let temp=arr[j-1]
            arr[j-1]=arr[j]
            arr[j]=temp
        }

    }
}

console.log(arr)

function count(s){
    let cnt=0;
while(s[cnt]!=undefined){
    cnt++;
}
 return cnt;   
}

