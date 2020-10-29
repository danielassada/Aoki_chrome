function addEventOnElement(element, event) {
	let temp = document.getElementById(element);
	temp.addEventListener("click", event);
}
addEventOnElement("sjs", searchJs);
addEventOnElement("her", searchhere);
addEventOnElement("jap", searchj);
addEventOnElement("you", searchyoutube);
addEventOnElement("sfw", hidding);
addEventOnElement("fon", font);
addEventOnElement("con", contar);
addEventOnElement("h1", h1);
addEventOnElement("h2", h2);
addEventOnElement("save", save);
addEventOnElement("limpar", limpar);
addEventOnElement("exibir", exibir);
addEventOnElement("video", video);
addEventOnElement("dictionary", oxford);
addEventOnElement("clock", clock);
addEventOnElement("alarm", alarm);
addEventOnElement("stop", clearAlarm);
addEventOnElement("view", view_Alarm);
addEventOnElement("t1", t1);
addEventOnElement("you_repeater", you_repeater);
addEventOnElement("save_url", saveAllUrls);
addEventOnElement("antiBlock", antiBlock);
addEventOnElement("romazer", romazer);
addEventOnElement("higazer", higazer);
addEventOnElement("excel", exportToExcel);
addEventOnElement("duck", duckduckgo);

chrome.commands.onCommand.addListener(function(command) {
	console.log('Command:', command);
  });
var map = {}; // You could also use an array
onkeydown = onkeyup = function (e) {
	e = e || event; // to deal with IE
	map[e.keyCode] = e.type == 'keydown';
	switch (true) {
		case (map[17] && map[97]):
			searchj();
			break;
		case (map[17] && map[98]):
			searchyoutube();
			break;
		case (map[17] && map[99]):
			duckduckgo();
			break;
		case (map[17] && map[100]):
			searchhere();
			break;

		default:
			break;
	}
}

function duckduckgo() {
	var x = document.getElementById("text-input").value;
	window.open("https://duckduckgo.com/?q=" + x);
}

function exportToExcel() {
	let element;
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'payload.js'
	});
	chrome.runtime.onMessage.addListener(function (message) {
		let resultato = document.createElement('div');
		resultato.setAttribute('class', 'row');
		resultato.innerHTML = message;
		document.getElementById("result").appendChild(resultato);
		console.log(message);

	});
	let btnE = document.createElement('div');
	btnE.setAttribute('class', 'row');
	btnE.innerHTML = 'alasql(\'SELECT * INTO XLSX("myinquires.xlsx",{headers:true}) \
		FROM HTML("#result",{headers:true})\');';
	document.getElementById("btn2").appendChild(btnE);
	addEventOnElement("toExecel", toExecel);

	function toExecel() {

	}
}

