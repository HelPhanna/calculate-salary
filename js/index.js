// console.log("1. My full name is: Hel Phanna");
// console.log("2. I'm come from grou: SU10");
// console.log("3. I am studing with subject: WEB Development");
// console.log("4. I am a student");
// alert("Welcome to my site!");

// Assign values to variables
var studentid = 1;
let studentname = "Veng cheang";
var subject = "Web Based Development I";
var payment = 12000; // Payment value

// Format student ID
var formatid = studentid.toString().padStart(3, "0");

// Format payment as currency
var formattedPayment = new Intl.NumberFormat("eur-DE", {
  style: "currency",
  currency: "EUR",
}).format(payment);
// Output result in console
document.write("1. My personal studentid is: ", formatid, "<br>");
document.write("2. My fullname is: " + studentname, "<br>");
document.write("3. I am studying with subject: ", subject, "<br>");
document.write("4. I will be booking payment: ", formattedPayment, "<br>");

// Output result in console
console.log("1. My personal studentid is: ", formatid);
console.log("2. My fullname is: " + studentname);
console.log("3. I am studying with subject: ", subject);
console.log("4. I will be booking payment: ", formattedPayment);

// Display the result in an alert box
alert(
  "1. My personal studentid is: " +
    formatid +
    "\n" +
    "2. My fullname is: " +
    studentname +
    "\n" +
    "3. I am studying with subject: " +
    subject +
    "\n" +
    "4. I will be booking payment: " +
    formattedPayment
);
