function info() {
	var name 
	var age
	while(name,age != 'stop') {
		name = prompt('Hoe heet je?');	
		document.write("Hallo " + name + '<br>');
		age = prompt('Hoe oud ben je?');
		document.write("Je leeftijd is= " + age + '<br>');
	}

}
info();
