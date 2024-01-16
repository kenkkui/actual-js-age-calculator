// Current Date
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();
currentTimeHTML();

// Inputs
const dayInput = document.querySelector('.js-day-input');
const monthInput = document.querySelector('.js-month-input');
const yearInput = document.querySelector('.js-year-input');

// Calculations
const year = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//errors
const errorDay = document.querySelector('.js-day-error');
const errorMonth = document.querySelector('.js-month-error')
const errorYear = document.querySelector('.js-year-error')



//Outputs
const dayOutput = document.querySelector('.js-day-output');
const monthOutput = document.querySelector('.js-month-output');
const yearOutput = document.querySelector('.js-year-output');

function checkError() {
  // Day
  if (dayInput.value === '') {
    errorDay.innerHTML = 'This field is required';
    yearOutput.innerHTML = `-- `;
    monthOutput.innerHTML = `-- `;
    dayOutput.innerHTML = `-- `;

  } else if (dayInput.value <= 31 && dayInput.value >= 0) {
    errorDay.innerHTML = '';
  } else {
    errorDay.innerHTML = 'Must be a valid day'
    yearOutput.innerHTML = `-- `;
    monthOutput.innerHTML = `-- `;
    dayOutput.innerHTML = `-- `;

  }

  // Month
  if (monthInput.value === '') {
    errorMonth.innerHTML = 'This field is required';
    yearOutput.innerHTML = `-- `;
    monthOutput.innerHTML = `-- `;
    dayOutput.innerHTML = `-- `;

  } else if (monthInput.value <= 12 && monthInput.value >= 0) {
    errorMonth.innerHTML = '';
  } else {
    errorMonth.innerHTML = 'Must be a valid month'
    yearOutput.innerHTML = `-- `;
    monthOutput.innerHTML = `-- `;
    dayOutput.innerHTML = `-- `;

  }

  // Year
  if (yearInput.value === '') {
    errorYear.innerHTML = 'This field is required';
    yearOutput.innerHTML = `-- `;
    monthOutput.innerHTML = `-- `;
    dayOutput.innerHTML = `-- `;

  } else if (yearInput.value < currentYear) {
    errorYear.innerHTML = '';
  } else if (yearInput.value > currentYear) {
    errorYear.innerHTML = 'Must be in the past'
    yearOutput.innerHTML = `-- `;
    monthOutput.innerHTML = `-- `;
    dayOutput.innerHTML = `-- `;

  }
};

function calculate() {
  // Input date 
  let yearInputDays = 0;
  let yearCurrentDays = 0;
  let daysInNormYear = 0;
  for (let i = 0; i < year.length; i++) {
    daysInNormYear += year[i];
  };
  yearInputDays = (yearInput.value * daysInNormYear);

  let monthInDays = 0;
  for (let i = 0; i < year.length && i < monthInput.value - 1; i++) {
     monthInDays += year[i]
  };

  let daysInDays = 0;
  daysInDays += parseInt(dayInput.value);

  const inputDate = parseInt(yearInputDays + monthInDays + daysInDays);
  console.log(inputDate)


  //Current date
  yearCurrentDays = (currentYear * daysInNormYear);
  

  let currentMonthinDays = 0;
  for (let i = 0; i < year.length && i < currentMonth - 1; i++) {
    currentMonthinDays += year[i];
  }
  
  let currentDaysInDays = 0;
  currentDaysInDays += currentDay;

  const currentDate = yearCurrentDays + currentMonthinDays + currentDaysInDays;
  console.log(currentDate);

  const dateDiff = currentDate - inputDate;
  const yearDiff = Math.floor(dateDiff / 365);
  console.log(`-=${dateDiff}`)
  console.log(`/ 365 =${yearDiff}`)
  
  const yearDiffCalc = yearDiff * 365;
  console.log(yearDiffCalc)  
  let remaindingDays = dateDiff - yearDiffCalc;
  const remaindingDaysNew = dateDiff - yearDiffCalc;
  console.log(remaindingDays)


  let currentMonthOutput = 0;

  for (let i = 0; i < year.length; i++) {
    remaindingDays -= year[i];

    if (remaindingDays < 0) {
      break;
    }

    currentMonthOutput++;
  };


  let testDays = 0;
  for (let i = 0; i < year.length && i < currentMonthOutput; i++) {
    testDays += year[i]
  }
  const dayDiff = remaindingDaysNew - testDays;
  console.log(dayDiff)

  console.log(testDays)

  yearOutput.innerHTML = `${yearDiff} `;
  monthOutput.innerHTML = `${currentMonthOutput} `
  dayOutput.innerHTML = `${dayDiff + leapYearFun(yearDiff)} `
}

function leapYearFun(leapYear) {
  const outputLeapYearCalc = [];
  const leapYearCalc = [4, 100, 400]
  for (let i = 0; i < leapYearCalc.length; i++) {
    const resultCalc = Math.floor(leapYear / leapYearCalc[i]);
    outputLeapYearCalc.push(resultCalc);
  };
  leapYear = outputLeapYearCalc[0] - outputLeapYearCalc[1] + outputLeapYearCalc[2];
  console.log(leapYear)
  return leapYear;
}

function currentTimeHTML() {
  const timeElem = document.querySelector('.js-current-time')

  timeElem
    .innerHTML = `
    <div class="current-time">
      <div class="current">
        <p>Day</p>
        <div class="name-time">${currentDay}</div>
      </div>

      <div class="current">
        <p>month</p>
        <div class="name-time">${currentMonth}</div>
      </div>

      <div class="current">
        <p>Year</p>
        <div class="name-time">${currentYear}</div>
      </div>
    </div>
    `
}