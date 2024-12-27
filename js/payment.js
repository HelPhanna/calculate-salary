function ChangeEvent() {
  //format currency USD(Dollar front:en-US, Dollar behind: de-DE)
  var USDdollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD", //BTH, EUR, RIEL,....
  });

  var payment = prompt("Please input your payment:");
  if (payment != null) {
    document.getElementById("salary").value = USDdollar.format(payment);
  } else {
    alert("Please input your payment again.");
    payment = prompt("Please input your payment again: ");
    document.getElementById("salary").value = USDdollar.format(payment);
  }
}
