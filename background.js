var get = {
	"id": "get",
	"title": "pegue",
	"contexts": ["selection"]
};
var youtube = {
	"id": "youtube",
	"title": "youtube",
	"contexts": ["selection"]
};
var search_save = {
	"id": "search_save",
	"title": "Search save",
	"contexts": ["selection"]
};
var salvardb = {
	"id": "save_url",
	"title": "Salvar url",
	"contexts": ["all"]
};
var salvar_sync = {
	"id": "salvar_sync",
	"title": "Salvar",
	"contexts": ["selection"]
};
var jisho = {
	"id": "jisho",
	"title": "jisho",
	"contexts": ["selection"]
};
var separator = {
	"id": "clickme-separator-1",
	"type": "separator",
	"contexts": ["all"]
};
var furi = {
	"id": "furi",
	"title": "furi",
	"contexts": ["selection"]
};

var map = {}; // You could also use an array
onkeydown = onkeyup = function (e) {
	e = e || event; // to deal with IE
	map[e.keyCode] = e.type == 'keydown';
	/* console.log('keydown'); */
	/* console.log('key number =' + map); */


}
console.log('url');
chrome.tabs.getSelected(null, function (tab) {
	let atual = tab.url;
	let expression = /(http:\/\/|https:\/\/)(.*?)\//gi;
	let rx = new RegExp(expression);
	/* let url = container[0].match(rx); */
	/* console.log(atual); */

});
/* for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type.toLowerCase() == 'search') {
        alert(inputs[i].value);
    }
    if(inputs[i].id.toLowerCase() == 'search') {
        alert(inputs[i].value);
    }
} */



// chrome.runtime.onInstalled.addListener(function() {
//   /* Add context menu and listener */

chrome.contextMenus.create(get);
chrome.contextMenus.create(youtube);
chrome.contextMenus.create(jisho);
chrome.contextMenus.create(search_save);
chrome.contextMenus.create(salvardb);
chrome.contextMenus.create(salvar_sync);
chrome.contextMenus.create(furi);

chrome.commands.onCommand.addListener(function (command) {
	console.log('Command:', command);
	chrome.tabs.getSelected(null, function (tab) {
		let atual = tab.url;
		let expression = /(http:\/\/|https:\/\/)(\w*|\x2E)(\x2E)(\w*)/gi;
		let rx = new RegExp(expression);
		let url = atual.match(rx);

		let input
		if (url[0] === "https://www.google") {
			chrome.tabs.executeScript({
				code: 'document.getElementById("lst-ib").focus();'
			});
		} else if (url[0] === "https://www.youtube") {
			chrome.tabs.executeScript({
				code: 'document.getElementById("search").focus();'
			});
		} else if (url[0] === "https://www.twitch") {
			chrome.tabs.executeScript({
				code: 'document.getElementById("nav-search-input").focus();'
			});
		} else if (url[0] === "https://duckduckgo.com") {
			chrome.tabs.executeScript({
				code: 'document.getElementById("search_form_input").focus();'
			});
		}



		let inputs = {};

		for (var i = 0; i < inputs.length; i++) {
			if (inputs[i].type.toLowerCase() == 'search') {
				alert(inputs[i].value);
			}
			if (inputs[i].id.toLowerCase() == 'search') {
				alert(inputs[i].value);
			}
		}

	});
	// switch (command) {
	// case "algum":
	//         alert('dsffsd');
	//    break;
	// }
});
function menuItemGet(info) {
	window.selectedText = info.selectionText;
			
			console.log(selectedText);
			console.log(info.selectionText);
			chrome.windows.create({
				url: "popup.html",
				type: "panel",
				width: 500,
				height: 500
			});
  }

 

