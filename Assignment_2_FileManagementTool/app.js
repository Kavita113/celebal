const http = require("http");
const fs = require("fs");
const path = require("path");

const { create, read, deleteFile } = require("./fileManager");
const PORT = 8000;

const server = http.createServer((req, res) => {
    
  //extracting complete url
  const url = new URL(req.url, `http://${req.headers.host}`);

  //getting the path for opeartions like /create,/delete
  const pathName = url.pathname;
  //    console.log(pathName)

  //getting values from query parameters
  const query = url.searchParams;
  //    console.log(query)

  res.writeHead(200, { "content-type": "text/plain" });

  if (pathName === "/create") {

    //extracting filename and its content from url
    let fileName = query.get("filename");
    let fileContent = query.get("filecontent");

    //checking whether file name is provided or not
    if (!fileName) {
      res.write("Provide filename with /create?filename=[filename]");
      res.end();
      return;
    }

    //full path with file name
    const filePath = path.join(__dirname, fileName);

    const success = create(filePath, fileContent);
    
    if(success){
      res.end(`File '${fileName}' created successfully.`)
    }else{
      res.end("Error while creating file: "+fileName)
    }

  } else if (pathName === "/read") {

    //extracting filename and its content from url
    let fileName = query.get("filename");

    //checking whether file name is provided or not
    if (!fileName) {
      res.write("Provide filename with /read?filename=[filename]");
      res.end();
      return;
    }

    //full path with file name
    const filePath = path.join(__dirname, fileName);

    const data = read(filePath);
    if(data){
      res.end("File data: " + data)
    }else{
      res.end("File not found or cannot be read: "+fileName);
    }
  
  } else if (pathName === "/delete") {

    //extracting filename and its content from url
    let fileName = query.get("filename");

    //checking whether file name is provided or not
    if (!fileName) {
      res.write("Provide filename with /delete?filename=[filename]");
      res.end();
      return;
    }

   //full path with file name
    const filePath = path.join(__dirname, fileName);

    const success = deleteFile(filePath);

    if(success){
      
      res.end("File deleted successfully :" + fileName)
    }else{
     
      res.end("File not found or cannot be deleted")
    }

  } else {

    res.write(
      "In order to perform operation like creating,deleting,reading from files\n1.To create a file use http://localhost:8000/create?filename=[fileName]&filecontent=[file content]\n2.To read from a file use http://localhost:8000/read?filename=[fileName]\n3.To delete a file use http://localhost:8000/delete?filename=[fileName]"
    );
  }
  res.end();
});

server.listen(PORT, (req, res) => {
  console.log("Server is listening on port :" + PORT);
});
