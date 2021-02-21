let rooter = {


    prepareData : function(obj) {
        let indexPoint = obj.pathname.indexOf(".");
        let extension = obj.pathname.substring(indexPoint, obj.pathname.length);
        // let files = ;
    
        let data = {
            contentType: "",
            encodage: "",
            folder: "",
            files: obj.pathname.substring(1, obj.pathname.length)
        }
    
        switch(extension) {
            case ".html" :
                data.contentType = "text/html";
                data.encodage = "UTF-8";
                data.folder = "html/";
            break;
            case ".css" :
                data.contentType = "text/css";
                data.folder = "css/";
            break;
            case ".js" :
                data.contentType = "application/javascript";
                data.folder = "js_client/";
            break;
            case ".png" :
                data.contentType = "image/png";
                data.folder = "assets";
            break;
            case ".jpg" :
                data.contentType = "image/jpeg";
                data.folder = "assets";
            break;
            default : console.log("Erreur");
        }
    
        return data;
    },
    
    sendData : function(response, data) {
            response.writeHead(200,{"Content-Type" : data.contentType});
            response.write(data.pageHtml);
            response.end();
    }
}

module.exports = rooter;