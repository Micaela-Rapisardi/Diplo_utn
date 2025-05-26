const metros = prompt('Ingrese la distancia en metros:', '');
				
		if (metros<= 1000) {
			alert(`Podes ir a pie!`);
		} else if (metros>1000 && metros<10000) {
			alert(`Podes ir en bicicleta!`);
        } else if (metros>10000 && metros<30000) {
			alert(`Tomate colectivo!`);
        } else if (metros>30000 && metros<100000) {
			alert(`Te conviene ir en auto!`);
		} else {
			alert(`Andá en avion!`);
		}
