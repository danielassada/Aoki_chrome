postInput = () => {
	let selectedText = window.getSelection().toString().trim();
	
	if (selectedText.length > 0){
		let message = {
			text : selectedText
		};
		chrome.runtime.sendMessage(message);
	}
}
window.addEventListener('mouseup', postInput)