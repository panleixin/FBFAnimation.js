/**********************************
|  coding design by panlei 潘磊   |
|  http://www.8bei8.com           |
|  https://github.com/panleixin   |
**********************************/

/*animation setting*/

var pWidth=200;
var pHeight=300;
var picNum=12;
var picFormat="png";
var picPath="animationImages";
var ID='FBFAnimation';
var loop=true;
var changeSpeed=true;
var second=0.06;

function run(){
  if(changeSpeed){
    switch(k){
	 case 0:m(0.1);break;
     case 1:m(0.05);break;
	 case 2:m(0.05);break;
	 case 3:m(0.1);break;
	 case 4:m(0.05);break;
     case 5:m(0.05);break;
	 case 6:m(0.1);break;
	 case 7:m(0.05);break;
	 case 8:m(0.05);break;
	 case 9:m(0.1);break;
	 case 10:m(0.05);break;
	 case 11:m(0.05);break;
    }
  }
  else{switch(k){default:m(second);}}
}


/*main code*/

var a=document.getElementById(ID);
a.style.width=pWidth;
a.style.height=pHeight;
var imgs=[];
var showImg="";
for(var i=1;i<=picNum;i++){imgs[i]="<img src='"+picPath+"/"+i+"."+picFormat+"'/>";}
for(var i=1;i<=picNum;i++){showImg=showImg+imgs[i];}
a.innerHTML=showImg;
b=a.getElementsByTagName("img");
bL=b.length;
hidImg();
var k=0;
run();

function hidImg(){for(var j=0;j<bL;j++){b[j].style.display="none";}}
function m(t){t=t*1000;setTimeout("inPic()",t);}
function inPic(){
  hidImg();
  if(k<picNum){
    b[k].style.display="block";
	run();
    k++;
  }//if
  else{
	 if(loop){
     k=0;
	 b[k].style.display="block";
	 run();
     k++;
	 }
	 else{
     b[picNum-1].style.display="block";
	 }
  }
}