chrome.contextMenus.onClicked.addListener((info, tab) => {
	switch (info.menuItemId) {
		case "get":
		
			
			window.selectedText = info.selectionText;
			
			console.log(selectedText);
			console.log(info.selectionText);
			chrome.windows.create({
				url: "popup.html",
				type: "panel",
				width: 500,
				height: 500
			});
			 document.getElementById('text-input').innerHTML = selectedText; 
			break;
		case "youtube":
			var selectedText = info.selectionText;

			var termo = "https://www.youtube.com/results?search_query=" + selectedText;
			var creating = chrome.tabs.create({
				url: termo
			});
			break;
		case "jisho":
			var selectedText = info.selectionText;

			var termo = "http://jisho.org/search/" + selectedText;
			var creating = chrome.tabs.create({
				url: termo
			});
			break;
		case "search_save":
			var selectedText = info.selectionText;

			chrome.tabs.create({
				url: "http://192.168.0.2:8000/search_terms/"
			});
			chrome.tabs.executeScript({
				code: 'document.getElementById("id_google").value="' + selectedText + '";'
			});
			chrome.tabs.executeScript({
				code: 'document.getElementById("id_tube").value="' + selectedText + '";'
			});
			
			break;
		case "save_url":
			var container = [];

			chrome.tabs.getSelected(null, function (tab) {
				s = tab.url;
				container.push(s);
			});

			chrome.tabs.create({
				url: "http://192.168.0.2:8000/link/"
			});

			chrome.tabs.getSelected(null, function (tab) {
				var expression = /(http:\/\/|https:\/\/)(.*?)\//gi;
				var regex = new RegExp(expression);
				var url_red = container[0].match(regex);
				var expressionNome = /(?:http:\/\/wwww.|https:\/\/www.|http:\/\/|https:\/\/)(.*?)\./gi;
				var regex2 = new RegExp(expressionNome);
				var na = container[0].split(regex2);
				chrome.tabs.executeScript({
					code: 'document.getElementById("id_link").value="' + url_red + '";'
				});
				chrome.tabs.executeScript({
					code: 'document.getElementById("id_title").value="' + na[1] + '"'
				});
				chrome.tabs.executeScript({
					code: 'document.getElementById("post").classList.add("clicked");document.getElementById("post_toggle").classList.add("clicked");'
				});
				
			});
			break;
		case "salvar_sync":
			var grupo = [];
			var selectedText = info.selectionText;

			chrome.storage.sync.get('value', function (result) {
				value = result.value;
				if (value) {
					for (var i = 0; i < value.length; i++) {
						grupo.push(value[i]);
					}
				}
				grupo.push(selectedText);
				if (!selectedText) {
					return;
				}
				chrome.storage.sync.set({
					'value': grupo
				}, function () {
					alert(grupo);
				});
			});
			break;
		case "furi":
			var kanji = [];
			var arrayO = [];
			var outros = [];
			var selectedText = info.selectionText;
			var array = selectedText.split("");

			for (var i = 0; i < array.length; i++) {
				var y = array[i].charCodeAt(0);
				console.log(array[i]);
				console.log(y);
				if (y > 13312) {
					kanji.push(array[i]);
				} else if (y > 12000 && y < 13312) {
					arrayO.push(array[i]);
				} else {
					outros.push(array[i]);
				}
			}
			var texto = kanji.join('') + "  ・" + arrayO.join('') + "・  " + outros.join('');
			alert(texto);
			break;
	}
});

window.word = '';

receiver = (request, sender, sendResponse) => {
	word = request.text;
}

chrome.runtime.onMessage.addListener(receiver);



// A|b2.open


chrome.alarms.onAlarm.addListener(function (alarm) {
	console.log(alarm);

	/*var message = JSON.stringify(alarm);*/


	if (alarm.name == '') {
		chrome.notifications.create({
			type: 'basic',
			iconUrl: '128.png',
			title: 'Time !',
			message: '日本語 time',
			buttons: [{
				title: 'Keep learning.'
			}],
			priority: 0
		});

		chrome.notifications.onClicked.addListener(function () {
			window.open("https://www.wanikani.com");
		});
	} else if (alarm.name == 't1') {
		chrome.notifications.create({
			type: 'basic',
			iconUrl: '128.png',
			title: 'Time !',
			message: 'play time',
			buttons: [{
				title: 'stop learning.'
			}],
			priority: 0
		});
	} else {
		chrome.notifications.create({
			type: 'basic',
			iconUrl: '128.png',
			title: 'Time !',
			message: "it's time of something , but i forgeted maybe has important",
			buttons: [{
				title: 'stop learning.'
			}],
			priority: 0
		});
	}
	chrome.browserAction.setBadgeText({
		text: ''
	});
});

chrome.notifications.onButtonClicked.addListener(function () {
	chrome.storage.sync.get(['minutes'], function (item) {
		chrome.browserAction.setBadgeText({
			text: 'ON'
		});
		chrome.alarms.create({
			delayInMinutes: item.minutes
		});
	});
});