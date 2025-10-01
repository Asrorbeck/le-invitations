function sendTelegram() {
  // Get form values
  var name = document.getElementById("input_8397513689601").value;
  var phone = document.getElementById("input_8397513689602").value;
  var colors = document.getElementById("input_8397513689603").value;
  var sections = document.getElementById("input_1719341035070").value;
  var preferences = document.getElementById("input_1719341181772").value;

  // Replace 'YOUR_BOT_TOKEN' with your actual bot token
  var botToken = "6598795293:AAEEsWQvkUayL51UM1E-CcccMmc1-QttAtk";

  // Replace 'YOUR_CHAT_IDS' with an array of your actual chat IDs
  var chatIds = ["905770018"];

  // Construct the message
  var message = `Name: ${name}\nPhone: ${phone}\nColors: ${colors}\nSections: ${sections}\nPreferences: ${preferences}`;

  // Log the message to console for debugging
  console.log("Sending message:", message);

  // Telegram Bot API endpoint for sending messages
  var apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  // Iterate through each chat ID and send the message
  chatIds.forEach((chatId) => {
    // Construct the data to be sent
    var data = {
      chat_id: chatId,
      text: message,
    };

    // Make a POST request to the Telegram Bot API
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Message sent`);
        // You can handle the response here if needed
      })
      .catch((error) => {
        console.error(`Error sending message:`, error);
      });
  });

  // Show alert
  alert("Your information has been sent!");

  // Clear the form
  document.getElementById("input_8397513689601").value = "";
  document.getElementById("input_8397513689602").value = "";
  document.getElementById("input_8397513689603").value = "";
  document.getElementById("input_1719341035070").value = "";
  document.getElementById("input_1719341181772").value = "";

  // Prevent the form from submitting traditionally
  return false;
}

// Attach the sendTelegram function to the form's submit event
document.getElementById("form766767051").onsubmit = sendTelegram;
