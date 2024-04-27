function sendData() {
  const inputData = document.getElementById("screenNumber").value;

  // Send a POST request to the Flask server
  fetch("http://127.0.0.1:5000/process_data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: inputData }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("output").innerText = "Result: " + data.result;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