function higazer() {
	let x = document.getElementById("text-input").value;
	x = x.toLowerCase();

	x = x.replace(/kk/g, "っk");
	x = x.replace(/pp/g, "っp");
	x = x.replace(/tt/g, "っt");
	x = x.replace(/ss/g, "っs");
	x = x.replace(/gg/g, "っg");
	x = x.replace(/é/g, "e");
	x = x.replace(/ū/g, "uu");
	x = x.replace(/ō/g, "oう");
	x = x.replace(/n/g, "ん");
	x = x.replace(/tsu/g, "つ");
	x = x.replace(/kya/g, "きゃ");
	x = x.replace(/kyu/g, "きゅ");
	x = x.replace(/kyo/g, "きょ");
	x = x.replace(/んya/g, "にゃ");
	x = x.replace(/んyu/g, "にゅ");
	x = x.replace(/んyo/g, "にょ");
	x = x.replace(/sha/g, "しゃ");
	x = x.replace(/shi/g, "し");
	x = x.replace(/shu/g, "しゅ");
	x = x.replace(/sho/g, "しょ");
	x = x.replace(/chi/g, "ち");
	x = x.replace(/cha/g, "ちゃ");
	x = x.replace(/chu/g, "ちゅ");
	x = x.replace(/cho/g, "ちょ");
	x = x.replace(/hya/g, "ひゃ");
	x = x.replace(/hyu/g, "ひゅ");
	x = x.replace(/hyo/g, "ひょ");
	x = x.replace(/mya/g, "みゃ");
	x = x.replace(/myu/g, "みゅ");
	x = x.replace(/myo/g, "みょ");
	x = x.replace(/rya/g, "りゃ");
	x = x.replace(/ryu/g, "りゅ");
	x = x.replace(/ryo/g, "りょ");
	x = x.replace(/gya/g, "ぎゃ");
	x = x.replace(/gyu/g, "ぎゅ");
	x = x.replace(/gyo/g, "ぎょ");
	x = x.replace(/bya/g, "びゃ");
	x = x.replace(/byu/g, "びゅ");
	x = x.replace(/byo/g, "びょ");
	x = x.replace(/pya/g, "ぴゃ");
	x = x.replace(/pyu/g, "ぴゅ");
	x = x.replace(/pyo/g, "ぴょ");
	x = x.replace(/ja/g, "じゃ");
	x = x.replace(/ju/g, "じゅ");
	x = x.replace(/jo/g, "じょ");
	x = x.replace(/ba/g, "ば");
	x = x.replace(/da/g, "だ");
	x = x.replace(/ga/g, "が");
	x = x.replace(/ha/g, "は");
	x = x.replace(/ka/g, "か");
	x = x.replace(/ma/g, "ま");
	x = x.replace(/んa/g, "な");
	x = x.replace(/pa/g, "ぱ");
	x = x.replace(/ra/g, "ら");
	x = x.replace(/sa/g, "さ");
	x = x.replace(/ta/g, "た");
	x = x.replace(/wa/g, "わ");
	x = x.replace(/ya/g, "や");
	x = x.replace(/za/g, "ざ");
	x = x.replace(/a/g, "あ");
	x = x.replace(/be/g, "べ");
	x = x.replace(/de/g, "で");
	x = x.replace(/ge/g, "げ");
	x = x.replace(/he/g, "へ");
	x = x.replace(/ke/g, "け");
	x = x.replace(/me/g, "め");
	x = x.replace(/んe/g, "ね");
	x = x.replace(/pe/g, "ぺ");
	x = x.replace(/re/g, "れ");
	x = x.replace(/se/g, "せ");
	x = x.replace(/te/g, "て");
	x = x.replace(/we/g, "ゑ");
	x = x.replace(/ze/g, "ぜ");
	x = x.replace(/e/g, "え");
	x = x.replace(/bi/g, "び");
	x = x.replace(/gi/g, "ぎ");
	x = x.replace(/hi/g, "ひ");
	x = x.replace(/ki/g, "き");
	x = x.replace(/mi/g, "み");
	x = x.replace(/んi/g, "に");
	x = x.replace(/pi/g, "ぴ");
	x = x.replace(/ri/g, "り");
	x = x.replace(/wi/g, "ゐ");
	x = x.replace(/ji/g, "じ");
	x = x.replace(/i/g, "い");
	x = x.replace(/bo/g, "ぼ");
	x = x.replace(/do/g, "ど");
	x = x.replace(/go/g, "ご");
	x = x.replace(/ho/g, "ほ");
	x = x.replace(/ko/g, "こ");
	x = x.replace(/mo/g, "も");
	x = x.replace(/んo/g, "の");
	x = x.replace(/po/g, "ぽ");
	x = x.replace(/ro/g, "ろ");
	x = x.replace(/so/g, "そ");
	x = x.replace(/to/g, "と");
	x = x.replace(/wo/g, "を");
	x = x.replace(/yo/g, "よ");
	x = x.replace(/zo/g, "ぞ");
	x = x.replace(/o/g, "お");
	x = x.replace(/bu/g, "ぶ");
	x = x.replace(/gu/g, "ぐ");
	x = x.replace(/fu/g, "ふ");
	x = x.replace(/ku/g, "く");
	x = x.replace(/mu/g, "む");
	x = x.replace(/んu/g, "ぬ");
	x = x.replace(/pu/g, "ぷ");
	x = x.replace(/ru/g, "る");
	x = x.replace(/su/g, "す");
	x = x.replace(/yu/g, "ゆ");
	x = x.replace(/zu/g, "ず");
	x = x.replace(/u/g, "う");
	x = x.replace(/v/g, "ゔ");

	let resultato = document.createElement('div');
	resultato.setAttribute('class', 'row');
	resultato.innerHTML = x;
	document.getElementById("result").appendChild(resultato);
}

