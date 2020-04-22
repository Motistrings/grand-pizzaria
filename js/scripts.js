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
