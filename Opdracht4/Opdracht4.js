function tabels() {
	var i;
	var tafel;
	
	
	alert("U dient een getal in te voeren");

	tafel = prompt("Vul het getal in.");
	while (tafel > 10) {
		tafel = prompt("Bereik van getal moet zijn: 1 t/m 10");
	}
	for(var i =1; i < 11;i++ ){
		
	document.write(i + '*' + tafel + '=' + i*tafel + '<br>');
	}
	tabels();
}
tabels();