function romazer() {
	let x = document.getElementById("text-input").value;
	x = x.toLowerCase();
	x = x.replace(/ん/g, "n");
	x = x.replace(/つ/g, "tsu");
	x = x.replace(/きゃ/g, "kya");
	x = x.replace(/きゅ/g, "kyu");
	x = x.replace(/きょ/g, "kyo");
	x = x.replace(/にゃ/g, "nya");
	x = x.replace(/にゅ/g, "nyu");
	x = x.replace(/にょ/g, "nyo");
	x = x.replace(/しゃ/g, "sha");
	x = x.replace(/し/g, "shi");
	x = x.replace(/しゅ/g, "shu");
	x = x.replace(/しょ/g, "sho");
	x = x.replace(/ち/g, "chi");
	x = x.replace(/ちゃ/g, "cha");
	x = x.replace(/ちゅ/g, "chu");
	x = x.replace(/ちょ/g, "cho");
	x = x.replace(/ひゃ/g, "hya");
	x = x.replace(/ひゅ/g, "hyu");
	x = x.replace(/ひょ/g, "hyo");
	x = x.replace(/みゃ/g, "mya");
	x = x.replace(/みゅ/g, "myu");
	x = x.replace(/みょ/g, "myo");
	x = x.replace(/りゃ/g, "rya");
	x = x.replace(/りゅ/g, "ryu");
	x = x.replace(/りょ/g, "ryo");
	x = x.replace(/ぎゃ/g, "gya");
	x = x.replace(/ぎゅ/g, "gyu");
	x = x.replace(/ぎょ/g, "gyo");
	x = x.replace(/びゃ/g, "bya");
	x = x.replace(/びゅ/g, "byu");
	x = x.replace(/びょ/g, "byo");
	x = x.replace(/ぴゃ/g, "pya");
	x = x.replace(/ぴゅ/g, "pyu");
	x = x.replace(/ぴょ/g, "pyo");
	x = x.replace(/じゃ/g, "ja");
	x = x.replace(/じゅ/g, "ju");
	x = x.replace(/じょ/g, "jo");
	x = x.replace(/ば/g, "ba");
	x = x.replace(/だ/g, "da");
	x = x.replace(/が/g, "ga");
	x = x.replace(/は/g, "ha");
	x = x.replace(/か/g, "ka");
	x = x.replace(/ま/g, "ma");
	x = x.replace(/な/g, "na");
	x = x.replace(/ぱ/g, "pa");
	x = x.replace(/ら/g, "ra");
	x = x.replace(/さ/g, "sa");
	x = x.replace(/た/g, "ta");
	x = x.replace(/わ/g, "wa");
	x = x.replace(/や/g, "ya");
	x = x.replace(/ざ/g, "za");
	x = x.replace(/あ/g, "a");
	x = x.replace(/べ/g, "be");
	x = x.replace(/で/g, "de");
	x = x.replace(/げ/g, "ge");
	x = x.replace(/へ/g, "he");
	x = x.replace(/け/g, "ke");
	x = x.replace(/め/g, "me");
	x = x.replace(/ね/g, "ne");
	x = x.replace(/ぺ/g, "pe");
	x = x.replace(/れ/g, "re");
	x = x.replace(/せ/g, "se");
	x = x.replace(/て/g, "te");
	x = x.replace(/ゑ/g, "we");
	x = x.replace(/ぜ/g, "ze");
	x = x.replace(/え/g, "e");
	x = x.replace(/び/g, "bi");
	x = x.replace(/ぎ/g, "gi");
	x = x.replace(/ひ/g, "hi");
	x = x.replace(/き/g, "ki");
	x = x.replace(/み/g, "mi");
	x = x.replace(/に/g, "ni");
	x = x.replace(/ぴ/g, "pi");
	x = x.replace(/り/g, "ri");
	x = x.replace(/ゐ/g, "wi");
	x = x.replace(/じ/g, "ji");
	x = x.replace(/い/g, "i");
	x = x.replace(/ぼ/g, "bo");
	x = x.replace(/ど/g, "do");
	x = x.replace(/ご/g, "go");
	x = x.replace(/ほ/g, "ho");
	x = x.replace(/こ/g, "ko");
	x = x.replace(/も/g, "mo");
	x = x.replace(/の/g, "no");
	x = x.replace(/ぽ/g, "po");
	x = x.replace(/ろ/g, "ro");
	x = x.replace(/そ/g, "so");
	x = x.replace(/と/g, "to");
	x = x.replace(/を/g, "wo");
	x = x.replace(/よ/g, "yo");
	x = x.replace(/ぞ/g, "zo");
	x = x.replace(/お/g, "o");
	x = x.replace(/ぶ/g, "bu");
	x = x.replace(/ぐ/g, "gu");
	x = x.replace(/ふ/g, "fu");
	x = x.replace(/く/g, "ku");
	x = x.replace(/む/g, "mu");
	x = x.replace(/ぬ/g, "nu");
	x = x.replace(/ぷ/g, "pu");
	x = x.replace(/る/g, "ru");
	x = x.replace(/す/g, "su");
	x = x.replace(/ゆ/g, "yu");
	x = x.replace(/ず/g, "zu");
	x = x.replace(/う/g, "u");
	x = x.replace(/ゔ/g, "v");
	x = x.replace(/ぢ/g, "ji");
	x = x.replace(/づ/g, "zu");
	x = x.replace(/ン/g, "n");
	x = x.replace(/シ/g, "shi");
	x = x.replace(/チ/g, "chi");
	x = x.replace(/ツ/g, "tsu");
	x = x.replace(/キャ/g, "kya");
	x = x.replace(/キュ/g, "kyu");
	x = x.replace(/キョ/g, "kyo");
	x = x.replace(/ニャ/g, "nya");
	x = x.replace(/ニュ/g, "nyu");
	x = x.replace(/ニョ/g, "nyo");
	x = x.replace(/シャ/g, "sha");
	x = x.replace(/シュ/g, "shu");
	x = x.replace(/ショ/g, "sho");
	x = x.replace(/チャ/g, "cha");
	x = x.replace(/チュ/g, "chu");
	x = x.replace(/チョ/g, "cho");
	x = x.replace(/ヒャ/g, "hya");
	x = x.replace(/ヒュ/g, "hyu");
	x = x.replace(/ヒョ/g, "hyo");
	x = x.replace(/ミャ/g, "mya");
	x = x.replace(/ミュ/g, "myu");
	x = x.replace(/ミョ/g, "myo");
	x = x.replace(/リャ/g, "rya");
	x = x.replace(/リュ/g, "ryu");
	x = x.replace(/リョ/g, "ryo");
	x = x.replace(/ギャ/g, "gya");
	x = x.replace(/ギュ/g, "gyu");
	x = x.replace(/ギョ/g, "gyo");
	x = x.replace(/ビャ/g, "bya");
	x = x.replace(/ビュ/g, "byu");
	x = x.replace(/ビョ/g, "byo");
	x = x.replace(/ピャ/g, "pya");
	x = x.replace(/ピュ/g, "pyu");
	x = x.replace(/ピョ/g, "pyo");
	x = x.replace(/ジャ/g, "ja");
	x = x.replace(/ジュ/g, "ju");
	x = x.replace(/ジョ/g, "jo");
	x = x.replace(/バ/g, "ba");
	x = x.replace(/ダ/g, "da");
	x = x.replace(/ガ/g, "ga");
	x = x.replace(/ハ/g, "ha");
	x = x.replace(/カ/g, "ka");
	x = x.replace(/マ/g, "ma");
	x = x.replace(/ナ/g, "na");
	x = x.replace(/パ/g, "pa");
	x = x.replace(/ラ/g, "ra");
	x = x.replace(/サ/g, "sa");
	x = x.replace(/タ/g, "ta");
	x = x.replace(/ワ/g, "wa");
	x = x.replace(/ヤ/g, "ya");
	x = x.replace(/ザ/g, "za");
	x = x.replace(/ア/g, "a");
	x = x.replace(/ベ/g, "be");
	x = x.replace(/デ/g, "de");
	x = x.replace(/ゲ/g, "ge");
	x = x.replace(/ヘ/g, "he");
	x = x.replace(/ケ/g, "ke");
	x = x.replace(/メ/g, "me");
	x = x.replace(/ネ/g, "ne");
	x = x.replace(/ペ/g, "pe");
	x = x.replace(/レ/g, "re");
	x = x.replace(/セ/g, "se");
	x = x.replace(/テ/g, "te");
	x = x.replace(/ヱ/g, "we");
	x = x.replace(/ゼ/g, "ze");
	x = x.replace(/エ/g, "e");
	x = x.replace(/ビ/g, "bi");
	x = x.replace(/ギ/g, "gi");
	x = x.replace(/ヒ/g, "hi");
	x = x.replace(/キ/g, "ki");
	x = x.replace(/ミ/g, "mi");
	x = x.replace(/ニ/g, "ni");
	x = x.replace(/ピ/g, "pi");
	x = x.replace(/リ/g, "ri");
	x = x.replace(/ヰ/g, "wi");
	x = x.replace(/ジ/g, "ji");
	x = x.replace(/イ/g, "i");
	x = x.replace(/ボ/g, "bo");
	x = x.replace(/ド/g, "do");
	x = x.replace(/ゴ/g, "go");
	x = x.replace(/ホ/g, "ho");
	x = x.replace(/コ/g, "ko");
	x = x.replace(/モ/g, "mo");
	x = x.replace(/ノ/g, "no");
	x = x.replace(/ポ/g, "po");
	x = x.replace(/ロ/g, "ro");
	x = x.replace(/ソ/g, "so");
	x = x.replace(/ト/g, "to");
	x = x.replace(/ヲ/g, "wo");
	x = x.replace(/ヨ/g, "yo");
	x = x.replace(/ゾ/g, "zo");
	x = x.replace(/オ/g, "o");
	x = x.replace(/ブ/g, "bu");
	x = x.replace(/グ/g, "gu");
	x = x.replace(/フ/g, "fu");
	x = x.replace(/ク/g, "ku");
	x = x.replace(/ム/g, "mu");
	x = x.replace(/ヌ/g, "nu");
	x = x.replace(/プ/g, "pu");
	x = x.replace(/ル/g, "ru");
	x = x.replace(/ス/g, "su");
	x = x.replace(/ユ/g, "yu");
	x = x.replace(/ズ/g, "zu");
	x = x.replace(/ウ/g, "u");
	x = x.replace(/oo/g, "ō");
	x = x.replace(/ou/g, "ō");
	x = x.replace(/uu/g, "ū");
	x = x.replace(/っk/g, "kk");
	x = x.replace(/っs/g, "ss");
	x = x.replace(/っt/g, "tt");
	x = x.replace(/っn/g, "nn");
	x = x.replace(/っm/g, "mm");
	x = x.replace(/っr/g, "rr");
	x = x.replace(/っg/g, "gg");
	x = x.replace(/っd/g, "dd");
	x = x.replace(/っb/g, "bb");
	x = x.replace(/っp/g, "pp");
	x = x.replace(/っf/g, "ff");
	x = x.replace(/っj/g, "jj");
	x = x.replace(/っ/g, "\!");

	let resultato = document.createElement('div');
	resultato.setAttribute('class', 'row');
	resultato.innerHTML = x;
	document.getElementById("result").appendChild(resultato);

}

