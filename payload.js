let target = document.getElementById('target');

var tmp = document.createElement("div");
tmp.appendChild(target);
let msg = tmp.innerHTML;
let obj = [];
obj.push(msg)
chrome.runtime.sendMessage(obj);