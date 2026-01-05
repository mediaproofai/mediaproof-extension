chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "mediaproof-verify",
    title: "Verify with Mediaproof",
    contexts: ["image"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "mediaproof-verify") {
    chrome.tabs.sendMessage(tab.id, {
      type: "VERIFY_IMAGE",
      imageUrl: info.srcUrl
    });
  }
});
