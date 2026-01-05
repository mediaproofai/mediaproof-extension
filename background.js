chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "verify-image",
    title: "Verify with Mediaproof",
    contexts: ["image"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "verify-image") {
    chrome.tabs.sendMessage(tab.id, {
      type: "VERIFY_IMAGE",
      imageUrl: info.srcUrl
    });
  }
});
