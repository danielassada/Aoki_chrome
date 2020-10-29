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
	"id": "search",
	"title": "jisho",
	"contexts": ["selection"]
};
var separator = {
	"id" : "clickme-separator-1",
  	"type" : "separator",
  	"contexts" : ["all"]
};
var furi = {
	"id": "furi",
	"title": "furi",
	"contexts": ["selection"]
};




// chrome.runtime.onInstalled.addListener(function() {
//   /* Add context menu and listener */

chrome.contextMenus.create(youtube);
chrome.contextMenus.create(jisho);
chrome.contextMenus.create(search_save);
chrome.contextMenus.create(salvardb);
chrome.contextMenus.create(salvar_sync);
chrome.contextMenus.create(furi);



chrome.contextMenus.onClicked.addListener(function(clickData){
	if(clickData.menuItemId == "youtube" && clickData.selectionText){
		var x = clickData.selectionText;
		window.open("https://www.youtube.com/results?search_query=" + x);
	}

	else if(clickData.menuItemId == "search" && clickData.selectionText){
		var x = clickData.selectionText;
		open("http://jisho.org/search/" + x);
	}

	else if(clickData.menuItemId == "search_save" && clickData.selectionText){
		var x = clickData.selectionText;
		chrome.tabs.create({url: "http://localhost:8000/search_terms/"});
		chrome.tabs.executeScript({
 			code: 'document.getElementById("id_google").value="'+ x +'";'
		});
		chrome.tabs.executeScript({
 			code: 'document.getElementById("id_tube").value="'+ x +'";'
		});
	}

	else if(clickData.menuItemId == "save_url" ){
		var container = [] ;

	chrome.tabs.getSelected(null, function(tab) {
		s = tab.url;	
		container.push(s);
		
		});	
		
		chrome.tabs.create({url: "http://localhost:8000/link/"});
		
		chrome.tabs.getSelected(null, function(tab) {
		var expression = /(http:\/\/|https:\/\/)(.*?)\//gi;
		var regex = new RegExp(expression);
		var url_red = container[0].match(regex);
		var expressionNome = /(?:http:\/\/wwww.|https:\/\/www.|http:\/\/|https:\/\/)(.*?)\./gi;
		var regex2 = new RegExp(expressionNome);
		var na = container[0].split(regex2);
		chrome.tabs.executeScript({
 			code: 'document.getElementById("id_link").value="'+url_red+'";'
			});
		chrome.tabs.executeScript({
 				code: 'document.getElementById("id_title").value="'+na[1]+'";'
			});
		});
	}

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
	else if(clickData.menuItemId == "furi" && clickData.selectionText){
    	
    	var kanji= [];
    	var arrayO = [];
    	var outros = [];
    	
    	var x = clickData.selectionText;

    	var array = x.split("");

    	for (var i = 0; i < array.length; i++) {
    		var y = array[i].charCodeAt(0);
    		console.log(array[i]);
    		console.log(y);
    		if ( y > 13312) {
    			kanji.push(array[i]);
    		}
    		else if(y > 12000 && y < 13312){
    			arrayO.push(array[i]);
    		}else{
    			outros.push(array[i]);
    		}
    	}
     var texto = kanji.join('') +"  ・"+arrayO.join('')+"・  "+outros.join('');
     alert(texto);

  
	}

	
	
});

// A|b2.open


