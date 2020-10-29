window.exportExcel =     function exportExcel() {
	alasql('SELECT * INTO XLSX("myinquires.xlsx",{headers:true}) \
				FROM HTML("#target",{headers:true})');
}