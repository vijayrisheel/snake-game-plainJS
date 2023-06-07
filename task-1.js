var toAdd = document.createElement('div');
document.body.appendChild(toAdd);
for(var i=0; i < 5; i++){
    for(var j=0; j< 5; j++) {
        var newDiv = document.createElement('span');
        newDiv.id = i.toString()+j.toString();
        newDiv.innerText='x';
        toAdd.appendChild(newDiv);
    }
    var newLine = document.createElement('div');
    toAdd.appendChild(newLine);
 }

var position = '00';
document.getElementById(position).innerHTML='.';
 
 document.addEventListener("keydown", updatePosition);
 //document.addEventListener("keyup", movePerson)

 var intervalID = null;

 function updatePosition(e) {
   
    if(e.key==='ArrowUp') {
        if(intervalID) clearInterval(intervalID);
        intervalID = setInterval(function() {
            document.getElementById(position).innerText='x';
                let row = (Number(position.charAt(0)) - 1)%5;
                let column = Number(position.charAt(1));
                position = row.toString() + column.toString();
                document.getElementById(position).innerText='.';
             
        }, 500);
    }
    else if(e.key==='ArrowDown') {
        if(intervalID) clearInterval(intervalID);
        intervalID = setInterval(function(){
            document.getElementById(position).innerText='x';
            let row = (Number(position.charAt(0)) + 1)%5;
            let column = Number(position.charAt(1));
            position = row.toString() + column.toString();
            document.getElementById(position).innerText='.';
        }, 500);
           
         
    }
    else if(e.key==='ArrowLeft') {
        if(intervalID) clearInterval(intervalID);
        intervalID = setInterval(function() {
            document.getElementById(position).innerText='x';
            let row = Number(position.charAt(0));
            let column = (Number(position.charAt(1))-1)%5;
            position = row.toString() + column.toString();
            document.getElementById(position).innerText='.';
        }, 500)
            
         
    }
    else if(e.key==='ArrowRight') {
        if(intervalID) clearInterval(intervalID);
            intervalID = setInterval(function() {
            document.getElementById(position).innerText='x';
            let row = Number(position.charAt(0));
            let column = (Number(position.charAt(1))+1)%5;
            position = row.toString() + column.toString();
            document.getElementById(position).innerText='.';
            }, 500)
        
    }
    
 }

 function movePerson() {
    console.log(position);
    document.getElementById(position).innerText='.';
 }