function antiBlock() {
	chrome.tabs.executeScript(null, {
			file: "anti_ad.js"
		}

		/* code: 'if(venobox){console.log(venobox);}venobox = () => {alert("venobox");}' */

	);









}
var bgpage = chrome.extension.getBackgroundPage();
var word = bgpage.word;
document.getElementById('text-input').value = word;

function clock() {
	let clock = document.getElementById('clock-container');
	clock.classList.toggle("hide");
}

function alarm() {
	let hour = document.getElementById("hour").value * 60;
	let minute = document.getElementById("minute").value;
	hour = parseInt(hour);
	minute = parseInt(minute);

	let name = document.getElementById('text-input').value;

	let time = parseFloat(hour + minute);

	chrome.browserAction.setBadgeText({
		text: 'ON'
	});
	chrome.alarms.create(name, {
		delayInMinutes: time
	});
	chrome.storage.sync.set({
		time: time
	});
	window.close();
}

function clearAlarm() {
	chrome.browserAction.setBadgeText({
		text: ''
	});
	chrome.alarms.clearAll();
	window.close();
}

function view_Alarm() {
	window.alarms = [];
	chrome.alarms.getAll(function (objAlarms) {
		for (let i = 0; i < objAlarms.length; i++) {
			console.log(objAlarms[i].scheduledTime);
			alarms.push(objAlarms[i].scheduledTime);
		}
		console.log(alarms);

		for (let j = 0; j < alarms.length; j++) {

			let temp = new Date(alarms[j]);
			let hours = temp.getHours();
			// Minutes part from the timestamp
			let minutes = "0" + temp.getMinutes();
			// Seconds part from the timestamp
			let seconds = "0" + temp.getSeconds();

			resultato = document.createElement('div');
			resultato.setAttribute('class', 'row');
			resultato.innerHTML = hours + ":" + minutes + ":" + seconds;
			document.getElementById("result").appendChild(resultato);
		}
	});
}

