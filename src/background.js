chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  chrome.storage.local.set({
    tabURL: tab.url,
  });
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, function (tab) {
    chrome.storage.local.set({
      tabURL: tab.url,
    });
  });
});
