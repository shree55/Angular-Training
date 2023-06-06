 data = {
    services:[
    {
        name: "Application Services",
        image: "images/application.png",
        features: ["Latest Technology", "Micro Service Architectiure"
         ,"Cloud Native","Test Driven Development"]
        
    },
    {
        name: "Testing Services",
        image: "images/testing.png",
        features: ["End to End Testing", "Performance Analysis"
         ,"Quality Assurance","Powerful tools"]
    },
    {
        name: "Infrastructure Services",
        image: "images/infrastructure.png",
        features: ["Cloud Services", "Low Cost"
         ,"Premium Hardware","High Performance"]
    }

]
}

function showHideMe(arrow)
{
    if(arrow=="UP")
    {
        document.getElementById("slide-area").style.display="none"
        document.getElementById("down_arrow").style.display="block";
        document.getElementById("up_arrow").style.display="none";
    }
    else
    {
        document.getElementById("slide-area").style.display="block";
        document.getElementById("up_arrow").style.display="block";
        document.getElementById("down_arrow").style.display="none";
    }
}

let code =""

for(let service of data.services){
    code+= "<div class='service-box'>"
    code+="<h3>"+service.name+"</h3>"
    code+="<img id='moveImage' src='"+service.image+"'>"
    code+="<div class='features'> <ul>"
    for(let feature of service.features){
        code+="<li onClick="+'"'+"featureAlert("+"'"+feature+"'"+")"+'"'+">"
        code+=feature+"</li>"
    }
    code+="</ul></div></div>"
}
function featureAlert(feature)
{
    alert(feature)
}
document.getElementById("services-wrapper").innerHTML=code
