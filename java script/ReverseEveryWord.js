// Method-1----With Using Inbuilt Functions
var s="This is a sunny day"
var s1=s.split(" ");
let newsentence="";
for(let i=0;i<s1.length;i++){
   
   newsentence+=s1[i].split("").reverse().join('')+" "
}
console.log(newsentence)





// Method-2----WithOut Using Inbuilt Functions
var str="This is a sunny day"
let len=count(str)
var newstr="";
var s1=""
for(let i=0;i<len;i++){
    var ch=str[i]
   
    if(ch!=' '){
        s1+=ch;  
    }
    else{
       newstr+=rev(s1);
        s1=""
    }
}
newstr+=rev(s1)
console.log(newstr)




function rev(s){
    let len=count(s)
    let s1=" "
    for(let i=len-1;i>=0;i--){
        s1+=s[i]
    }
   return s1
}


function count(s){
    let cnt=0;
while(s[cnt]!=undefined){
    cnt++;
}
 return cnt;   
}
