function multiplicaionRusa(){
	var n1,n2, contador=0;
	n1 = document.getElementById('numerico1').value;
	n2 = document.getElementById('numerico2').value;
	while(n1>=1){
		if(n1%2!=0){
			contador=parseInt(contador+n2);
		}
		n1=parseInt(n1/2);
		n2=n2*2;
	}
	document.getElementById('respuesta').innerHTML=contador;
	return false;
}
function verpasoMR(){
	document.getElementById('sssssss').style.display = 'block';
	var n1,n2, contador=0, i=1;
	n1 = document.getElementById('numerico1').value;
	n2 = document.getElementById('numerico2').value
	var ms="-----------------<br>";
	var sn="No";
	while(n1>=1){
		if(n1%2!=0){
			ms+=i+"= Numero 1:"+ parseInt(n1)+"--> numero2: "+parseInt(n2)+ " === SI"+"<br>";
			contador=parseInt(contador+n2);
		}else{
			ms+=i+"= Numero 1:"+ parseInt(n1)+"--> numero2: "+parseInt(n2)+ " === No"+"<br>";
		}
		n1=parseInt(n1/2);
		n2=n2*2;
		i++;
	}
	document.getElementById('section').innerHTML=ms+"El resultado Final es: "+contador;
	return false;
}
function limpiar(){
	document.getElementById('numerico1').value="";
	document.getElementById('numerico2').value="";
	document.getElementById('respuesta').innerHTML="";
}
function botonaceptar(){
	document.getElementById('sssssss').style.display = 'none';
}
var mapa = [0, 0, 0, 0, 0, 0, 0, 0, 0,];
var jugador = 1;
function dibujar(){
	for(i=0; i<9; i++){
		if(mapa[i] == 0) document.getElementById("c"+i).style="background-color: rgba(255,255,255,0)";
		if(mapa[i] == 1) {
			document.getElementById("c"+i).style="background-color: #ffd32a";
	};
	if(mapa[i] == 2) {
		document.getElementById("c"+i).style="background-color: #ff5e57";
	}; 
}
}
var ju1="", ju2="";
function pcelda(celda){
	if (mapa[celda]==0) {
		if (jugador==1){
			mapa[celda]=1;
			jugador=2;
			document.getElementById("respuesta2").innerHTML="El Turno es de "+ju2;
		} else {
			mapa[celda]=2;
			jugador=1; 
			document.getElementById("respuesta2").innerHTML="El Turno es de "+ju1;
		}
	} else {
		window.alert("No puedes pulsar sobre una celda coloreada");
	}
	dibujar();
	var r = ganador();
	switch(r){
		case 0:
		break;
		case 1:
		window.alert("¡Ganó el jugador "+ju1+"!\nCon un tiempo de: 0"+h+":0"+m+":"+s);
		location.reload();

		break;
		case 2:
		window.alert("¡Ganó el jugador "+ju2+"!\nCon un tiempo de: 0"+h+":0"+m+":"+s);
		location.reload();
		break;
		case 3:
		window.alert("¡Empate!\nCon un tiempo de: 0"+h+":0"+m+":"+s);
		location.reload();
		break; 
	}
}
function ganador(){
	var numEspacios=0;
	for(i=0; i<9; i++){
		if(mapa[i] == 0) numEspacios++;
	}
// Las líneas horizontales
if(mapa[0] == mapa[1] && mapa[1] == mapa[2] && mapa[0] !=0) return mapa[0];
if(mapa[3] == mapa[4] && mapa[4] == mapa[5] && mapa[3] !=0) return mapa[3];
if(mapa[6] == mapa[7] && mapa[7] == mapa[8] && mapa[6] !=0) return mapa[6];
//Las líneas verticales
if(mapa[0] == mapa[3] && mapa[3] == mapa[6] && mapa[0] !=0) return mapa[0];
if(mapa[1] == mapa[4] && mapa[4] == mapa[7] && mapa[1] !=0) return mapa[1];
if(mapa[2] == mapa[5] && mapa[5] == mapa[8] && mapa[2] !=0) return mapa[2];
//Las diagonales
if(mapa[0] == mapa[4] && mapa[4] == mapa[8] && mapa[0] !=0) return mapa[0];
if(mapa[2] == mapa[4] && mapa[4] == mapa[6] && mapa[2] !=0) return mapa[2];

if (numEspacios > 0){
	return 0;
} else {
	return 3;
}
}
function mostrareventRaya(){
	var jugador01=document.getElementById("jugador1").value;
	var jugador02=document.getElementById("jugador2").value;
	if(jugador01==""){
		jugador01="Jugador 1";
	}
	if (jugador02=="") {
		jugador02="Jugador 2";
	}
	ju1=jugador01;
	ju2=jugador02;
	document.getElementById('table').style.display = 'inline';
	document.getElementById('empezar').style.display = 'none';
	document.getElementById('nombres').style.display = 'none';
	document.getElementById('ingrezarjugador').style.display = 'none';
	document.getElementById("respuesta2").innerHTML="Comienza el juego "+ju1;
	cronometro();
}
function capturartiempo(){
	clearInterval(timer);
}
var s=0, m=0, h=0;
function cronometro(){
	timer= setInterval(function(){
		document.getElementById("s").innerHTML=(s+1);
		s++;
		if(s==60){
			s=0;
			m++;
		}
		if(s<10){
			document.getElementById("s").innerHTML=("0"+s);
		}if(m<10){
			document.getElementById("m").innerHTML=("0"+m);
		}else{
			document.getElementById("m").innerHTML=(m);
		}
		if(m==60){
			m=0;
			h++;
			document.getElementById("h").innerHTML=(h);
		}if(h<10){
			document.getElementById("h").innerHTML=("0"+h);
		}
	},1000);
}
function reiniciar(){
	s=0;
	h=0;
	m=0;

}
function stop(){
		clearInterval(timer);
		document.getElementById('table').style.display = 'none';
		document.getElementById('empezar').innerHTML = 'Reanudar';
		document.getElementById('empezar').style.display = 'inline';
		document.getElementById('ingrezarjugador').style.display = 'none';
		document.getElementById("respuesta2").innerHTML="Paralizo el juego";

}
function ingresarJugador(){
	document.getElementById('nombres').style.display = 'inline';
	document.getElementById('ingrezarjugador').style.display = 'none';
}