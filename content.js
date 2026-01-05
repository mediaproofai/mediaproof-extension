chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "VERIFY_IMAGE") {
    alert("Mediaproof captured image:\n\n" + message.imageUrl);
  }
});
