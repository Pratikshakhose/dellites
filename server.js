
var express=require("express");
var app=express();
app.get("/",(req,resp)=>{
resp.send(
    "<body>"
    +"<h1>welcome to services</h1>"
    
   + "<table>"
       + "<tr>"
           + "<td>"
               + "service 1"
           + "</td>"
           + "<td>java solutions</td>"
       + "</tr>"
+"<tr>"

+"<td>" 
    +"solution 2"
+"</td>"
+"<td>"
    +".net services"
+"</td>"

+"</tr>"
+"</table>"
+"</body>"

)
}
);
var b=app.listen(7000);
console.log("running");