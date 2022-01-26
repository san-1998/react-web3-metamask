let student={
     name:"durgesh",
     age:27,
     color:"fair"
};
let ans=JSON.stringify(student);
console.log(ans);

let str='{"name":"kajol","age":46,"color":"fair"}';
let result=JSON.parse(str);
console.log(result);