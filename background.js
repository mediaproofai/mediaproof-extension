chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "mediaproof-verify",
    title: "Verify with Mediaproof",
    contexts: ["image"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "mediaproof-verify") {
    console.log("Image URL:", info.srcUrl);
  }
});
