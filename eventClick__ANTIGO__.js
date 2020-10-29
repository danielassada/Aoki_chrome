var search_save = {
	"id": "search_save",
	"title": "Search save",
	"contexts": ["selection"]
};
var youtube = {
	"id": "youtube",
	"title": "youtube",
	"contexts": ["selection"]
};
var contextMenuItem = {
	"id": "search",
	"title": "jisho",
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

var voice_JP = {
	"id": "voice",
	"title": "voice_JP",
	"parentId": "reader",
	"contexts": ["selection"]
};

var voice_RU = {
	"id": "voice_RU",
	"title": "voice_RU",
	"parentId": "reader",
	"contexts": ["selection"]
};

var parent = {
	"id": "reader",
	"title": "Reader",
	"contexts": ["selection"]
};

var separator = {
	"id" : "clickme-separator-1",
  	"type" : "separator",
  	"contexts" : ["all"]
}

var separator2 = {
	"id" : "clickme-separator-2",
  	"type" : "separator",
  	"contexts" : ["all"]
}

// var voice_RU = {
// 	"id": "parent",
// 	"title": "parent",
// 	"contexts": ["selection"]
// };

chrome.runtime.onInstalled.addListener(function() {
  /* Add context menu and listener */

chrome.contextMenus.create(youtube);

chrome.contextMenus.create({
  id: "clickme-separator-1",
  type: "separator",
  contexts: ["all"]
});
// leitor item Parent com 2 sub itens
chrome.contextMenus.create(parent);
chrome.contextMenus.create(voice_RU);
chrome.contextMenus.create(voice_JP);


chrome.contextMenus.create({
  id: "clickme-separator-2",
  type: "separator",
  contexts: ["all"]
});

function genericOnClick(){
	console.log("nada");
}
chrome.contextMenus.create(salvardb);
chrome.contextMenus.create(search_save);
chrome.contextMenus.create(salvar_sync);
// var title = "Google Search";
// chrome.contextMenus.create({
//     "title": title,
//     "contexts": contexts,
//     "id": "google"
//   });

chrome.contextMenus.onClicked.addListener(function(clickData){
	if(clickData.menuItemId == "search" && clickData.selectionText){
		var x = clickData.selectionText;
		open("http://jisho.org/search/" + x);
	}
	else if(clickData.menuItemId == "search_save" && clickData.selectionText){
		var x = clickData.selectionText;
		chrome.tabs.create({url: "https://nowhere.000webhostapp.com/tag.php"});
		chrome.tabs.executeScript({
 		code: 'document.getElementById("tag").value="'+ x +'";'
	});
	chrome.tabs.executeScript({
 		code: 'document.getElementById("tagyou").value="'+ x +'";'
	});
	}
	else if(clickData.menuItemId == "youtube" && clickData.selectionText){
		var x = clickData.selectionText;
		window.open("https://www.youtube.com/results?search_query=" + x);
	}
	else if(clickData.menuItemId == "voice" && clickData.selectionText){
		var x = clickData.selectionText;
    	var texto = x.toString();
    	var msg = new SpeechSynthesisUtterance();
    	var voices = window.speechSynthesis.getVoices();
    	msg.voice = voices[11]; // Note: some voices don't support altering params
    	msg.text = texto;
    	msg.lang = 'jp';
    	
    	msg.onend = function(e) {
    	  console.log('Finished in ' + event.elapsedTime + ' seconds.');
    	  console.log(msg.text);
    	};


    	var msg = new SpeechSynthesisUtterance("hello world");
    	msg.lang = 'english';
    	window.speechSynthesis.onvoiceschanged = function() {
		};
		var voices =   window.speechSynthesis.getVoices();
    	msg.voice = voices[0];
    	
    	window.speechSynthesis.speak(msg);

 
    	 var msg = new SpeechSynthesisUtterance("だに");
    	msg.lang = 'jp';
    	window.speechSynthesis.onvoiceschanged = function() {
		 var voices =   window.speechSynthesis.getVoices();
		};
    	msg.voice = voices[11];
    	
    	window.speechSynthesis.speak(msg);
	}
// 	else if(clickData.menuItemId == "voice_RU" && clickData.selectionText){


// 		var x = clickData.selectionText;
//     	var texto = x.toString();

//     	var x = "добрый день";
// 		var synth = window.speechSynthesis;
// 	    var utterThis = new SpeechSynthesisUtterance(x);
// var voices = window.speechSynthesis.getVoices();

//   utterThis.voice = voices[1]; // Note: some voices don't support altering params
//   utterThis.voiceURI = 'Google русский';
//   utterThis.volume = 1; // 0 to 1
//   utterThis.rate = 0.75; // 0.1 to 1
//   utterThis.pitch = 0.6; //0 to 2
//   utterThis.lang = 'ru-RU';
//   utterThis.onend = function(e) {
//     	  console.log('Finished in ' + event.elapsedTime + ' seconds.');
//     	};
//   window.speechSynthesis.speak(utterThis);

//   console.log(utterThis.text);

    	 
// 	}
	else if(clickData.menuItemId == "salvar_sync" && clickData.selectionText){
		    var grupo =[];
    		var x = clickData.selectionText;
    		chrome.storage.sync.get('value', function (result){
    			value = result.value;
    			if (value) {
					for (var i = 0; i < value.length; i++) {
    					grupo.push(value[i]);
					}
				}
			    grupo.push(x);
			    if (!x) {
 			       return;
 			    }
   				 chrome.storage.sync.set({'value': grupo}, function() {
 					 alert('salvo');
    			});
   			});
	}
});

chrome.contextMenus.onClicked.addListener(function(clickData){
	if(clickData.menuItemId == "save_url" ){
	var container = [] ;

	chrome.tabs.getSelected(null, function(tab) {
	s = tab.url;	
	container.push(s);
	
	});	
	

	chrome.tabs.create({url: "https://nowhere.000webhostapp.com/links.php"});
	


	chrome.tabs.getSelected(null, function(tab) {
	var expression = /(http:\/\/|https:\/\/)(.*?)\//gi;
	var regex = new RegExp(expression);
	var url_red = container[0].match(regex);
	var expressionNome = /(?:http:\/\/wwww.|https:\/\/www.|http:\/\/|https:\/\/)(.*?)\./gi;
	var regex2 = new RegExp(expressionNome);
	var na = container[0].split(regex2);
	chrome.tabs.executeScript({
 		code: 'document.getElementById("link").value="'+url_red+'";'
	});
	chrome.tabs.executeScript({
 		code: 'document.getElementById("nome").value="'+na[1]+'";'
	});
	});
}

});

});



// chrome.contextMenus.onClicked.addListener(function(clickData){
// 	if(clickData.menuItemId == "search" && clickData.selectionText){
// 		var x = clickData.selectionText;
// 		open("http://jisho.org/search/" + x);
// 	}
// });

// chrome.contextMenus.onClicked.addListener(function(clickData){
// 	if(clickData.menuItemId == "save" && clickData.selectionText){
// 		var linkArray = ["sas"];

// 			var x = clickData.selectionText;
// 				chrome.tabs.getSelected(null, function(tab) {
// 			    tabId = tab.windowId;
// 			    tabUrl = tab.url;
// 				linkArray.push(tabId);
// 				alert(linkArray);
// 				// chrome.tabs.executeScript({
//    	// 		 code: 'object.addEventListener("load", function(){document.getElementById("link").value='+linkArray[1]+'});'
// 				// 	});
// 				});
				


					    
// 	           	open("https://nowhere.000webhostapp.com/links.php" );
// 				alert(linkArray);
// 				// chrome.tabs.executeScript({
//    			 // code: 'alert("something");'
// 		// });

// }

// });







// chrome.contextMenus.create({
//   id: "clickme",
//   title: "Click me!",
//   contexts: ["all"]
// });

// chrome.contextMenus.create({
//   id: "clickme-radio-1",
//   type: "radio",
//   title: "Choose me - radio 1!",
//   contexts: ["all"],
//   checked: true
// });
