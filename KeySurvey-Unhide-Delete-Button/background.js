function showDeleteButton() {
  var buttons = document.querySelectorAll('button');
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].innerText.match(/delete/gi)) {
      buttons[i].style.display = 'block';
    }
  }
}


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    if (tab.url.match(/survey2\.beyondfeedback\.com\/reportmodule/gi)) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: showDeleteButton
      });
    }
  }
});
