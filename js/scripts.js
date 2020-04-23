function Pizza(size, crust) {
  this.size = size;
  this.crust = crust;
  this.toppings = [];
}
function sendMessage() {
  var name = $("#NAME").val();
  var email = $("#EMAIL").val();
  var message = $("#MESSAGE").val();
  if (name !== "" && email !== "" && message !== "") {
    alert(
      "Hey " +
        name +
        "! Thankyou,your message is being reviewed. Check your email for our feedback soon."
    );
  }
}
