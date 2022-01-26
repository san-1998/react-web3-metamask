let data=new Promise((resolve,reject)=>{
        
      let sqldata={
          id:1,
          name:"geeky code"
      };
      resolve(sqldata)
})

let data1=new Promise((resolve,reject)=>{
        let txt="this is our final chat"
           resolve(txt)
})

let data2=new Promise((resolve,reject)=>{
    let apiData={
        statuscode:200,
        data:6000
    }
    resolve(apiData);
})

Promise.all([data,data1,data2]).then((result)=>{
    console.log(result);
}).catch((val)=>{
    console.log(val);
})