 
 const months = [31,28,31,30,31,30,31,31,30,31,30,31]
 const formElement = document.querySelector(".form")

 formElement.addEventListener("submit", event => {
    event.preventDefault()

    let today =  new Date()
    let inputDate = new Date(document.querySelector(".input").value);

    let birthMonth, birthDate, birthYear ;

    let birthDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth(),
        year: inputDate.getFullYear()
    }


    let currentYear =  today.getFullYear();
    let currentMonth = today.getMonth();
    let currentDate = today.getDate()  
    leapChecker(currentYear)

    if(birthDetails.year > currentYear || (birthDetails.month > currentMonth && birthDetails.year == currentYear) || (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)) {
        alert("Hali tug'ilmagansiz-ku!")
        displayResult("-", "-", "-" ) 
    } 

    birthYear = currentYear - birthDetails.year;

    if(currentMonth >= birthDetails.month) {
        birthMonth = currentMonth - birthDetails.month
    } else {
        birthYear--;
        birthMonth = 12 +  currentMonth - birthDetails.month
    }

    if(currentDate >= birthDetails.date) {
        birthDate = currentDate - birthDetails.date
    } else {
        birthMonth--;
        let days = months[currentMonth - 2];
        birthDate = days  + currentDate - birthDetails.date

        if(birthMonth < 0) {
            birthMonth = 11;
            birthYear--;
        }
    } 



    function leapChecker (year) {
        if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
            months[1] = 29
        } else {
            months[1] = 28
        }
    }

   displayResult(birthDate, birthMonth, birthYear ) 
 })


 

 function displayResult(bDate,bMonth,bYear,bHours, bMinutes) {
     document.querySelector(".days").textContent = bDate
     document.querySelector(".months").textContent = bMonth
     document.querySelector(".years").textContent = bYear 
 }