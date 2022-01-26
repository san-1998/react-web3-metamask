console.log("hello world");
 let data=new Promise((resolve,reject)=>{
     setTimeout(() => {
         resolve("Yes Hr is Available");
     }, 3000);

     setTimeout(()=>{
        console.log("is hr available:");
     },2000);
 });

data.then((items)=>{
      console.log(items);
 }).catch((error)=>{
     console.log("this is an error",error);
 })

//fetch data using promises example
 let data1=fetch("http://dummy.restapiexample.com/api/v1/employees");
 data1.then((res)=>{
     return res.json()
 })
 .then((item)=>console.log(1222,item))
 .catch((error)=>console.log("this is error",error));
 

