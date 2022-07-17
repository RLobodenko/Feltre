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

var ks1 = {
znacheniya: [120, 240, 360]
};

var ks3 = {
znacheniya1: [195, 390, 585]
};


var ks2 = {
znacheniya2: [100, 500, 1000]

};

var ks4 = {
znacheniya4: [195, 390, 585]
};

var ks5 = {
znacheniya5: [115, 230, 345]
};

var ks6 = {
znacheniya6: [145, 290, 435]
};



class Razmery{
razmer1;

}


class Razmery1 {
razmer1;
razmer2;


}

const razmer = new Razmery();
razmer.razmer1 = "450x450x2000мм";


const razmer_1 = new Razmery1();
razmer_1.razmer1 = "450x450x2000мм";
razmer_1.razmer2 = "460x460x2000мм";

function f2() {

for (i=0;i<radio11.length;i++){




if(radio1[i].selected && radio6[i].selected && radio9[i].selected) {

document.getElementById('out1').innerHTML = razmer_1.razmer1;

document.getElementById('out').innerHTML = ks1.znacheniya[0] + ks2.znacheniya2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Венге, ольха, дуб";
return;
}


else if(radio1[i].selected && radio6[i].selected  && radio10[i].selected) {


document.getElementById('out1').innerHTML = razmer_1.razmer1;
document.getElementById('out').innerHTML = ks1.znacheniya[0] + ks2.znacheniya2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Венге, ольха, дуб";
return;



}



else if(radio1[i].selected && radio6[i].selected && radio11[i].selected) {

document.getElementById('out1').innerHTML = razmer.razmer1;
document.getElementById('out').innerHTML = ks1.znacheniya[0] + ks2.znacheniya2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Венге, ольха, дуб";
return;

}




else if(radio1[i].selected && radio7[i].selected  && radio9[i].selected) {


document.getElementById('out1').innerHTML = razmer.razmer1;
document.getElementById('out').innerHTML = ks1.znacheniya[1] + ks2.znacheniya2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Венге, ольха, дуб";
return;


}

else if(radio1[i].selected && radio7[i].selected && radio10[i].selected) {

document.getElementById('out1').innerHTML = razmer.razmer1;

document.getElementById('out').innerHTML = ks1.znacheniya[1] + ks2.znacheniya2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Венге, ольха, дуб";
return;
}




else if(radio1[i].selected && radio7[i].selected  && radio11[i].selected) {
document.getElementById('out1').innerHTML = razmer.razmer1;


document.getElementById('out').innerHTML = ks1.znacheniya[1] + ks2.znacheniya2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Венге, ольха, дуб";
return;

}
else if(radio1[i].selected && radio8[i].selected  && radio9[i].selected) {

document.getElementById('out1').innerHTML = razmer.razmer1;

document.getElementById('out').innerHTML = ks1.znacheniya[2] + ks2.znacheniya2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Венге, ольха, дуб";
return;


}

else if(radio1[i].selected && radio8[i].selected && radio10[i].selected) {

document.getElementById('out1').innerHTML = razmer.razmer1;

document.getElementById('out').innerHTML = ks1.znacheniya[2] + ks2.znacheniya2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Венге, ольха, дуб";
return;
}




else if(radio1[i].selected && radio8[i].selected  && radio11[i].selected) {

document.getElementById('out1').innerHTML = razmer.razmer1;

document.getElementById('out').innerHTML = ks1.znacheniya[2] + ks2.znacheniya2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Венге, ольха, дуб";
return;

}



if(radio2[i].selected && radio6[i].selected && radio9[i].selected) {

document.getElementById('out1').innerHTML = razmer_1.razmer2;

document.getElementById('out').innerHTML = ks3.znacheniya1[0] + ks2.znacheniya2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Бук, ольха, махагон";
return;
}


else if(radio2[i].selected && radio6[i].selected  && radio10[i].selected) {
document.getElementById('out1').innerHTML = razmer_1.razmer2;


document.getElementById('out').innerHTML = ks3.znacheniya1[0] + ks2.znacheniya2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Бук, ольха, махагон";
return;



}



else if(radio2[i].selected && radio6[i].selected && radio11[i].selected) {
document.getElementById('out1').innerHTML = razmer_1.razmer2;

document.getElementById('out').innerHTML = ks3.znacheniya1[0] + ks2.znacheniya2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Бук, ольха, махагон";
return;

}




else if(radio2[i].selected && radio7[i].selected  && radio9[i].selected) {

document.getElementById('out1').innerHTML = razmer_1.razmer2;

document.getElementById('out').innerHTML = ks3.znacheniya1[1] + ks2.znacheniya2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Бук, ольха, махагон";
return;


}

else if(radio2[i].selected && radio7[i].selected && radio10[i].selected) {

document.getElementById('out1').innerHTML = razmer_1.razmer2;

document.getElementById('out').innerHTML = ks3.znacheniya1[1] + ks2.znacheniya2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Бук, ольха, махагон";
return;
}




else if(radio2[i].selected && radio7[i].selected  && radio11[i].selected) {
document.getElementById('out1').innerHTML = razmer_1.razmer2;


document.getElementById('out').innerHTML = ks3.znacheniya1[1] + ks2.znacheniya2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Бук, ольха, махагон";
return;

}
else if(radio2[i].selected && radio8[i].selected  && radio9[i].selected) {


document.getElementById('out1').innerHTML = razmer_1.razmer2;
document.getElementById('out').innerHTML = ks3.znacheniya1[2] + ks2.znacheniya2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Бук, ольха, махагон";
return;


}

else if(radio2[i].selected && radio8[i].selected && radio10[i].selected) {

document.getElementById('out1').innerHTML = razmer_1.razmer2;

document.getElementById('out').innerHTML = ks3.znacheniya1[2] + ks2.znacheniya2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Бук, ольха, махагон";
return;
}




else if(radio2[i].selected && radio8[i].selected  && radio11[i].selected) {

document.getElementById('out1').innerHTML = razmer_1.razmer2;

document.getElementById('out').innerHTML = ks3.znacheniya1[2] + ks2.znacheniya2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Бук, ольха, махагон";
return;

}




else if(radio4[i].selected && radio6[i].selected && radio9[i].selected) {
document.getElementById('out1').innerHTML = razmer.razmer1;

 
    document.getElementById('out').innerHTML = ks5.znacheniya5[0] + ks2.znacheniya2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Дуб, кедр, махагон";
    return;
}


else if(radio4[i].selected && radio6[i].selected  && radio10[i].selected) {


document.getElementById('out1').innerHTML = razmer.razmer1;
    document.getElementById('out').innerHTML = ks5.znacheniya5[0] + ks2.znacheniya2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Дуб, кедр, махагон";
    return;



}



else if(radio4[i].selected && radio6[i].selected && radio11[i].selected) {

document.getElementById('out1').innerHTML = razmer.razmer1;
    document.getElementById('out').innerHTML = ks5.znacheniya5[0] + ks2.znacheniya2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Дуб, кедр, махагон";
    return;

}




else if(radio4[i].selected && radio7[i].selected  && radio9[i].selected) {

document.getElementById('out1').innerHTML = razmer.razmer1;
 
    document.getElementById('out').innerHTML = ks5.znacheniya5[1] + ks2.znacheniya2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Дуб, кедр, махагон";
    return;


}

else if(radio4[i].selected && radio7[i].selected && radio10[i].selected) {

document.getElementById('out1').innerHTML = razmer.razmer1;
 
    document.getElementById('out').innerHTML = ks5.znacheniya5[1] + ks2.znacheniya2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Дуб, кедр, махагон";
    return;
}




else if(radio4[i].selected && radio7[i].selected  && radio11[i].selected) {
document.getElementById('out1').innerHTML = razmer.razmer1;

 
    document.getElementById('out').innerHTML = ks5.znacheniya5[1] + ks2.znacheniya2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Дуб, кедр, махагон";
    return;

}
else if(radio4[i].selected && radio8[i].selected  && radio9[i].selected) {


document.getElementById('out1').innerHTML = razmer.razmer1;
    document.getElementById('out').innerHTML = ks5.znacheniya5[2] + ks2.znacheniya2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Дуб, кедр, махагон";
    return;


}

else if(radio4[i].selected && radio8[i].selected && radio10[i].selected) {

document.getElementById('out1').innerHTML = razmer.razmer1;
 
    document.getElementById('out').innerHTML = ks5.znacheniya5[2] + ks2.znacheniya2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Дуб, кедр, махагон";
    return;
}




else if(radio4[i].selected && radio8[i].selected  && radio11[i].selected) {

document.getElementById('out1').innerHTML = razmer.razmer1;
 
    document.getElementById('out').innerHTML = ks5.znacheniya5[2] + ks2.znacheniya2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Дуб, кедр, махагон";
    return;

}







else if(radio5[i].selected && radio6[i].selected && radio9[i].selected) {


document.getElementById('out1').innerHTML = razmer.razmer1;
document.getElementById('out').innerHTML = ks6.znacheniya6[0] + ks2.znacheniya2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, кедр, вишня";
return;
}




else if(radio5[i].selected && radio6[i].selected  && radio10[i].selected) {
document.getElementById('out1').innerHTML = razmer.razmer1;

document.getElementById('out').innerHTML = ks6.znacheniya6[0] + ks2.znacheniya2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, кедр, вишня";
return;
}



else if(radio5[i].selected && radio6[i].selected && radio11[i].selected) {

document.getElementById('out1').innerHTML = razmer.razmer1;
document.getElementById('out').innerHTML = ks6.znacheniya6[0] + ks2.znacheniya2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, кедр, вишня";
return;
}






else if(radio5[i].selected && radio7[i].selected  && radio9[i].selected) {
document.getElementById('out1').innerHTML = razmer.razmer1;


document.getElementById('out').innerHTML = ks6.znacheniya6[1] + ks2.znacheniya2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, кедр, вишня";
return;

}

else if(radio5[i].selected && radio7[i].selected && radio10[i].selected) {

document.getElementById('out1').innerHTML = razmer.razmer1;

document.getElementById('out').innerHTML = ks6.znacheniya6[1] + ks2.znacheniya2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, кедр, вишня";
return;
}




else if(radio5[i].selected && radio7[i].selected  && radio11[i].selected) {
document.getElementById('out1').innerHTML = razmer.razmer1;

document.getElementById('out').innerHTML = ks6.znacheniya6[1] + ks2.znacheniya2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, кедр, вишня";
return;


}
else if(radio5[i].selected && radio8[i].selected  && radio9[i].selected) {

document.getElementById('out1').innerHTML = razmer.razmer1;

document.getElementById('out').innerHTML = ks6.znacheniya6[2] + ks2.znacheniya2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, кедр, вишня";
return;

}

else if(radio5[i].selected && radio8[i].selected && radio10[i].selected) {

document.getElementById('out1').innerHTML = razmer.razmer1;
document.getElementById('out').innerHTML = ks6.znacheniya6[2] + ks2.znacheniya2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, кедр, вишня";
return;
}




else if(radio5[i].selected && radio8[i].selected  && radio11[i].selected) {
document.getElementById('out1').innerHTML = "450x450x2000мм";


document.getElementById('out').innerHTML = ks6.znacheniya6[2] + ks2.znacheniya2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, кедр, вишня";
return;


}







else if(radio3[i].selected && radio6[i].selected && radio9[i].selected) {

document.getElementById('out1').innerHTML = razmer_1.razmer2;

document.getElementById('out').innerHTML = ks4.znacheniya4[0] + ks2.znacheniya2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, венге, кедр";
return;
}




else if(radio3[i].selected && radio6[i].selected  && radio10[i].selected) {
document.getElementById('out1').innerHTML = razmer_1.razmer2;

document.getElementById('out').innerHTML = ks4.znacheniya4[0] + ks2.znacheniya2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, венге, кедр";
return;
}



else if(radio3[i].selected && radio6[i].selected && radio11[i].selected) {

document.getElementById('out1').innerHTML = razmer_1.razmer2;
document.getElementById('out').innerHTML = ks4.znacheniya4[0] + ks2.znacheniya2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, венге, кедр";
return;
}






else if(radio3[i].selected && radio7[i].selected  && radio9[i].selected) {

document.getElementById('out1').innerHTML = razmer_1.razmer2;

document.getElementById('out').innerHTML = ks4.znacheniya4[1] + ks2.znacheniya2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, венге, кедр";
return;

}

else if(radio3[i].selected && radio7[i].selected && radio10[i].selected) {
document.getElementById('out1').innerHTML = razmer_1.razmer2;


document.getElementById('out').innerHTML = ks4.znacheniya4[1] + ks2.znacheniya2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, венге, кедр";
return;
}




else if(radio3[i].selected && radio7[i].selected  && radio11[i].selected) {
document.getElementById('out1').innerHTML = razmer_1.razmer2;

document.getElementById('out').innerHTML = ks4.znacheniya4[1] + ks2.znacheniya2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, венге, кедр";
return;


}
else if(radio3[i].selected && radio8[i].selected  && radio9[i].selected) {

document.getElementById('out1').innerHTML = razmer_1.razmer2;

document.getElementById('out').innerHTML = ks4.znacheniya4[2] + ks2.znacheniya2[0] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, венге, кедр";
return;

}

else if(radio3[i].selected && radio8[i].selected && radio10[i].selected) {

document.getElementById('out1').innerHTML = razmer_1.razmer2;
document.getElementById('out').innerHTML = ks4.znacheniya4[2] + ks2.znacheniya2[1] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, венге, кедр";
return;
}




else if(radio3[i].selected && radio8[i].selected  && radio11[i].selected) {
document.getElementById('out1').innerHTML = razmer_1.razmer2;


document.getElementById('out').innerHTML = ks4.znacheniya4[2] + ks2.znacheniya2[2] + "у.е.";
    document.getElementById('out2').innerHTML = "Орех, венге, кедр";
return;


}

}






}








