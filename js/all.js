function loadXMLFile(file){

      var xmlDoc;

      if (window.ActiveXObject){
         xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
         xmlDoc.async = false;
         xmlDoc.load(file);
         return xmlDoc;
      } else if (document.implementation && document.implementation.createDocument){
         var xmlInfo = new XMLHttpRequest();  
         xmlInfo.open("GET", file, false);
         xmlInfo.send(null); 
         xmlDoc = xmlInfo.responseXML;
         return xmlDoc;
      }else{
         alert("您的瀏覽器不支援Javascript!! ");
      }
}

window.onload=function() { 
      xmlFile="http://localhost/RIP/rip.xml";
      xmlData=loadXMLFile(xmlFile);
      var Coordinate = xmlData.getElementsByTagName("Coordinate")[2].firstChild.nodeValue;
      document.getElementById('content').innerHTML +='Coordinate = '+Coordinate+'<br>';
}