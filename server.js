let http = require("http");
let url = require("url");
let fs = require("fs");

let rooter = require("./rooter");

const PORT = "8080";

let server = http.createServer(traitReq);
server.listen(PORT);

function traitReq(request, response){
    let obj = url.parse(request.url);

    if (obj.pathname === "/") obj.pathname = "/index.html";

    if(obj.pathname !== "/favicon.ico"){
        let preparationData = rooter.prepareData(obj);
        let data = {};
        data.contentType = preparationData.contentType;
        data.pageHtml = fs.readFileSync(preparationData.folder + preparationData.files, preparationData.encodage);
        rooter.sendData(response,data);
    }
}