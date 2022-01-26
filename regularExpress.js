console.log("This is regular expression tutorial:")


 let string="indore is the cleanest city of india and indore is the heart of mp";
 let reg=/mp$/g;
/*  1)exec() :-console.log(reg.source);
let result=reg.exec(match);
console.log(result)
console.log(result.input);
console.log(result.index);*/

/* 2) test():-
let result=reg.test(string);
console.log(result); */

/*  3) match():
 let result=string.match(reg)
console.log(result)*/
/* 4) search():
let result=string.search(reg)
console.log(result)*/
/* 5) replace():
let result5=string.replace(reg,"Bhopal")
console.log(result5)*/
if(reg.test(string))
{
   let output=string.match(reg)
    console.log(output);
    
}
else
{
    console.log("no");
}

function sum(x,y,z){
    return x+y+z;
}
console.log(sum(4,53,3))

/*
 topic=>Currying Function
  function add(x){
       return (y)=>{
          return (z)=>{
           return x+y+z;
        }
    }
}
let data=add(34)(3)(434)
console.log(data)*/
 
/*let userData={
    id:4390,
    name:"peter john",
    sport:"football"
}

function getData(obj){
     return (id)=>{
         return (name)=>{
             return (sport)=>{
                 return name;
             }
         }
     }
}

let data=getData(userData);
console.log(data)*/




