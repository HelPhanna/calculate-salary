//Deaclear variables
var studentid = prompt("1. Pleas input your student id: ");
var studentname = prompt("2. Pleas input your fullname: ");
var subjectname = prompt("3. Pleas input your subject: ");
var payment = prompt("4. Pleas input your payment: ");
//format student id
var formatid = studentid.toString().padStart(3, "0");
//format currency
var USDdollor = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
});
//Output results on console html
console.log("My personal student id: ", formatid);
console.log("My full name is: ", studentname);
console.log("I am studying with subject: ", subjectname);
console.log("My payment: ", USDdollor.format(payment));
//Output results on console html
document.write("My personal student id: ", formatid, "<br>");
document.write("My full name is: ", studentname, "<br>");
document.write("I am studying with subject: ", subjectname, "<br>");
document.write("I will booking payment: ", USDdollor.format(payment));
//alert
alert(
  "1. My personal studentid is : " +
    studentid +
    "\n" +
    "2. My full name is :" +
    studentname +
    "\n" +
    "3. I am studying with subject :" +
    subjectname +
    "\n" +
    "4. I will booking payment : " +
    USDdollor.format(payment)
);
