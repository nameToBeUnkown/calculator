let s=document.getElementById('r');
let t='';
let u='';
let v='';

function a(x){
    t+=x;
    s.value=t;
}

function b(y){
    u=t;
    v=y;
    t='';
    s.value='';
}

function c(){
    t='';
    u='';
    v='';
    s.value='';
}

function d(){
    let w=0;
    if(v=='+')w=parseFloat(u)+parseFloat(t);
    else if(v=='-')w=parseFloat(u)-parseFloat(t);
    else if(v=='*')w=parseFloat(u)*parseFloat(t);
    else if(v=='/')w=parseFloat(u)/parseFloat(t);
    s.value=w;
    t=w.toString();
}