const fs = require('fs');

function readFileCallBack(fileName){
    fs.readFile(fileName,'utf-8',(err,data)=>{
        if(err){
            console.error("Error reading file: "+err);
            return;
        }else{
            console.log("File content : "+data);
        }

    })

}

readFileCallBack('sample.txt');