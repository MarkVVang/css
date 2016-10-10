var a=0;
function random(){  
	var i=document.getElementsByTagName('li');
    var rn=Math.floor(Math.random()*9);
    var rc=Math.floor(Math.random()*3);
    var rco=[["#ff0000","红色"],["#00ff00","绿色"],["#0000ff","蓝色"]];
    i[a].style.backgroundColor="#e8830d";
 	i[rn].style.backgroundColor=rco[rc][0];
    a=rn;          
    console.log("格子"+(rn+1)+"颜色变成了"+rco[rc][1]);         
	}
setInterval(random,1000);