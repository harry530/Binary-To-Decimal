/* The power function */
let p = (a = 2, b) => {
    let p = 1;
    for(let i = 0; i < b; i++){
        p *= a;
    }
    console.log(p);
}

/* The display paragraph */
let res = document.getElementById('y');

/*  */
function myFunction(){
    let m = document.getElementById('in')["value"];
    let l = m.length;
    let sum = 0;
    let j = 0;
    if(l > 8){
        res.innerHTML = "The number has to be less than 8 digits!"
    } else {
        for(let i = 0; i < l; i++){
            if(m[i] !== "1" && m[i] !== "0"){
                res.innerHTML = "Change the number! Only 0 and 1 are acceptable.";
                break;
            } else {
            sum += m[l - 1 -i] * Math.pow(2, i);
            }
            res.innerHTML = "The converted number is: " + sum;
        }
    }
    /* console.log(p); */
    
}




