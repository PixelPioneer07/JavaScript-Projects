const endDate = document.getElementById("endDate").innerText = '09 June 2024  00:00 ';

const inputs = document.querySelectorAll("input");


const clock = () => {
const end = new Date(endDate);
const now = new Date();
const diff = (end-now)/1000;

if(diff<=0){
alert('The Date has been arived');
return;
}

inputs[0].value = Math.floor(diff/3600/24);
inputs[1].value = Math.floor(diff/3600)% 24;
inputs[2].value = Math.floor(diff/60)% 60;
inputs[3].value = Math.floor(diff)% 60;

console.log(diff);  
}

clock();

/*
1days - 24 hrs
1hrs - 60min - 3600sec
1min -
*/

setInterval(
    () => {
        clock();
 
    },
    1000
)