var radio1 = document.getElementsByName('in1');

radio1[0].onchange = f2;
radio1[1].onchange = f2;
radio1[2].onchange = f2;
radio1[3].onchange = f2;
radio1[4].onchange = f2;
radio1[5].onchange = f2;
radio1[6].onchange = f2;
radio1[7].onchange = f2;


function f2() {
    
    
for (i=0; i<8;i++){
if (radio1[i].checked) {
	document.getElementById('one').src="1.jpg";
	return;
}

else if (radio1[1].checked){ 
	document.getElementById('one').src="2.jpg";
		return;	
}
else if (radio1[2].checked){
	document.getElementById('one').src="3.jpg";
		return;	
}
else if (radio1[3].checked){
    document.getElementById('one').src="4.jpg";
        return;
}
else if (radio1[4].checked){
    document.getElementById('one').src="5.jpg";
        return;
}
else if (radio1[5].checked){
    document.getElementById('one').src="6.jpg";
        return;
}
else if (radio1[6].checked){
    document.getElementById('one').src="7.jpg";
        return;
}
else if (radio1[7].checked){
    document.getElementById('one').src="8.jpg";
        return;
}
}	
}



