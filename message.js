console.log('external script');
var selectedText = info.selectionText;
chrome.runtime.sendMessage(selectedText);
console.log(selectedText);