const form = document.getElementById("contactForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  statusText.textContent = "Sending...";

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbwh_4vSWHtQ4gvrZpG3vI_5LU4shR03n7yAYeawB317OogDxPZL8dYkNtPwnWw74ARH2g/exec",
      {
        method: "POST",
        body: JSON.stringify(data)
      }
    );

    statusText.textContent = "Message sent successfully!";
    form.reset();
  } catch (err) {
    statusText.textContent = "Failed to send message.";
  }
});
