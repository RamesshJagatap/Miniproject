let stirng ="";
let buttons = documents.queryselectorsall('.button');
Array.from(button).forEach((button)=>){
    button.addEventlistener('click',(e)=>{
        if(e.target.innerHTML=='='){
        console.log(e.target)
        string=string+ e.target.innerHTML;   
        documents.queryselector('input') .value = string;
    }
 