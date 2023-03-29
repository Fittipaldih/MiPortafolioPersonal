/* Animacion para el selector de modo claro - oscuro */
const btnSwitch = document.querySelector('#switch');
// Comprobar si hay un valor almacenado en el LocalStorage para la clase 'dark'
if(localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark');
  btnSwitch.classList.add('active');
}
btnSwitch.addEventListener('click', () => {
  // Alternar la clase 'dark' en el body
  document.body.classList.toggle('dark');
  btnSwitch.classList.toggle('active');
  // Almacenar el valor de la clase 'dark' en el LocalStorage
  if(document.body.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'true');
  } else {
    localStorage.setItem('darkMode', 'false');
  }
});
/* Animacion typed para el titulo Hola soy hernan...*/
const typed = new Typed('.typed', {
	stringsElement: '#titulo-tipeado', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 65, // Velocidad en mlisegundos para poner una letra,
	startDelay: 0, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 65, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings, que se borre y vuelva a iniciar
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

/* Evento Click en Curriculum (Descargar y abrir el CV-PDF) */
const downloadPdfButton = document.querySelector('#download-pdf');
downloadPdfButton.addEventListener('click', () => {
  const pdfUrl = 'https://fittipaldih.github.io/PortafolioFittipaldi/pdf/FittipaldiHernanCV.pdf';
  const downloadLink = document.createElement('a');
  window.open(pdfUrl, '_blank');
  downloadLink.setAttribute('href', pdfUrl);
  downloadLink.setAttribute('download', 'FittipaldiCV.pdf');
  downloadLink.setAttribute('target', '_blank');
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
});
