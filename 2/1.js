var radio1 = document.getElementsByName('in1');
radio1[0].onchange = f2;
radio1[1].onchange = f2;
radio1[2].onchange = f2;
radio1[3].onchange = f2;




function f2() {
for (i=0; i<5;i++){
if (radio1[i].checked) {
document.getElementById('one').src="img741.jpg";
    return;
}
else if (radio1[1].checked){
    document.getElementById('one').src="img741_1.jpg";
return;
}
else if (radio1[2].checked){
    document.getElementById('one').src="img741_2.jpg";
return;
}
else if (radio1[3].checked){
    document.getElementById('one').src="img741_3.jpg";
return;
    
}} }
