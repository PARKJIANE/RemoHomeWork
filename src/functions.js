const exampleFunction = () => {
    return true;
} 

function validation(a,b) {
    if(a === undefined || b === undefined ){
        throw new Error("둘중에 하나 언디파인"); 
    }
    if(parseInt(a, 10) < 0 && parseInt(b, 10) < 0)throw new Error("둘다 마이너스"); 
    if(a < 0) throw new Error("비허용된 마이너스 파라미터"); 
    if(b < 0) throw new Error("비허용된 마이너스 파라미터");
}
const sum = (a,b) => {
    validation(a,b);
    if(parseInt(a,10) > 0 && parseInt(a,10) > 0);
    return a+b;
}

function validation() {
    const sub=a-b;
}
const sub = (a,b) => {
    validation(a,b);
    if(parseInt(a,10) > 0 && parseInt(a,10) > 0);
    return a-b;
}
 
function validation() {
    const div=a/b;
}
const div = (a,b) => {
    validation(a,b);
    if(parseInt(a,10) > 0 && parseInt(a,10) > 0);
    return a/b;
} 

function validation() {
    const mul=a*b;
}
const mul = (a,b) => {
    validation(a,b);   
    if(parseInt(a,10) > 0 && parseInt(a,10) > 0);
    return a*b;
}

exports.sum = sum;
exports.sub = sub;
exports.div = div;
exports.mul = mul;
exports.exampleFunction = exampleFunction;