const fs = require('node:fs/promises');
async function readFileAsync(fileName){
try{
    const data = await fs.readFile(fileName,'utf-8');
    console.log("File content : "+data);

}catch(err){
    console.error("Error reading file : "+err)
}
}

readFileAsync('sample.txt');
