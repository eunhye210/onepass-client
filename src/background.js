chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  chrome.tabs.sendMessage(tabId, { type: "TAB", currentUrl: tab.url });
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, function (tab) {
    chrome.tabs.sendMessage(activeInfo.tabId, { type: "TAB", currentUrl: tab.url });
  });
});
