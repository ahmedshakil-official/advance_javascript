const checkTruthyFalsy=value=>{
    if(value){
        console.log("This is a Truthy value");
    }
    else{
        console.log("This is a falsy value")
    }
}
let falsy="";
let truthy=" ";
checkTruthyFalsy(falsy);
checkTruthyFalsy(truthy);
falsy=0;
truthy=-1;
checkTruthyFalsy(falsy);
checkTruthyFalsy(truthy);
falsy=null;
truthy=!null;
checkTruthyFalsy(falsy);
checkTruthyFalsy(truthy);
falsy=NaN;
truthy=-!NaN;
checkTruthyFalsy(falsy);
checkTruthyFalsy(truthy);
falsy=[0];
truthy=[];
checkTruthyFalsy(falsy);
checkTruthyFalsy(truthy);
