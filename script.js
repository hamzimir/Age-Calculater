
// Reference elements
let userInput = document.getElementById("date");
let result = document.getElementById("result");

// Set max date to today
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    // Get the birthdate from the input
    let birthDate = new Date(userInput.value);

    if (isNaN(birthDate.getTime())) {
        result.innerHTML = "Please select a valid date.";
        return;
    }

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;
    
    // Calculate the year difference
    y3 = y2 - y1;

    // Adjust month and year if necessary
    if (m2 < m1 || (m2 === m1 && d2 < d1)) {
        y3--;  // Subtract 1 year if the current month/day is before the birth month/day
    }

    // Calculate the month difference
    m3 = m2 - m1;
    if (m3 < 0) {
        m3 += 12;
    }

    // Calculate the day difference
    if (d2 < d1) {
        m3--;  // Adjust the month if current day is less than birth day
        d3 = getDaysInMonth(y2, m2 - 1) + d2 - d1;  // Adjust day by getting days from previous month
    } else {
        d3 = d2 - d1;
    }

    // Output the result
    result.innerHTML = `You are <span>${y3}</span> years <span>${m3}</span> months <span>${d3}</span> days old`;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
