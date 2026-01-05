chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "VERIFY_IMAGE") {
    alert("Image URL captured:\n\n" + message.imageUrl);
  }
});
