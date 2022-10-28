const date = new Date();
let myBirthday = new Date("2023-01-11")
let momBirthday = new Date("2023-03-04")
let dadBirthday = new Date("2023-10-06")
let newYear = new Date("2023-01-01")
let christmas = new Date("2023-12-25")
let boxingDay = new Date("2023-12-24")
let democracyDay = new Date("2023-06-12")
let childrenDay = new Date("2023-05-27")
let fatherDay = new Date("2023-06-18")
let motherDay = new Date("2023-03-19")
let labourDay = new Date("2023-05-02")
let goodFriday = new Date("2023-04-07")
let easterMonday = new Date("2023-04-10")


function renderCalendar () {

  date.setDate(1);
  
  console.log (date.getDay())
  
  const monthDays= document.querySelector('.days');
  
  const lastDay = new Date(date.getFullYear(),date.getMonth()+1, 0).getDate()
  
  const prevLastDay = new Date(date.getFullYear(),date.getMonth(), 0).getDate()
  
  const firstDayIndex = date.getDay()
  
  const lastDayIndex =  new Date(date.getFullYear(),date.getMonth()+1, 0).getDay()
  
  const nextDays = 7 - lastDayIndex - 1
  
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  document.querySelector('.date h1').innerHTML = months[date.getMonth()];
  
  document.querySelector('.date p').innerHTML = date.toDateString();
  
  let days ="";

  for(let x=firstDayIndex; x>0; x--){
    days += `<div class="prev-date">${prevLastDay-x+1}</div>`
  }
  
  for(let i=1; i<=lastDay; i++){
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()&& date.getFullYear()=== new Date().getFullYear()
    ) {
      days += `<div class="today">${i}</div>`;
    } 
    else if(i=== myBirthday.getDate() && date.getMonth()=== myBirthday.getMonth()){
      days +=`<div class ='birthday'>${i}</div>`
    }
   else if(((i=== momBirthday.getDate() && date.getMonth()=== momBirthday.getMonth()))){
      days +=`<div class ='mombirthday'>${i}</div>`
    }
   else if(i=== dadBirthday.getDate() && date.getMonth()=== dadBirthday.getMonth()){
      days +=`<div class ='dadbirthday'>${i}</div>`
    }
    else if(i=== newYear.getDate() && date.getMonth()=== newYear.getMonth()){
      days +=`<div class ='holiday'>${i}</div>`
    }
    else if(i=== christmas.getDate() && date.getMonth()=== christmas.getMonth()){
      days +=`<div class ='holiday'>${i}</div>`
    }
    else if(i=== boxingDay.getDate() && date.getMonth()=== boxingDay.getMonth()){
      days +=`<div class ='holiday'>${i}</div>`
    }
    else if(i===democracyDay.getDate() && date.getMonth()===democracyDay.getMonth()){
      days +=`<div class ='holiday'>${i}</div>`
    }
    else if(i=== childrenDay.getDate() && date.getMonth()=== childrenDay.getMonth()){
      days +=`<div class ='holiday'>${i}</div>`
    }
    else if(i=== fatherDay.getDate() && date.getMonth()=== fatherDay.getMonth()){
      days +=`<div class ='holiday'>${i}</div>`
    }
    else if(i=== motherDay.getDate() && date.getMonth()=== motherDay.getMonth()){
      days +=`<div class ='holiday'>${i}</div>`
    }
    else if(i=== labourDay.getDate() && date.getMonth()=== labourDay.getMonth()){
      days +=`<div class ='holiday'>${i}</div>`
    }
    else if(i=== goodFriday.getDate() && date.getMonth()=== goodFriday.getMonth()){
      days +=`<div class ='holiday'>${i}</div>`
    }
    else if(i=== easterMonday.getDate() && date.getMonth()=== easterMonday.getMonth()){
      days +=`<div class ='holiday'>${i}</div>`
    }
    else {
      days += `<div>${i}</div>`;
    }
   
    // monthDays.innerHTML=days
  }
  for(j=1; j<=nextDays; j++){
    days += `<div class= "next-date">${j}</div>`
  }
   monthDays.innerHTML = days;
 
}

document.querySelector(".prev").addEventListener("click",() => {
  date.setMonth(date.getMonth()-1);
  renderCalendar();
})

document.querySelector(".next").addEventListener("click",() => {
  date.setMonth(date.getMonth()+1);
  renderCalendar()
})
renderCalendar();
