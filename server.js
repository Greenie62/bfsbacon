const fs=require('fs');
const http=require('http');
const path=require("path");


http.createServer((req,res)=>{
    if(req.url === "/favicon.ico"){
        console.log("Ignore .ico file")
        return;
    }
    var filename=path.join(__dirname, req.url === "/" ? "index.html" : req.url);

    var fileType=path.extname(filename);
    let contentType;

    switch(fileType){

        case ".js":
        contentType="application/js"
        break;

        case ".json":
        contentType="application/js"
        break;

        case ".html":
        contentType="text/html"
        break;

        case ".css":
        contentType="text/css"
        break;


        case ".jpg":
        contentType="image/jpg"
        break;

        default:
        console.log("Error: Unknown fileType")
        break;
    }

    fs.readFile(filename,(err,content)=>{
        if(err)throw err;
        res.writeHead(200,{'Content-Type':contentType})
        res.end(content)
    })
}).listen(3000,()=>console.log(`Logged onto port 3000.`))