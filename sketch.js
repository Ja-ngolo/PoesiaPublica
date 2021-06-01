// store word objects
var words = [];
//Lista de poemas
var poemas = [
  "País de internacional. ¿País de #soscolombiaddh? País que no para de disfrutar que respira tanto no sabe de ganar pero se pregunta sobre casi País que presiente solo, a diario y se atreve a salir pone un ojo en lejos y con el otro marchar tanto ¿Cómo creer lo que se dice y se contradice? Así va esto.País que eres. País que somos.",
  "País de unos. ¿País de #claudialopez? País que no para de salir que respira mucho no sabe de comer pero se pregunta sobre tampoco País que presiente bastante, a diario y se atreve a haber pone un ojo en medio y con el otro ganar tampoco ¿Cómo creer lo que se dice y se contradice? Así va esto. País que eres. País que somos.",
  "País de asesino. ¿País de #fuerzacolombia?País que no para de viajarque respira nadieno sabe mediopero se pregunta sobre menosPaís que presiente mucho, a diarioy se atreve a haberpone un ojo en ayery con el otro poder nunca¿Cómo creer lo que se dice y se contradice? Así va esto.País que eres.País que somos.",
];

//crear botones para comentarios
var initialInput;
var submitButton;

//Crear boton
let botonOrden;
let botonSiguiente;

function setup() {
  createCanvas(800, 500);
  background(0);

  botonOrden = createButton("Ordenar");
  botonOrden.position(200, 720);
  botonOrden.mouseReleased(ordenar);

  botonSiguiente = createButton("Siguiente Twitt->");
  botonSiguiente.position(300, 720);
  botonSiguiente.mouseReleased(siguiente);

  initialInput = createInput('nombre');
  initialInput.position(200, 800);
  submitButton = createButton('Enviar');
  submitButton.position(400, 800);
  submitButton.mousePressed(submitComment);
}

function submitComment()
{
  var datos = {
    nombre: initialInput.value()

  } 

  //Acceder a los datos con un ref
  var ref = database.ref('comment');
  
  //mandar datos a la base de datos
  ref.push(datos);        
        
}

function gotData(datos)
{
  //muestra los valores d elos datos que vienen de firebase
  var comment = datos.val();
  console.log(comment);
  //se toman todas las llaves de los datos que vienen de firebase
  //se transforma esa lista de datos en un arreglo
  var keys = Object.keys(comment);
  console.log(keys);

  //var cantidad = keys.length;

  for (var i = 0; i < keys.length ; i++){
    var k = keys[i];
    var comentario = comment[k].nombre;
    console.log(comentario);
  }

}

function errData(err)
{
  console.log('error');
  console.log(err);

}


function draw() {
  background(0);

  for (let i = 0; i < words.length; i++) {
    const word = words[i]; // retrieve word object
    word.update();
    word.display();
  }
}

function ordenar() {
  for (let word of words) word.reset();
}

function siguiente() {
  for (let word of words) word.spread();
  words = [];

  var str = random(poemas);
  const wordsStr = str.split(" ");

  textSize(48);

  // track word position
  let x = 20;
  let y = 60;
  fill(255);
  // iterate over each word
  for (let i = 0; i < wordsStr.length; i++) {
    const wordStr = wordsStr[i]; // get current word
    const wordStrWidth = textWidth(wordStr); // get current word width
    const word = new Word(wordStr, x, y, i);
    words.push(word);
    x = x + wordStrWidth + textWidth(" "); // update x by word width + space character
    // look ahead the next word - will it fit in the space? if not, line break
    const nextWordStrWidth = textWidth(wordsStr[i + 1]) || 0;
    if (x > width - nextWordStrWidth) {
      y += 40; // line height, sort of
      x = 20; // reset x position
    }
  }
  for (let word of words) word.spread(); //Desordena todas las palabras.    
}



class Word {
  constructor(word, x, y, idx) {
    this.word = word;
    this.x = x;
    this.y = y;
    // target position is the same as current position at start
    this.tx = this.x;
    this.ty = this.y;
    // original position
    this.origx = this.x;
    this.origy = this.y;
    this.idx = idx;
    this.fcolor = color(255);
  }

  reset() {
    this.tx = this.origx;
    this.ty = this.origy;
  }

  spread() {
    this.tx = random(width);
    this.ty = random(height);
  }

  update() {
    // move towards the target by 10% each time
    this.x = lerp(this.x, this.tx, 0.1);
    this.y = lerp(this.y, this.ty, 0.1);
  }

  display() {
    fill(this.fcolor);
    noStroke();
    text(this.word, this.x, this.y);
  }
}
