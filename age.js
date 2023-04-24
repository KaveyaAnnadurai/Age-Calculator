var second= 00,ageInMinutes,count =0,a;
function ageCalculator() {  
    var userinput = document.getElementById("DOB").value;  
    var today = new Date()
    // console.log(today)
   
     var dob = new Date(userinput); 
     
    //  console.log(dob) 
    //  console.log(today)
     if(dob.getTime() > today.getTime()){
        alert('Person with DoB is not born yet!')
        reset()
     }
     else{
     
    if(userinput==null || userinput=='') {  
      document.getElementById("message").innerHTML = "**Choose a date please!";    
      return false;   
    } else {  
      
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    // now calculate the age in years of the user  
    var ageInYears = Math.abs(year - 1970);  

    // get months from date
    var ageInMonths = age_dt.getUTCMonth();

    // get days from date
    var ageInDays = age_dt.getUTCDate();
   
    // get hours from date
    var ageInHours = age_dt.getUTCHours();
   
    // get hours from date
    ageInMinutes = age_dt.getUTCMinutes();

    
    document.getElementById("years").innerHTML ="Years <br>"+ ageInYears;
    document.getElementById("months").innerHTML = "Months <br>"+ageInMonths
    document.getElementById("days").innerHTML = "Days <br>"+ageInDays;
    document.getElementById("hours").innerHTML ="Hours <br>"+ ageInHours;
    document.getElementById("minutes").innerHTML ="Minutes <br>"+ ageInMinutes;
    document.getElementById("seconds").innerHTML ="Seconds <br>00";
   
    
     stopWatch();
     document.getElementById('reset').style.visibility = "visible";
     }
     }
}  

function reset(){
    document.getElementById("DOB").value = "";
    document.getElementById("years").innerHTML ="Years <br>"
    document.getElementById("months").innerHTML = "Months <br>"
    document.getElementById("days").innerHTML = "Days <br>"
    document.getElementById("hours").innerHTML ="Hours <br>"
    document.getElementById("minutes").innerHTML ="Minutes <br>"
    document.getElementById("seconds").innerHTML ="Seconds <br>";
    clearInterval(a);
   
}

function stopWatch(){ 
    a = setInterval(sec,1000)
}

function sec(){
    console.log('sec')
    second++;
    if (second == 60) {
        ageInMinutes++;
        second = 0;
    }
    let minString = ageInMinutes;
    let secString = second;

    if (second < 10) {
        secString = "0" + secString;
    }
document.getElementById("seconds").innerHTML ="Seconds <br>"+ secString;
document.getElementById("minutes").innerHTML ="Minutes <br>"+ minString;

}