const fs = require('node:fs');


//using promises
function readFilePromise(fileName){
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,'utf-8',(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })

    })
}

readFilePromise('sample.txt').then(data=>{
    console.log("File Content : "+data);
}).catch(err=>{
    console.log("Error in reading from a file: "+err)
})