function t1() {
	chrome.browserAction.setBadgeText({
		text: 'ON'
	});
	chrome.alarms.create('t1', {
		delayInMinutes: 12
	});
	chrome.storage.sync.set({
		time: time
	});
	window.close();
}

function oxford() {
	let x = document.getElementById("text-input").value;
	let complet_url = 'http://localhost:8000/determination/word/' + x;
	chrome.windows.create({
		'url': complet_url,
		'type': 'popup',
		'width': 500,
		'height': 500
	}, function (window) {});
}


function searchj(x) {
	var x = document.getElementById("text-input").value;

	console.log(x.length);

	if (x == undefined || x.length <= 0) {
		alert("Escreva algo");

	} else {
		window.open("http://jisho.org/search/" + x);
	}
}

function searchyoutube() {
	var x = document.getElementById("text-input").value;
	window.open("https://www.youtube.com/results?search_query=" + x);
}

function you_repeater() {
	chrome.tabs.getSelected(null, function (tab) {
		tabId = tab.id;
		tabUrl = tab.url;
		// var tabUrl = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp";
		var expression = /(http:\/\/|https:\/\/)(.*?)\//gi;
		var repeater = "http://listenonrepeat.com/";
		var regex = new RegExp(expression);
		var url_red = tabUrl.replace(regex, repeater);
		window.open(url_red);
	});
}

