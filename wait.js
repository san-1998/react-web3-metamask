function getApiData()
{
    let userInfo={
        id:1,
        name:"sanjay singh khangora",
        address:"ward no. 12 kewda swami road near satti mandir"
    }
    return new Promise((resolve,reject)=>
   { 
       setTimeout(() => {
        
        resolve(userInfo)
    }, 2000);
   })  
    
}

  async function homePage(){
    let apiRecord=  await getApiData()
    console.log(apiRecord);
}
homePage();