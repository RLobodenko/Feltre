

var but = document.getElementById('but');
var radio1 = document.getElementsByName('in1');
var radio2 = document.getElementsByName('in3');
var radio3 = document.getElementsByName('in5');
var radio4 = document.getElementsByName('in2');
var radio5 = document.getElementsByName('in4');
var radio6 = document.getElementsByName('in6');
var radio7 = document.getElementsByName('in7');
var radio8 = document.getElementsByName('in8');
var radio9 = document.getElementsByName('in9');
var radio10 = document.getElementsByName('in10');
var radio11 = document.getElementsByName('in11');

var ks1=[100, 200, 300];
var ks2=[100, 500, 1000];
var ks3=[280, 560, 840];
var ks4=[110, 220, 330];
var ks5=[140, 280, 420];
var ks6=[120, 240, 360];


var razmer2 = "1200x1200x1500мм";
var razmer = "900x900x1200мм";
var razmer1 = "2500x1000x1250мм";
var razmer3 = "900x900x1800мм";
var razmer4 = "1100x700x1400мм";



function f2() {

for (i=0;i<radio11.length;i++){

if(radio1[i].selected && radio6[i].selected && radio9[i].selected) {


document.getElementById('out1').innerHTML = this.razmer;
document.getElementById('out').innerHTML = ks1[0] + ks2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Венге, ольха, дуб";
return;
}


else if(radio1[i].selected && radio6[i].selected  && radio10[i].selected) {


document.getElementById('out1').innerHTML = this.razmer;
document.getElementById('out').innerHTML = ks1[0] + ks2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Венге, ольха, дуб";
return;



}



else if(radio1[i].selected && radio6[i].selected && radio11[i].selected) {

document.getElementById('out1').innerHTML = this.razmer;
document.getElementById('out').innerHTML = ks1[0] + ks2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Венге, ольха, дуб";
return;

}




else if(radio1[i].selected && radio7[i].selected  && radio9[i].selected) {


document.getElementById('out1').innerHTML = this.razmer;
document.getElementById('out').innerHTML = ks1[1] + ks2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Венге, ольха, дуб";
return;


}

else if(radio1[i].selected && radio7[i].selected && radio10[i].selected) {


document.getElementById('out1').innerHTML = this.razmer;
document.getElementById('out').innerHTML = ks1[1] + ks2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Венге, ольха, дуб";
return;
}




else if(radio1[i].selected && radio7[i].selected  && radio11[i].selected) {


document.getElementById('out1').innerHTML = this.razmer;
document.getElementById('out').innerHTML = ks1[1] + ks2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Венге, ольха, дуб";
return;

}
else if(radio1[i].selected && radio8[i].selected  && radio9[i].selected) {


document.getElementById('out1').innerHTML = this.razmer;
document.getElementById('out').innerHTML = ks1[2] + ks2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Венге, ольха, дуб";
return;


}

else if(radio1[i].selected && radio8[i].selected && radio10[i].selected) {


document.getElementById('out1').innerHTML = this.razmer;
document.getElementById('out').innerHTML = ks1[2] + ks2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Венге, ольха, дуб";
return;
}




else if(radio1[i].selected && radio8[i].selected  && radio11[i].selected) {


document.getElementById('out1').innerHTML = this.razmer;
document.getElementById('out').innerHTML = ks1[2] + ks2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Венге, ольха, дуб";
return;

}



if(radio2[i].selected && radio6[i].selected && radio9[i].selected) {


      document.getElementById('out1').innerHTML = this.razmer1;

document.getElementById('out').innerHTML = ks3[0] + ks2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Бук, ольха, махагон";
return;
}


else if(radio2[i].selected && radio6[i].selected  && radio10[i].selected) {

document.getElementById('out1').innerHTML = this.razmer1;

document.getElementById('out').innerHTML = ks3[0] + ks2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Бук, ольха, махагон";
return;



}



else if(radio2[i].selected && radio6[i].selected && radio11[i].selected) {

document.getElementById('out1').innerHTML = this.razmer1;
document.getElementById('out').innerHTML = ks3[0] + ks2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Бук, ольха, махагон";
return;

}




else if(radio2[i].selected && radio7[i].selected  && radio9[i].selected) {

document.getElementById('out1').innerHTML = this.razmer1;

document.getElementById('out').innerHTML = ks3[1] + ks2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Бук, ольха, махагон";
return;


}

else if(radio2[i].selected && radio7[i].selected && radio10[i].selected) {


document.getElementById('out1').innerHTML = this.razmer1;
document.getElementById('out').innerHTML = ks3[1] + ks2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Бук, ольха, махагон";
return;
}




else if(radio2[i].selected && radio7[i].selected  && radio11[i].selected) {

document.getElementById('out1').innerHTML = this.razmer1;

document.getElementById('out').innerHTML = ks3[1] + ks2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Бук, ольха, махагон";
return;

}
else if(radio2[i].selected && radio8[i].selected  && radio9[i].selected) {


document.getElementById('out1').innerHTML = this.razmer1;
document.getElementById('out').innerHTML = ks3[2] + ks2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Бук, ольха, махагон";
return;


}

else if(radio2[i].selected && radio8[i].selected && radio10[i].selected) {

document.getElementById('out1').innerHTML = this.razmer1;

document.getElementById('out').innerHTML = ks3[2] + ks2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Бук, ольха, махагон";
return;
}




else if(radio2[i].selected && radio8[i].selected  && radio11[i].selected) {

document.getElementById('out1').innerHTML = this.razmer1;

document.getElementById('out').innerHTML = ks3[2] + ks2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Бук, ольха, махагон";
return;

}




else if(radio4[i].selected && radio6[i].selected && radio9[i].selected) {

document.getElementById('out1').innerHTML = this.razmer2;
 
    document.getElementById('out').innerHTML = ks5[0] + ks2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Дуб, кедр, махагон";
    return;
}


else if(radio4[i].selected && radio6[i].selected  && radio10[i].selected) {

document.getElementById('out1').innerHTML = this.razmer2;
 
    document.getElementById('out').innerHTML = ks5[0] + ks2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Дуб, кедр, махагон";
    return;



}



else if(radio4[i].selected && radio6[i].selected && radio11[i].selected) {

document.getElementById('out1').innerHTML = this.razmer2;
    document.getElementById('out').innerHTML = ks5[0] + ks2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Дуб, кедр, махагон";
    return;

}




else if(radio4[i].selected && radio7[i].selected  && radio9[i].selected) {

document.getElementById('out1').innerHTML = this.razmer2;
 
    document.getElementById('out').innerHTML = ks5[1] + ks2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Дуб, кедр, махагон";
    return;


}

else if(radio4[i].selected && radio7[i].selected && radio10[i].selected) {


document.getElementById('out1').innerHTML = this.razmer2;
    document.getElementById('out').innerHTML = ks5[1] + ks2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Дуб, кедр, махагон";
    return;
}




else if(radio4[i].selected && radio7[i].selected  && radio11[i].selected) {


document.getElementById('out1').innerHTML = this.razmer2;
    document.getElementById('out').innerHTML = ks5[1] + ks2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Дуб, кедр, махагон";
    return;

}
else if(radio4[i].selected && radio8[i].selected  && radio9[i].selected) {


document.getElementById('out1').innerHTML = this.razmer2;
    document.getElementById('out').innerHTML = ks5[2] + ks2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Дуб, кедр, махагон";
    return;


}

else if(radio4[i].selected && radio8[i].selected && radio10[i].selected) {


document.getElementById('out1').innerHTML = this.razmer2;
    document.getElementById('out').innerHTML = ks5[2] + ks2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Дуб, кедр, махагон";
    return;
}




else if(radio4[i].selected && radio8[i].selected  && radio11[i].selected) {


document.getElementById('out1').innerHTML = this.razmer2;
    document.getElementById('out').innerHTML = ks5[2] + ks2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Дуб, кедр, махагон";
    return;

}







else if(radio5[i].selected && radio6[i].selected && radio9[i].selected) {


document.getElementById('out1').innerHTML = this.razmer3;
document.getElementById('out').innerHTML = ks6[0] + ks2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, кедр, вишня";
return;
}




else if(radio5[i].selected && radio6[i].selected  && radio10[i].selected) {
document.getElementById('out1').innerHTML = this.razmer3;

document.getElementById('out').innerHTML = ks6[0] + ks2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, кедр, вишня";
return;
}



else if(radio5[i].selected && radio6[i].selected && radio11[i].selected) {
document.getElementById('out1').innerHTML = this.razmer3;

document.getElementById('out').innerHTML = ks6[0] + ks2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, кедр, вишня";
return;
}






else if(radio5[i].selected && radio7[i].selected  && radio9[i].selected) {

document.getElementById('out1').innerHTML = this.razmer3;

document.getElementById('out').innerHTML = ks6[1] + ks2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, кедр, вишня";
return;

}

else if(radio5[i].selected && radio7[i].selected && radio10[i].selected) {
document.getElementById('out1').innerHTML = this.razmer3;


document.getElementById('out').innerHTML = ks6[1] + ks2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, кедр, вишня";
return;
}




else if(radio5[i].selected && radio7[i].selected  && radio11[i].selected) {

document.getElementById('out1').innerHTML = this.razmer3;
document.getElementById('out').innerHTML = ks6[1] + ks2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, кедр, вишня";
return;


}
else if(radio5[i].selected && radio8[i].selected  && radio9[i].selected) {

document.getElementById('out1').innerHTML = this.razmer3;

document.getElementById('out').innerHTML = ks6[2] + ks2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, кедр, вишня";
return;

}

else if(radio5[i].selected && radio8[i].selected && radio10[i].selected) {
document.getElementById('out1').innerHTML = this.razmer3;

document.getElementById('out').innerHTML = ks6[2] + ks2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, кедр, вишня";
return;
}




else if(radio5[i].selected && radio8[i].selected  && radio11[i].selected) {

document.getElementById('out1').innerHTML = this.razmer3;

document.getElementById('out').innerHTML = ks6[2] + ks2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, кедр, вишня";
return;


}




else if(radio3[i].selected && radio6[i].selected && radio9[i].selected) {

document.getElementById('out1').innerHTML = this.razmer4;

document.getElementById('out').innerHTML = ks4[0] + ks2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, венге, кедр";
return;
}




else if(radio3[i].selected && radio6[i].selected  && radio10[i].selected) {

document.getElementById('out1').innerHTML = this.razmer4;
document.getElementById('out').innerHTML = ks4[0] + ks2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, венге, кедр";
return;
}



else if(radio3[i].selected && radio6[i].selected && radio11[i].selected) {

document.getElementById('out1').innerHTML = this.razmer4;
document.getElementById('out').innerHTML = ks4[0] + ks2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, венге, кедр";
return;
}






else if(radio3[i].selected && radio7[i].selected  && radio9[i].selected) {
document.getElementById('out1').innerHTML = this.razmer4;


document.getElementById('out').innerHTML = ks4[1] + ks2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, венге, кедр";
return;

}

else if(radio3[i].selected && radio7[i].selected && radio10[i].selected) {

document.getElementById('out1').innerHTML = this.razmer4;

document.getElementById('out').innerHTML = ks4[1] + ks2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, венге, кедр";
return;
}




else if(radio3[i].selected && radio7[i].selected  && radio11[i].selected) {

document.getElementById('out1').innerHTML = this.razmer4;
document.getElementById('out').innerHTML = ks4[1] + ks2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, венге, кедр";
return;


}
else if(radio3[i].selected && radio8[i].selected  && radio9[i].selected) {

document.getElementById('out1').innerHTML = this.razmer4;

document.getElementById('out').innerHTML = ks4[2] + ks2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, венге, кедр";
return;

}

else if(radio3[i].selected && radio8[i].selected && radio10[i].selected) {

document.getElementById('out1').innerHTML = this.razmer4;
document.getElementById('out').innerHTML = ks4[2] + ks2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, венге, кедр";
return;
}




else if(radio3[i].selected && radio8[i].selected  && radio11[i].selected) {

document.getElementById('out1').innerHTML = this.razmer4;

document.getElementById('out').innerHTML = ks4[2] + ks2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, венге, кедр";
return;


}

}






}





f2();