function hidding(tab) {
	chrome.tabs.executeScript({
		code: 'var x = document.getElementsByTagName("img");var i;for (i = 0; i < x.length; i++) {x[i].style.visibility = "hidden";}'
	});
	chrome.tabs.executeScript({
		code: 'var x = document.getElementsByTagName("a");var i;for (i = 0; i < x.length; i++) {if(document.getElementsByTagName("img"))x[i].style.visibility = "hidden";}'
	});

	chrome.tabs.insertCSS({
		code: 'div{background-image:url("404ou403")}'
	});
}

function font(tab) {
	chrome.tabs.insertCSS({
		code: '*{font-size:25px;font-family:bitter;<link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet">}'
	});
}

function searchhere() {
	var x = document.getElementById("text-input").value;

	chrome.tabs.getSelected(null, function (tab) {
		tabId = tab.id;
		tabUrl = tab.url;
		// var tabUrl = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp";
		var expression = /(http:\/\/|https:\/\/)(.*?)\//gi;
		var regex = new RegExp(expression);
		var url_red = tabUrl.match(regex);

		window.open("https://www.google.com.br/search?q=" + x + "+site%3A" + url_red);
		// /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;<<--URL
	});
}

function searchJs() {
	var x = document.getElementById("text-input").value;

	window.open("https://www.google.com.br/search?q=" + x + "+site%3Ahttps%3A%2F%2Fwww.w3schools.com%2F+OR+site%3Ahttps%3A%2F%2Fdeveloper.mozilla.org");
}

function save() {
	var grupo = [];
	var x = document.getElementById("text-input").value;

	chrome.storage.sync.get('value', function (result) {
		// get storaged and turn into array
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

		// Save it using the Chrome extension storage API.
		chrome.storage.sync.set({
			'value': grupo
		}, function () {
			// Notify that we saved.
			alert('salvo');
		});
	});
	// Check that there's some code there.
}

function limpar() {
	chrome.storage.sync.remove('value', function () {
		alert("limpo");
	});
}

function exibir() {
	chrome.storage.sync.get('value', function (result) {
		value = result.value;
		for (var i = 0; i < value.length; i++) {

			resultato = document.createElement('div');
			resultato.setAttribute('class', 'row');
			resultato.innerHTML = value[i].replace(/,/g, ' 別 ');

			document.getElementById("result")
				.appendChild(resultato);
			// "<div class='row'>"+Things[i]+"</div>"
		}
	});
}



function contar() {
	var x = document.getElementById("text-input").value;
	var node = document.createTextNode(x.length.toString() + " , ");
	document.getElementById("result")
		.appendChild(node);
}

function h1() {
	chrome.tabs.executeScript({
		code: 'var x = document.getElementsByTagName("H1")[0].textContent;alert(x);'
	});
}

function h2() {
	chrome.tabs.executeScript({
		code: 'var x = document.getElementsByTagName("H2")[0].textContent;alert(x);'
	});
}

function video() {
	chrome.tabs.executeScript({
		code: 'var x = document.getElementsByTagName("iframe");for (var i = 0; i < x.length; i++) {alert(x[i].src);console.log(x[i].src)}'
	});
}

function saveAllUrls() {
	chrome.tabs.getAllInWindow(null, function (tab) {
		var selectedText = '';
		for (let i = 0; i < tab.length; i++) {
			selectedText += tab[i].url;
			selectedText += ",";
			console.log(tab[i].url);
		}
		var grupo = [];

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
				alert('salvo');
			});
		});
	});
}