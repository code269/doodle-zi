const date = new Date();

const timeNow = date.toLocaleTimeString(); // Current time according to user machine

//Getting full date format
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();
const currentDate = date.getDate();

//Real-time Day of Week
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const currentDay = date.getDay();

const todaysDayOfWeek = daysOfWeek[currentDay];

//Creating real-time greeting
const now = date.getHours();
let greet = "";

if (now < 12) {
  greet = "Good Morning, ";
} else if (now < 18) {
  greet = "Good Afternoon, ";
} else {
  greet = "Good Evening, ";
}

const greetingDate = currentMonth + "/" + currentDate + "/" + currentYear;

export { timeNow, greetingDate, greet, todaysDayOfWeek };
