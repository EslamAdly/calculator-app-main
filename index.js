let inputDay=document.getElementById("input-day")
let inputMonth=document.getElementById("input-month")
let inputYear=document.getElementById("input-year")
let resDay=document.getElementById("res-day")
let resMonth=document.getElementById("res-month")
let resYear=document.getElementById("res-year")
let label=document.querySelectorAll("label")
let inputField=document.querySelectorAll(".input-field")
let validLabel=document.querySelectorAll(".valid")
let vday=document.getElementById("vday")
let vmonth=document.getElementById("vmonth")
let vyear=document.getElementById("vyear")
let current=new Date();

let err=false;
function calc(){
    removeerr();
    err=false
    const day= parseInt(inputDay.value)
    const month = parseInt(inputMonth.value)-1;
    const year= parseInt(inputYear.value)
    check()
    if(err){
        // update();
        return;
    }
    ageDay=current.getDate()-day;
    ageMonth=current.getMonth()-month
    ageYear=current.getFullYear()-year
    let dd=new Date(year,month,0)
    if(ageDay<0){
        ageMonth--;
        ageDay+=dd.getDate();
    }
    if(ageMonth<0){
        ageMonth+=12;
        ageYear--;
    }
    resYear.textContent=ageYear;
    resMonth.textContent=ageMonth;
    resDay.textContent=ageDay;
    clear();
}
function update() {
    label.forEach((labe) => {
        labe.style.color = "var(--Light-red)";
    });
    resYears.textContent = "--";
    resMonths.textContent = "--";
    resDays.textContent = "--";
    }
function clear(){
    
    inputDay.value=""
    inputMonth.value=""
    inputYear.value="" 


}
function removeerr(){
        vday.textContent=""
        vmonth.textContent=""
        vyear.textContent=""
        label.forEach(function(element) {
        element.style.color = "#716f6f";
    });
    inputField.forEach(function(element) {
        element.style.borderColor = "lightgray";
    });
}
function check(){
    if(inputDay.value === "" || inputDay.value > 31 || inputDay.value < 1){
        label.forEach(function(element) {
            element.style.color = "red";
        });
        inputField.forEach(function(element) {
            element.style.borderColor = "red";
        });
        vday.textContent="invalid day"
        err=true;
    }
    if(inputMonth.value === "" || inputMonth.value > 12 || inputMonth.value < 1){
        label.forEach(function(element) {
            element.style.color = "red";
        });
        inputField.forEach(function(element) {
            element.style.borderColor = "red";
        });
        vmonth.textContent="invalid Month";
        err=true;
    }
    if(inputYear.value===""||inputYear.value>current.getFullYear()){
        label.forEach(function(element) {
            element.style.color = "red";
        });
        inputField.forEach(function(element) {
            element.style.borderColor = "red";
        });
        vyear.textContent="invalid Year";
        err=true;
    }
}