// store word objects
var words = [];
//Lista de poemas
var info;
var poemas = [];

//crear botones para comentarios
var initialInput;
var submitButton;

//Crear boton
let botonOrden;
let botonSiguiente;

function preload() {
  let archivo = "poemas.json";
  info = loadJSON(archivo);
}

function setup() {
  createCanvas(800, 500);
  background(0);

  for(let i = 0;i<20;i++){
    poemas.push(info.poemas[i].muestra);
  }

  //botonOrden = createButton("Ordenar");
  //botonOrden.position(200, 720);
  //botonOrden.mouseReleased(ordenar);

  //botonSiguiente = createButton("Siguiente Twitt->");
  //botonSiguiente.position(300, 720);
  //botonSiguiente.mouseReleased(siguiente);

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
  //for (let word of words) word.spread();
  words = [];

  var str = random(poemas);
  const wordsStr = str.split(" ");

  const li1 = wordsStr.slice(0, 3);
  const li2 = wordsStr.slice(3, 6);
  const li3 = wordsStr.slice(6, 12);
  const li4 = wordsStr.slice(12, 15);
  const li5 = wordsStr.slice(15, 19);
  const li6 = wordsStr.slice(19, 24);
  const li7 = wordsStr.slice(24, 30);
  const li8 = wordsStr.slice(30, 35);
  const li9 = wordsStr.slice(35, 40);
  const li10 = wordsStr.slice(40, 46);
  const li11 = wordsStr.slice(46, 55);
  const li12 = wordsStr.slice(55, 58);
  const li13 = wordsStr.slice(58, 61);
  const li14 = wordsStr.slice(61, 64);

  //console.log(li6);
  textSize(48);

  // track word position
  let x = 20;
  let y = 60;
  let limX = 400;
  let limY = 900;
  fill(255);
  // iterate over each word
  const reps = 14;
  for (let cadaLinea = 0; cadaLinea <= reps; cadaLinea++) {
    let x = 20;
    let y = 60;
    if (cadaLinea == 0) {
      for (let i = 0; i < li1.length; i++) {
        const palabra = li1[i];
        const wordStrWidth = textWidth(palabra);
        const word = new Word(palabra, x, y, i, limX, limY);
        words.push(word);
        x = x + wordStrWidth + textWidth(" ");
      }
    } else if (cadaLinea == 1) {
      for (let i = 0; i < li2.length; i++) {
        y = 100;
        const palabra = li2[i];
        const wordStrWidth = textWidth(palabra);
        const word = new Word(palabra, x, y, i, limX, limY);
        words.push(word);
        x = x + wordStrWidth + textWidth(" ");
      }
    } else if (cadaLinea == 2) {
      for (let i = 0; i < li3.length; i++) {
        y = 140;
        const palabra = li3[i];
        const wordStrWidth = textWidth(palabra);
        const word = new Word(palabra, x, y, i, limX, limY);
        words.push(word);
        x = x + wordStrWidth + textWidth(" ");
      }
    } else if (cadaLinea == 3) {
      for (let i = 0; i < li4.length; i++) {
        y = 180;
        const palabra = li4[i];
        const wordStrWidth = textWidth(palabra);
        const word = new Word(palabra, x, y, i, limX, limY);
        words.push(word);
        x = x + wordStrWidth + textWidth(" ");
      }
    } else if (cadaLinea == 4) {
      for (let i = 0; i < li5.length; i++) {
        y = 220;
        const palabra = li5[i];
        const wordStrWidth = textWidth(palabra);
        const word = new Word(palabra, x, y, i, limX, limY);
        words.push(word);
        x = x + wordStrWidth + textWidth(" ");
      }
    } else if (cadaLinea == 5) {
      for (let i = 0; i < li6.length; i++) {
        y = 260;
        const palabra = li6[i];
        const wordStrWidth = textWidth(palabra);
        const word = new Word(palabra, x, y, i, limX, limY);
        words.push(word);
        x = x + wordStrWidth + textWidth(" ");
      }
    } else if (cadaLinea == 6) {
      for (let i = 0; i < li7.length; i++) {
        y = 300;
        const palabra = li7[i];
        const wordStrWidth = textWidth(palabra);
        const word = new Word(palabra, x, y, i, limX, limY);
        words.push(word);
        x = x + wordStrWidth + textWidth(" ");
      }
    } else if (cadaLinea == 7) {
      for (let i = 0; i < li8.length; i++) {
        y = 340;
        const palabra = li8[i];
        const wordStrWidth = textWidth(palabra);
        const word = new Word(palabra, x, y, i, limX, limY);
        words.push(word);
        x = x + wordStrWidth + textWidth(" ");
      }
    } else if (cadaLinea == 8) {
      for (let i = 0; i < li9.length; i++) {
        y = 380;
        const palabra = li9[i];
        const wordStrWidth = textWidth(palabra);
        const word = new Word(palabra, x, y, i, limX, limY);
        words.push(word);
        x = x + wordStrWidth + textWidth(" ");
      }
    } else if (cadaLinea == 9) {
      for (let i = 0; i < li10.length; i++) {
        y = 420;
        const palabra = li10[i];
        const wordStrWidth = textWidth(palabra);
        const word = new Word(palabra, x, y, i, limX, limY);
        words.push(word);
        x = x + wordStrWidth + textWidth(" ");
      }
    } else if (cadaLinea == 10) {
      for (let i = 0; i < li11.length; i++) {
        y = 460;
        const palabra = li11[i];
        const wordStrWidth = textWidth(palabra);
        const word = new Word(palabra, x, y, i, limX, limY);
        words.push(word);
        x = x + wordStrWidth + textWidth(" ");
      }
    } else if (cadaLinea == 11) {
      for (let i = 0; i < li12.length; i++) {
        y = 500;
        const palabra = li12[i];
        const wordStrWidth = textWidth(palabra);
        const word = new Word(palabra, x, y, i, limX, limY);
        words.push(word);
        x = x + wordStrWidth + textWidth(" ");
      }
    } else if (cadaLinea == 12) {
      for (let i = 0; i < li13.length; i++) {
        y = 540;
        const palabra = li13[i];
        const wordStrWidth = textWidth(palabra);
        const word = new Word(palabra, x, y, i, limX, limY);
        words.push(word);
        x = x + wordStrWidth + textWidth(" ");
      }
    } else if (cadaLinea == 13) {
      for (let i = 0; i < li14.length; i++) {
        y = 580;
        const palabra = li14[i];
        const wordStrWidth = textWidth(palabra);
        const word = new Word(palabra, x, y, i, limX, limY);
        words.push(word);
        x = x + wordStrWidth + textWidth(" ");
      }
    }
  }
  for (let word of words) word.spread();
}

class Word {
  constructor(word, x, y, idx, lx, ly) {
    this.word = word;
    this.x = x;
    this.y = y;
    this.limX = lx;
    this.limY = ly;
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
    text(this.word, this.x, this.y, this.limX, this.limY);
  }
}




