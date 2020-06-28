/*
給定 n（1<=n<=30），依照規律「印出」正確圖形
*/

function printStars(n) {
    if(n>=1 && n<=30){
        star = ""
        for(i=0;i<n;i++){
        star +="*\n"
        }
        return star
    } else {
        console.log("please enter a number between 1 to 30")
    }
}

console.log(printStars(6))
