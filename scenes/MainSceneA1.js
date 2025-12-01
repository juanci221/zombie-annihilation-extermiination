
// Variable Globales
var totalEnemigos;
var that; // Variable para almacenar 'this'
var player;
var cursors;
let balaHielo;
var isButtonLeftDown = false;
var isButtonRightDown = false;
var isButtonUpDown = false;
var isButtonShootDown;
var enemigos; // Grupo de enemigos
var enemigosA;
var enemigoss;
var monedas;
var visibleArea;
let balaHieloDaño;
var obstaculos; 
var isEnvenenado = false;
var timerEnvenenado;
var playerInvulnerable = false; 
var fuego;
var mapa1;





class MainSceneA1 extends Phaser.Scene {
    constructor() {
        super({ key: 'MainSceneA1' });
        this.player = null;
        this.cursors = null;
        this.monedas = null;
        this.score = totalEnemigos;
        this.scoreText = null;
       
    }

 
 init(data) {
    if (data && data.reset) {
      this.score = totalEnemigos;
   
    }}

    preload()  {


  this.scale.scaleMode = Phaser.Scale.SHOW_ALL;
  this.scale.pageAlignHorizontally = true;
  this.scale.pageAlignVertically = true;
   
  

   this.load.image('n10', 'tiled/n10.png');
   this.load.image('n11', 'tiled/n11.png');
   this.load.image('n12', 'tiled/n12.png');
   this.load.image('n13', 'tiled/n13.png');
   
   
   this.load.image('moneda', 'imag/derbala1.png');


   this.load.image('llenado', 'imag/T14.png');

   this.load.image('pinchos', 'imag/T13.png'); 

      this.load.image('animacionFe', 'imag/fuego3.png'); 
 // Carga la hoja de sprites del gas de veneno
    this.load.spritesheet('animacionVeneno', 'imag/fuego4.png', {
        frameWidth: 100,  // Ancho de un solo frame
        frameHeight: 150 // Alto de un solo frame
    });
    this.load.spritesheet('animacionF', 'imag/fuego2.png', {
        frameWidth: 200,  // Ancho de un solo frame
        frameHeight: 400 // Alto de un solo frame
    });
   
 this.load.spritesheet('vida', 'imag/derbala2.png', {
        frameWidth: 100,  // Ancho de un solo frame
        frameHeight: 100 // Alto de un solo frame
    });


  this.load.spritesheet('explosion_zombie', 'Zexp2.png', {
        frameWidth: 200, // Ajusta el ancho de un solo frame
        frameHeight: 200 // Ajusta la altura de un solo frame
    });

 this.load.spritesheet('explosion_p', 'imag/explP.png', {
        frameWidth: 200, // Ajusta el ancho de un solo frame
        frameHeight: 200 // Ajusta la altura de un solo frame
    });


   this.load.tilemapTiledJSON('mapa1','assets/mapas/n1level1.json');

   this.load.spritesheet('dude', 'imag/playerC231.png', { frameWidth: 120, frameHeight: 130 });
   this.load.spritesheet('enemiG', 'imag/ZNu.png', { frameWidth: 200, frameHeight: 200 });
   this.load.spritesheet('enemiG1', 'imag/ZNu1.png', { frameWidth: 200, frameHeight: 200 });
   this.load.spritesheet('enemiG2', 'imag/ZNu2.png', { frameWidth: 200, frameHeight: 200 });
   this.load.spritesheet('enemiG3', 'imag/ZNu3.png', { frameWidth: 200, frameHeight: 200 });
   this.load.spritesheet('enemiG4', 'imag/ZNu4.png', { frameWidth: 200, frameHeight: 200 });
   this.load.spritesheet('enemiG5', 'imag/ZNu6.png', { frameWidth: 200, frameHeight: 200 });
   this.load.spritesheet('enemiG6', 'imag/ZNu5.png', { frameWidth: 200, frameHeight: 200 });
   //enemigos2
   this.load.spritesheet('enemi1', 'imag/9.png', { frameWidth: 100, frameHeight: 120 });
  // this.load.spritesheet('enemi2', 'imag/10.png', { frameWidth: 100, frameHeight: 120 });
   this.load.spritesheet('enemi3', 'imag/11.png', { frameWidth: 100, frameHeight: 120 });
   //this.load.spritesheet('enemi4', 'imag/12.png', { frameWidth: 100, frameHeight: 120 });
   this.load.spritesheet('enemi5', 'imag/8.png', { frameWidth: 100, frameHeight: 120 });
   this.load.spritesheet('enemi8', 'imag/16.png', { frameWidth: 100, frameHeight: 118 });
   this.load.spritesheet('enemi9', 'imag/13.png', { frameWidth: 100, frameHeight: 120 });
   this.load.spritesheet('enemi10', 'imag/6.png', { frameWidth: 100, frameHeight: 120 });
   this.load.spritesheet('enemi11', 'imag/7.png', { frameWidth: 100, frameHeight: 120 });
   this.load.spritesheet('enemi12', 'imag/15.png', { frameWidth: 100, frameHeight: 120 });

   this.load.spritesheet('enemi1a', 'imag/18.png', { frameWidth: 100, frameHeight: 120 });
   this.load.spritesheet('enemi2a', 'imag/19.png', { frameWidth: 100, frameHeight: 120 });
   this.load.spritesheet('enemi3a', 'imag/20.png', { frameWidth: 100, frameHeight: 120 });
   this.load.spritesheet('enemi4a', 'imag/21.png', { frameWidth: 100, frameHeight: 118 });
   this.load.spritesheet('enemi5a', 'imag/22.png', { frameWidth: 100, frameHeight: 118 });
  
   //enemigos 1
   this.load.spritesheet('enemi6', 'imag/4.png', { frameWidth: 100, frameHeight: 120 });
   this.load.spritesheet('enemi6a', 'imag/1.png', { frameWidth: 100, frameHeight: 120 });
   this.load.spritesheet('enemi6b', 'imag/3.png', { frameWidth: 100, frameHeight: 120 });
   this.load.spritesheet('enemi7', 'imag/5.png', { frameWidth: 100, frameHeight: 120 });

  // this.load.spritesheet('E', 'imag/players2.png', { frameWidth: 125, frameHeight: 150 });

   this.load.spritesheet('ataque', 'imag/ataque.png', { frameWidth: 100, frameHeight: 100 });
   this.load.spritesheet('ataque1', 'imag/ataque1.png', { frameWidth: 100, frameHeight: 100 });
   this.load.spritesheet('bala', 'imag/bala11.png', { frameWidth: 100, frameHeight: 120 });
  
   this.load.image('rain', 'imag/gotasangre2.png');
   this.load.image('sangre', 'imag/gotasangre.png');
   this.load.image('b1', 'imag/b1.png');
   this.load.image('b2', 'imag/b2.png');
   this.load.image('b3', 'imag/b3.png');
   this.load.image('d1', 'imag/b4.png');


 // Verificar si el plugin ya está instalado
  if (!this.plugins.get('rexvirtualjoystickplugin')) {
    // Instalar el plugin solo si no está instalado
    let url = 'js/plugins/rexvirtualjoystickplugin.min.js';
    this.load.plugin('rexvirtualjoystickplugin', url, true);
  }

      // Verificar si el plugin ya está cargado
if (!this.plugins.get('rexVirtualJoystick')) {
  this.load.plugin('rexVirtualJoystick', 'js/plugins/rexvirtualjoystickplugin.min.js', true);
}

    }

   create(){

   // 1. Resetear el estado de invulnerabilidad (¡CRÍTICO!)
playerInvulnerable = false; // o this.playerInvulnerable = false;
  this.startTime = this.time.now;
  that = this; // Almacena 'this' en 'that'
   mapa1 = this.make.tilemap({ key: 'mapa1'});
  const n10 = mapa1.addTilesetImage('n10');
  const n11 = mapa1.addTilesetImage('n11');
  const n12 = mapa1.addTilesetImage('n12');
  const n13 = mapa1.addTilesetImage('n13');

  const layer = mapa1.createLayer("n10", n10);
  const layer1 = mapa1.createLayer("n11", n11);
  const layer2 = mapa1.createLayer("n12", n12);
  const layer3 = mapa1.createLayer("n13", n13);
 
 




const mapWidth = mapa1.widthInPixels;




this.fogDots = [];

const symbols = ['·', '*', '✦', '✧'];

for (let i = 0; i < 150; i++) {
  const x = Phaser.Math.Between(0, mapWidth);
  const y = Phaser.Math.Between(0, 120);
  const alpha = Phaser.Math.FloatBetween(0.2, 0.5);
  const symbol = Phaser.Utils.Array.GetRandom(symbols);
  const size = Phaser.Math.Between(16, 28);

  const dot = this.add.text(x, y, symbol, {
    fontSize: `${size}px`,
    fill: '#f5bebeff',
    alpha: alpha
  });

  this.fogDots.push(dot);

  this.tweens.add({
    targets: dot,
    alpha: { from: 0.2, to: 1 },
    duration: Phaser.Math.Between(800, 2000),
    yoyo: true,
    repeat: -1,
    ease: 'Sine.easeInOut',
    delay: Phaser.Math.Between(0, 2000)
  });
}

this.time.addEvent({
  delay: Phaser.Math.Between(6000, 12000),
  loop: true,
  callback: () => {
    const startX = Phaser.Math.Between(0, mapWidth);
    const startY = Phaser.Math.Between(0, 100);

    const comet = this.add.text(startX, startY, '✦', {
      fontSize: '48px',
      fill: '#f7746bff',
      alpha: 1
    });

    this.tweens.add({
      targets: comet,
      x: startX + Phaser.Math.Between(300, 600),
      y: startY + Phaser.Math.Between(80, 150),
      alpha: 0,
      duration: 1200,
      ease: 'Expo.easeOut',
      onComplete: () => comet.destroy()
    });

    const trail = this.add.text(startX, startY, '✦', {
      fontSize: '48px',
      fill: '#991814ff',
      alpha: 0.3
    });

    this.tweens.add({
      targets: trail,
      x: startX + Phaser.Math.Between(300, 600),
      y: startY + Phaser.Math.Between(80, 150),
      alpha: 0,
      duration: 1400,
      ease: 'Expo.easeOut',
      onComplete: () => trail.destroy()
    });
  }
});

const constellation = [
  { x: 300, y: 80 },
  { x: 320, y: 90 },
  { x: 340, y: 85 },
  { x: 360, y: 95 }
];

constellation.forEach(pos => {
  const star = this.add.text(pos.x, pos.y, '✧', {
    fontSize: '24px',
    fill: '#4b0c0cff',
    alpha: 0.8
  });

  this.tweens.add({
    targets: star,
    alpha: { from: 0.5, to: 1 },
    duration: 1500,
    yoyo: true,
    repeat: -1,
    ease: 'Sine.easeInOut'
  });
});



const fogOverlay = this.add.graphics();
//fogOverlay.fillStyle(0xff0000, 0.2); // Rojo con 20% de opacidad
fogOverlay.fillStyle(0xffffff, 0.1);

fogOverlay.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height);
fogOverlay.setScrollFactor(0);






 
  
  
this.sound.stopAll(); 


  
 
   visibleArea = this.cameras.main.worldView;
// 1. Rota la cámara 180 grados para voltear el mapa1 completo




// Obtener y reproducir la música de fondo
    const musicaDeFondo = this.sound.add('fa', {volume: 0.5, loop: true });
    musicaDeFondo.play();



  // Añade el texto para el tiempo
  this.timeText = this.add.text(80, 30, 'Time: 0s', {
    fontSize: '34px',
    fill: '#f3eeeeff',   // Color rojo para resaltar
    stroke: '#000000', // Agrega un borde negro
    strokeThickness: 4 // Grosor del borde aumentado
    
});
this.timeText.setScrollFactor(0);
   this.scoreText = this.add.text(80, 60,'Zombie Kill Count: 0', { 
    fontSize: '38px', fill: '#00ff00',stroke: '#000000', strokeThickness: 4  }); 
   this.scoreText.setScrollFactor(0);

   this.physics.world.setBounds(0, 0, mapa1.widthInPixels, mapa1.heightInPixels);


 



   
// Crear barra de salud como HUD fijo
this.healthBar = this.add.graphics();
this.healthBar.setScrollFactor(0); // Fija en pantalla

// Posición y tamaño
const barX = 90;
const barY = 122;
const barWidth = 250;
const barHeight = 18;

// Dibuja fondo rojo
this.healthBar.fillStyle(0xff0000);
this.healthBar.fillRect(barX, barY, barWidth, barHeight);







  // Crear jugador
  
  player = this.physics.add.sprite(100 , 200, 'dude');
  player.setScale(0.9);
  player.setCollideWorldBounds(true);
  // Inicializa la salud del jugador
player.salud = 100;
player.barraSalud = this.add.graphics();
player.barraSalud.setScale(0.7);
player.setDepth(2);

this.sonidoPlayer = this.sound.add('up',{volume: 0.8});

// Dibuja salud verde (proporcional)
const clampedHealth = Phaser.Math.Clamp(player.salud, 0, 100);
const healthWidth = clampedHealth * (barWidth / 100);
this.healthBar.fillRect(barX, barY, healthWidth, barHeight);



// Texto de salud encima de la barra
player.textoSalud = this.add.text(barX, barY - 24, 'Health ' + player.salud, {
  fontSize: '20px',
  fill: '#f1ececff',
  stroke: '#080808ff',
  strokeThickness: 2
}).setScrollFactor(0);



  // Configurar la cámara para seguir al jugador
  this.cameras.main.setBounds(0, 0, mapa1.widthInPixels, mapa1.heightInPixels);
  this.cameras.main.startFollow(player);
  

  if (!this.anims.exists('player_left')) {
    this.anims.create({
      key: 'player_left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1
    });
  }
  
// Para 'player_turn'
if (!this.anims.exists('player_turn')) {
  this.anims.create({
    key: 'player_turn',
    frames: [
     
      { key: 'dude', frame: 8 },
     
  
    ],
    frameRate: 10,
    repeat: -1 // Esto hace que la animación se repita indefinidamente
  });
}


   if (!this.anims.exists('player_right')) {
    this.anims.create({
      key: 'player_right',
      frames: this.anims.generateFrameNumbers('dude', { start: 8, end: 15 }),
      frameRate: 10,
      repeat: -1
    });
  }


  if (!this.anims.exists('player_up')) {
   
    this.anims.create({
      key: 'player_up',
      frames: this.anims.generateFrameNumbers('dude', { start: 16, end: 24}), 
      frameRate: 10,
      repeat: -1,
  
   });
  }
  
  this.anims.create({
        key: 'explosion_p',
        frames: this.anims.generateFrameNumbers('explosion_p', { start: 0, end: 9 }), // Ajusta el 'end' al número correcto de frames
        frameRate: 20, // Velocidad de la animación (ajusta a tu gusto)
        repeat: -1, // No se repite (se ejecuta una sola vez)
    });


 cursors = this.input.keyboard.createCursorKeys();
 this.keyZero = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ZERO);






 monedas = this.physics.add.group({
key: 'vida',
repeat:4,
setXY :{ x:300, y: 100, stepX: 790}


 });
const sonidoMoneda = this.sound.add('moneda');
 // Define la animación (solo una vez)
 if (!this.anims.exists('girar')) {
    this.anims.create({
        key: 'girar',
        frames: this.anims.generateFrameNumbers('vida', { start: 0, end: 9 }), // Ajusta los frames según tu spritesheet
        frameRate: 20,  // Velocidad de la animación (10 cuadros por segundo)
        repeat: -1      // -1 para que se repita en un bucle infinito
    });
  }
 

// Establece la escala para todas las monedas
monedas.children.iterate(function (moneda) {
  moneda.setScale(0.7); // Cambia este valor al que necesites
  moneda.play('girar');
});





// En la función create():{
fuego = this.physics.add.staticGroup({
key: 'animacionFe',
repeat:6,
setXY :{ x:850, y: 550, stepX: 850},

   }); // O un grupo normal si quieres que se muevan

// Añade un obstáculo en una posición específica
let fuegos = fuego.create(2300, 240, 'animacionFe');
 fuegos.setScale(0.8); 
 fuegos.setDepth(3);
// Haz que sea un objeto estático para que no se mueva con colisiones
fuegos.setImmovable(true); 





    // Define la animación (solo una vez)
    if (!this.anims.exists('gasFuego')) {
    this.anims.create({
        key: 'gasFuego',
        frames: this.anims.generateFrameNumbers('animacionF', { start: 0, end: 9 }), // Ajusta los frames según tu spritesheet
        frameRate: 10,  // Velocidad de la animación (10 cuadros por segundo)
        repeat: -1      // -1 para que se repita en un bucle infinito
    });
  }

    // Iteramos a través de cada obstáculo en el grupo y le añadimos su propia animación
fuego.children.entries.forEach(function (fuego1) {
    // Crea el sprite de la animación del gas en la misma posición que el obstáculo
    let animacionFue = this.add.sprite(fuego1.x, fuego1.y, 'animacionF');

 // Ajustamos la transparencia y la escala aquí
    animacionFue.setAlpha(0.8); // Más transparente, valor entre 0 (invisible) y 1 (opaco)
    animacionFue.setScale(0.8);  // Más grande, valor mayor a 1
    animacionFue.setDepth(3);
    // Reproduce la animación
    animacionFue.play('gasFuego');
}, this);





// En la función create():{
obstaculos = this.physics.add.staticGroup({
key: 'pinchos',
repeat:6,
setXY :{ x:420, y: 300, stepX: 850}

   }); // O un grupo normal si quieres que se muevan

// Añade un obstáculo en una posición específica
let pinchos = obstaculos.create(600, 650, 'pinchos');

// Haz que sea un objeto estático para que no se mueva con colisiones
pinchos.setImmovable(true); 





    // Define la animación (solo una vez)
    if (!this.anims.exists('gasVeneno')) {
    this.anims.create({
        key: 'gasVeneno',
        frames: this.anims.generateFrameNumbers('animacionVeneno', { start: 0, end: 9 }), // Ajusta los frames según tu spritesheet
        frameRate: 10,  // Velocidad de la animación (10 cuadros por segundo)
        repeat: -1      // -1 para que se repita en un bucle infinito
    });
    }

    // Iteramos a través de cada obstáculo en el grupo y le añadimos su propia animación
obstaculos.children.entries.forEach(function (obstaculo) {
    // Crea el sprite de la animación del gas en la misma posición que el obstáculo
    let animacionGas = this.add.sprite(obstaculo.x, obstaculo.y, 'animacionVeneno');
animacionGas.setAlpha(0.9); 
    // Reproduce la animación
    animacionGas.play('gasVeneno');

 // --- NUEVO CÓDIGO AÑADIDO ---
    this.tweens.add({
        targets: animacionGas, // El tween se aplica a cada enemigo recién creado
        tint:0xffff00,    // El color al que cambiará (rojo)
        duration: 1000,     // Duración de la animación en milisegundos
        yoyo: true,        // Hace que la animación se invierta
        repeat: -1,        // Repite el efecto infinitamente
        ease: 'Linear'
    });


}, this);


  

  var datosEnemigo2 = [
    {x: 3200, y: 500, imagen: 'enemi6'},
    {x: 1000, y: 300, imagen: 'enemi6a'},
    {x: 2500, y: 500, imagen: 'enemi6b'},
  
   
   
  ];


   // Crear un grupo de sprites vacío
  enemigoss = this.physics.add.group();

 
  for (var i = 0; i < datosEnemigo2.length; i++) {
    var enemigo2 = this.physics.add.sprite(datosEnemigo2[i].x, datosEnemigo2[i].y, datosEnemigo2[i].imagen);
    enemigo2.setScale(0.9);
    enemigo2.impactos = 0; // Inicializa el conteo de impactos en 0
    enemigo2.salud = 100; // Asigna la salud al enemigo
    enemigo2.setDepth(2);
    enemigoss.add(enemigo2);
   
enemigo2.setTint(0xffff00); // Puedes usar el verde brillante si quieres

this.tweens.add({
    targets: enemigo2,
    alpha: { from: 0.5, to: 1 }, // Los valores de 0.2 a 0.8 son sutiles
    duration: 1000,
    yoyo: true,
    repeat: -1,
    ease: 'Linear'
});
 


  }





 
// enemigos 2
var datosEnemigos = [





  {x: 600, y: 500, imagen: 'enemi1'},
  {x: 900, y: 500, imagen: 'enemi1a'},
  {x: 500, y: 300, imagen: 'enemi2a'},
  {x: 700, y: 500, imagen: 'enemi3'},
  {x: 2500, y: 300, imagen: 'enemi5'},
  {x: 2500, y: 300, imagen: 'enemi12'}, 
  {x: 3700, y: 300, imagen: 'enemi3a'}, 
  {x: 3200, y: 500, imagen: 'enemi8'},
  {x: 3900, y: 500, imagen: 'enemi9'},
  {x: 4000, y: 500, imagen: 'enemi10'},

  {x: 4500, y: 500, imagen: 'enemi11'},
  {x: 3500, y: 500, imagen: 'enemi4a'},

 {x: 4600, y: 500, imagen: 'enemi12'},
  {x: 4700, y: 300, imagen: 'enemi1a'},
  {x: 5000, y: 300, imagen: 'enemi1'},
  {x: 5100, y: 500, imagen: 'enemi2a'},
  {x: 5200, y: 500, imagen: 'enemi3a'},
 
 
];

 
  enemigos = this.physics.add.group();

  
// Crea el sonido que deseas asignar a todos los enemigos
var sonidoEnemigos = this.sound.add('zombi1', { volume: 5 }); // Reemplaza 'zombi' con la clave de tu sonido


for (var i = 0; i < datosEnemigos.length; i++) {
  var enemigo1 = this.physics.add.sprite(datosEnemigos[i].x, datosEnemigos[i].y, datosEnemigos[i].imagen, );
  enemigo1.setScale(0.9);
  enemigo1.setCollideWorldBounds(true);
  enemigo1.impactos = 0; // Inicializa el conteo de impactos en 0
  enemigo1.salud = 100; // Asigna la salud al enemigo
  enemigo1.setDepth(2);
  enemigos.add(enemigo1);
 
// Primero, establece el tinte del enemigo
enemigo1.setTint(0x00ff00); // Puedes usar el verde brillante si quieres

// Luego, anima la transparencia
this.tweens.add({
    targets: enemigo1,
    alpha: { from: 0.5, to: 1 }, // Los valores de 0.2 a 0.8 son sutiles
    duration: 1000,
    yoyo: true,
    repeat: -1,
    ease: 'Linear'
});


}


// Asigna el sonido a todos los enemigos en el grupo
enemigos.getChildren().forEach(enemigo1 => {
  enemigo1.sonido = sonidoEnemigos;
  enemigo1.sonido.play();
});



// enemigos 2
var datosEnemigoA = [


  {x: 3600, y: 500, imagen: 'enemiG'},
  {x: 900, y: 500, imagen: 'enemiG6'},
  {x: 1000, y: 300, imagen: 'enemiG2'},
  {x: 500, y: 300, imagen: 'enemiG3'},
  {x: 2700, y: 500, imagen: 'enemiG4'},
  {x: 1000, y: 500, imagen: 'enemiG5'},

  {x: 1600, y: 500, imagen: 'enemiG6'},
  {x: 1900, y: 500, imagen: 'enemiG1'},
  {x: 2000, y: 300, imagen: 'enemiG2'},
  {x: 1500, y: 300, imagen: 'enemiG3'},
  {x: 1700, y: 500, imagen: 'enemiG4'},
  {x: 3000, y: 500, imagen: 'enemiG5'},

  {x: 3200, y: 200, imagen: 'enemiG6'},
  {x: 3500, y: 200, imagen: 'enemiG1'},
  {x: 3000, y: 200, imagen: 'enemiG5'},

 
];

 
  enemigosA = this.physics.add.group();

  
// Crea el sonido que deseas asignar a todos los enemigos
var sonidoEnemigos = this.sound.add('zombi1', { volume: 5 }); // Reemplaza 'zombi' con la clave de tu sonido


for (var i = 0; i < datosEnemigoA.length; i++) {
  var enemigoX = this.physics.add.sprite(datosEnemigoA[i].x, datosEnemigoA[i].y, datosEnemigoA[i].imagen, );
  enemigoX.setScale(0.6);
  enemigoX.setCollideWorldBounds(true);
  enemigoX.impactos = 0; // Inicializa el conteo de impactos en 0
  enemigoX.salud = 130; // Asigna la salud al enemigo
  enemigoX.setDepth(2);
  enemigosA.add(enemigoX);
 


// Luego, anima la transparencia

    this.tweens.add({
        targets: enemigoX, // El tween se aplica a cada enemigo recién creado
        tint:0x00ffff ,    // El color al que cambiará (rojo)
        duration: 500,     // Duración de la animación en milisegundos
        yoyo: true,        // Hace que la animación se invierta
        repeat: -1,        // Repite el efecto infinitamente
        ease: 'Linear'
    });

}


// Asigna el sonido a todos los enemigos en el grupo
enemigosA.getChildren().forEach(enemigoX => {
  enemigoX.sonido = sonidoEnemigos;
  enemigoX.sonido.play();
});





 

totalEnemigos = enemigoss.countActive(true) + enemigos.countActive(true) + enemigosA.countActive(true); 



crearPisoDeRebote(this, [player, enemigos, enemigoss, enemigosA], {
  y: 770,
  altura: 100,
  color: 0x00ff00,
  fuerzaRebote: -600,
  ondaColor: 0x00ffff,
  ondaDuracion: 400
});



let nivelCompletado = false;

this.time.addEvent({
  delay: 500,
  callback: () => {
    this.checkEnemigos();

    if (totalEnemigos <= 0 && !nivelCompletado) {
      nivelCompletado = true;
      this.scene.start('EndScene', {
        score: this.score,
        currentLevelIndex: 0,
        levelTitle: 'Nivel 1'
      });
    }
  },
  loop: true
});


    this.anims.create({
        key: 'zombie_explosion',
        frames: this.anims.generateFrameNumbers('explosion_zombie', { start: 0, end: 4 }), // Ajusta el 'end' al número correcto de frames
        frameRate: 20, // Velocidad de la animación (ajusta a tu gusto)
        repeat: 0 // No se repite (se ejecuta una sola vez)
    });




if (!this.anims.exists('enemigo_left_walk')) {
  const config1 = this.anims.create({
    key: 'enemigo_left_walk',
    frames: this.anims.generateFrameNumbers('enemiG',{ start: 0, end: 4 }),
    frameRate: 8,
    repeat: -1
  });
 }

 if (!this.anims.exists('enemigo_right_walk')) {
  const config2 = this.anims.create({
  key: 'enemigo_right_walk',
  frames: this.anims.generateFrameNumbers('enemiG',{ start: 5, end: 9 }),
  frameRate: 8,
  repeat: -1
  });
 }
  


if (!this.anims.exists('enemigoG1_left_walk')) {
  const config1 = this.anims.create({
    key: 'enemigoG1_left_walk',
    frames: this.anims.generateFrameNumbers('enemiG1',{ start: 0, end: 4 }),
    frameRate: 8,
    repeat: -1
  });
 }

 if (!this.anims.exists('enemigoG1_right_walk')) {
  const config2 = this.anims.create({
  key: 'enemigoG1_right_walk',
  frames: this.anims.generateFrameNumbers('enemiG1',{ start: 5, end: 9 }),
  frameRate: 8,
  repeat: -1
  });
 }


if (!this.anims.exists('enemigoG2_left_walk')) {
  const config1 = this.anims.create({
    key: 'enemigoG2_left_walk',
    frames: this.anims.generateFrameNumbers('enemiG2',{ start: 0, end: 4 }),
    frameRate: 8,
    repeat: -1
  });
 }

 if (!this.anims.exists('enemigoG2_right_walk')) {
  const config2 = this.anims.create({
  key: 'enemigoG2_right_walk',
  frames: this.anims.generateFrameNumbers('enemiG2',{ start: 5, end: 9 }),
  frameRate: 8,
  repeat: -1
  });
 }


if (!this.anims.exists('enemigoG3_left_walk')) {
  const config1 = this.anims.create({
    key: 'enemigoG3_left_walk',
    frames: this.anims.generateFrameNumbers('enemiG3',{ start: 0, end: 4 }),
    frameRate: 8,
    repeat: -1
  });
 }

 if (!this.anims.exists('enemigoG3_right_walk')) {
  const config2 = this.anims.create({
  key: 'enemigoG3_right_walk',
  frames: this.anims.generateFrameNumbers('enemiG3',{ start: 5, end: 9 }),
  frameRate: 8,
  repeat: -1
  });
 }

if (!this.anims.exists('enemigoG4_left_walk')) {
  const config1 = this.anims.create({
    key: 'enemigoG4_left_walk',
    frames: this.anims.generateFrameNumbers('enemiG4',{ start: 0, end: 4 }),
    frameRate: 8,
    repeat: -1
  });
 }

 if (!this.anims.exists('enemigoG4_right_walk')) {
  const config2 = this.anims.create({
  key: 'enemigoG4_right_walk',
  frames: this.anims.generateFrameNumbers('enemiG4',{ start: 5, end: 9 }),
  frameRate: 8,
  repeat: -1
  });
 }

if (!this.anims.exists('enemigoG5_left_walk')) {
  const config1 = this.anims.create({
    key: 'enemigoG5_left_walk',
    frames: this.anims.generateFrameNumbers('enemiG5',{ start: 0, end: 4 }),
    frameRate: 8,
    repeat: -1
  });
 }

 if (!this.anims.exists('enemigoG5_right_walk')) {
  const config2 = this.anims.create({
  key: 'enemigoG5_right_walk',
  frames: this.anims.generateFrameNumbers('enemiG5',{ start: 5, end: 9 }),
  frameRate: 8,
  repeat: -1
  });
 }


if (!this.anims.exists('enemigoG6_left_walk')) {
  const config1 = this.anims.create({
    key: 'enemigoG6_left_walk',
    frames: this.anims.generateFrameNumbers('enemiG6',{ start: 0, end: 4 }),
    frameRate: 8,
    repeat: -1
  });
 }

 if (!this.anims.exists('enemigoG6_right_walk')) {
  const config2 = this.anims.create({
  key: 'enemigoG6_right_walk',
  frames: this.anims.generateFrameNumbers('enemiG6',{ start: 5, end: 9 }),
  frameRate: 8,
  repeat: -1
  });
 }




 if (!this.anims.exists('enemigo1_left_walk')) {
  const config3 = this.anims.create({
    key: 'enemigo1_left_walk',
    frames: this.anims.generateFrameNumbers('enemi1',{ start: 0, end: 4 }),
    frameRate: 8,
    repeat: -1
  });
 }

 if (!this.anims.exists('enemigo1_right_walk')) {
  const config4 = this.anims.create({
    key: 'enemigo1_right_walk',
    frames: this.anims.generateFrameNumbers('enemi1',{ start: 5, end: 9 }),
    frameRate: 8,
    repeat: -1
  });
 }

 

 if (!this.anims.exists('enemigo3_left_walk')) {
  const config7 = this.anims.create({
    key: 'enemigo3_left_walk',
    frames: this.anims.generateFrameNumbers('enemi3',{ start: 0, end: 4 }),
    frameRate: 8,
    repeat: -1
  });
 }

 if (!this.anims.exists('enemigo3_right_walk')) {
  const config8 = this.anims.create({
    key: 'enemigo3_right_walk',
    frames: this.anims.generateFrameNumbers('enemi3',{ start: 5, end: 9 }),
    frameRate: 8,
    repeat: -1
  });
 }


 

   if (!this.anims.exists('enemigo5_left_walk')) {
      const config11 = this.anims.create({
        key: 'enemigo5_left_walk',
        frames: this.anims.generateFrameNumbers('enemi5',{ start: 0, end: 4 }),
        frameRate: 8,
        repeat: -1
      });
     }

     if (!this.anims.exists('enemigo5_right_walk')) {
      const config12 = this.anims.create({
        key: 'enemigo5_right_walk',
        frames: this.anims.generateFrameNumbers('enemi5',{ start: 5, end: 9 }),
        frameRate: 8,
        repeat: -1
      });
     }

  
     if (!this.anims.exists('enemigo1a_left_walk')) {
      const config26 = this.anims.create({
        key: 'enemigo1a_left_walk',
        frames: this.anims.generateFrameNumbers('enemi1a',{ start: 0, end: 4 }),
        frameRate: 8,
        repeat: -1
      });
     }
    
     if (!this.anims.exists('enemigo1a_right_walk')) {
      const config27 = this.anims.create({
        key: 'enemigo1a_right_walk',
        frames: this.anims.generateFrameNumbers('enemi1a',{ start: 5, end: 9 }),
        frameRate: 8,
        repeat: -1
      });
     }
    
     if (!this.anims.exists('enemigo2a_left_walk')) {
      const config28 = this.anims.create({
        key: 'enemigo2a_left_walk',
        frames: this.anims.generateFrameNumbers('enemi2a',{ start: 0, end: 4 }),
        frameRate: 8,
        repeat: -1
      });
     }
    
     if (!this.anims.exists('enemigo2a_right_walk')) {
      const config28 = this.anims.create({
        key: 'enemigo2a_right_walk',
        frames: this.anims.generateFrameNumbers('enemi2a',{ start: 5, end: 9 }),
        frameRate: 8,
        repeat: -1
      });
     }
    
     if (!this.anims.exists('enemigo3a_left_walk')) {
      const config29 = this.anims.create({
        key: 'enemigo3a_left_walk',
        frames: this.anims.generateFrameNumbers('enemi3a',{ start: 0, end: 4 }),
        frameRate: 8,
        repeat: -1
      });
     }
    
     if (!this.anims.exists('enemigo3a_right_walk')) {
      const config30 = this.anims.create({
        key: 'enemigo3a_right_walk',
        frames: this.anims.generateFrameNumbers('enemi3a',{ start: 5, end: 9 }),
        frameRate: 8,
        repeat: -1
      });
     }
    
    
     if (!this.anims.exists('enemigo4a_left_walk')) {
        const config31 = this.anims.create({
          key: 'enemigo4a_left_walk',
          frames: this.anims.generateFrameNumbers('enemi4a',{ start: 0, end: 4 }),
          frameRate: 8,
          repeat: -1
        });
       }
    
       if (!this.anims.exists('enemigo4a_right_walk')) {
        const config32 = this.anims.create({
          key: 'enemigo4a_right_walk',
          frames: this.anims.generateFrameNumbers('enemi4a',{ start: 5, end: 9 }),
          frameRate: 8,
          repeat: -1
        });
       }
    
       if (!this.anims.exists('enemigo5a_left_walk')) {
          const config33 = this.anims.create({
            key: 'enemigo5a_left_walk',
            frames: this.anims.generateFrameNumbers('enemi5a',{ start: 0, end: 4 }),
            frameRate: 8,
            repeat: -1
          });
         }
    
         if (!this.anims.exists('enemigo5a_right_walk')) {
          const config34 = this.anims.create({
            key: 'enemigo5a_right_walk',
            frames: this.anims.generateFrameNumbers('enemi5a',{ start: 5, end: 9 }),
            frameRate: 8,
            repeat: -1
          });
         }


         if (!this.anims.exists('enemigo9_left_walk')) {
          const config35 = this.anims.create({
            key: 'enemigo9_left_walk',
            frames: this.anims.generateFrameNumbers('enemi9',{ start: 0, end: 4 }),
            frameRate: 8,
            repeat: -1
          });
         }
        
         if (!this.anims.exists('enemigo9_right_walk')) {
          const config36 = this.anims.create({
          key: 'enemigo9_right_walk',
          frames: this.anims.generateFrameNumbers('enemi9',{ start: 5, end: 9 }),
          frameRate: 8,
          repeat: -1
          });
         }


     if (!this.anims.exists('enemigo10_left_walk')) {
      const config15 = this.anims.create({
        key: 'enemigo10_left_walk',
        frames: this.anims.generateFrameNumbers('enemi10',{ start: 0, end: 4 }),
        frameRate: 8,
        repeat: -1
      });}

      if (!this.anims.exists('enemigo10_right_walk')) {
      const config16 = this.anims.create({
        key: 'enemigo10_right_walk',
        frames: this.anims.generateFrameNumbers('enemi10',{ start: 5, end: 9 }),
        frameRate: 8,
        repeat: -1
      });}

   
      if (!this.anims.exists('enemigo11_left_walk')) {
    const config17 = this.anims.create({
      key: 'enemigo11_left_walk',
      frames: this.anims.generateFrameNumbers('enemi11',{ start: 0, end: 4 }),
      frameRate: 8,
      repeat: -1
    });}

    if (!this.anims.exists('enemigo11_right_walk')) {
    const config18 = this.anims.create({
      key: 'enemigo11_right_walk',
      frames: this.anims.generateFrameNumbers('enemi11',{ start: 5, end: 9 }),
      frameRate: 8,
      repeat: -1
    });}

    if (!this.anims.exists('enemigo12_left_walk')) {
 const config19 = this.anims.create({
  key: 'enemigo12_left_walk',
  frames: this.anims.generateFrameNumbers('enemi12',{ start: 0, end: 4 }),
  frameRate: 8,
  repeat: -1
});}

if (!this.anims.exists('enemigo12_right_walk')) {
const config20 = this.anims.create({
  key: 'enemigo12_right_walk',
  frames: this.anims.generateFrameNumbers('enemi12',{ start: 5, end: 9 }),
  frameRate: 8,
  repeat: -1
});}

if (!this.anims.exists('enemigo8_left_walk')) {
 const config21 = this.anims.create({
  key: 'enemigo8_left_walk',
  frames: this.anims.generateFrameNumbers('enemi8',{ start: 0, end: 4 }),
  frameRate: 8,
  repeat: -1
});}

if (!this.anims.exists('enemigo8_right_walk')) {
const config22 = this.anims.create({
  key: 'enemigo8_right_walk',
  frames: this.anims.generateFrameNumbers('enemi8',{ start: 5, end: 9 }),
  frameRate: 8,
  repeat: -1
});}



if (!this.anims.exists('enemigo6_stand')) {
          const config13 = this.anims.create({
            key: 'enemigo6_stand',
            frames: this.anims.generateFrameNumbers('enemi6',{ start: 0, end: 4 }),
            frameRate: 8,
            repeat: -1
          });}


          if (!this.anims.exists('enemigo6a_stand')) {
            const config23 = this.anims.create({
              key: 'enemigo6a_stand',
              frames: this.anims.generateFrameNumbers('enemi6a',{ start: 0, end: 4 }),
              frameRate: 8,
              repeat: -1
            });}
          
            if (!this.anims.exists('enemigo6b_stand')) {
              const config24 = this.anims.create({
                key: 'enemigo6b_stand',
                frames: this.anims.generateFrameNumbers('enemi6b',{ start: 0, end: 4 }),
                frameRate: 8,
                repeat: -1
              });}


          


          if (!this.anims.exists('enemigo7_stand')) {
           const config14 = this.anims.create({
            key: 'enemigo7_stand',
            frames: this.anims.generateFrameNumbers('enemi7',{ start: 5, end: 9 }),
            frameRate: 8,
            repeat: -1
          });}
      



 
          if (!this.anims.exists('bala_hielo_anim')) {
 this.anims.create({
   key: 'bala_hielo_anim',
   frames: this.anims.generateFrameNumbers('bala', { start: 0, end: 7 }),
   frameRate: 10, // Ajusta la velocidad de reproducción según tus necesidades
   repeat: -1 // Reproduce la animación en bucle
 });}




const sonidoArma = this.sound.add('arma', { volume: 1 });

this.input.keyboard.on('keydown-SPACE', () => {
balaHielo = this.physics.add.sprite(player.x, player.y, 'bala'); 




balaHielo.setActive(true).setVisible(true);
balaHielo.setScale(0.9);
balaHielo.anims.play('bala_hielo_anim', true);
this.sound.play('arma', { volume: 1 });

const velocidadBala = 2600;
const direccion = cursors.left.isDown ? -2 : 2;
balaHielo.setVelocityX(velocidadBala * direccion);

 

const onda = this.add.graphics({ x: player.x , y: player.y -40 });
onda.fillStyle(0x00ffff, 0.6); // Color celeste con transparencia
onda.fillCircle(0, 0, 10); // Círculo inicial pequeño

this.tweens.add({
  targets: onda,
  scale: 3,
  alpha: 0,
  duration: 300,
  ease: 'Cubic.easeOut',
  onComplete: () => onda.destroy()
});



this.time.delayedCall(100, () => {
  if (balaHielo && balaHielo.active) balaHielo.destroy();
});

  this.physics.add.collider(balaHielo, enemigoss, this.handleBulletEnemyCollision, null, this);
 

  this.physics.add.collider(balaHielo, enemigos, this.handleBulletEnemyCollision, null, this);
 
  this.physics.add.collider(balaHielo, enemigosA, this.handleBulletEnemyCollision, null, this);
 
});












 // Dentro de la función hitObstaculo
 this.hitObstaculo =(player, obstaculo)=> {
    // Si la salud del jugador es mayor que 0 y no es invulnerable
    if (player.salud > 0 && !playerInvulnerable) {
        // Aplica el daño primero
        player.salud = Math.max(0, player.salud - 5);
        playerInvulnerable = true;

        // Aplica un tinte rojo y lo quita en un solo tween
        this.tweens.add({
            targets: player,
            tint: { from: 0xffffff, to: 0xff0000 }, // Parpadea de blanco a rojo
            duration: 50, // Un parpadeo rápido
            yoyo: true, // Vuelve al color original
            repeat: 2, // Repite 2 veces
            onComplete: () => {
                // Si la salud del jugador es 0 o menos, deja el tinte rojo.
                // De lo contrario, lo limpia.
                if (player.salud > 0) {
                    player.clearTint();
                } else {
                    player.setTint(0xff0000);
                }
            }
        });

        // (El resto de tu código para el texto de daño y el temporizador sigue igual)
        var damageTexto = this.add.text(player.x, player.y, '.', { fontSize: '40px', fill: '#0f8a20ff' });
        this.tweens.add({
            targets: damageTexto,
            alpha: 1,
            y: 50,
            duration: 1000,
            repeat: 1,
            onComplete: () => damageTexto.destroy(),
        });

        this.time.delayedCall(1000, () => {
            playerInvulnerable = false;
        }, [], this);
    }
}

this.physics.add.overlap(player, obstaculos, this.hitObstaculo, null, this);







//suministro
 monedas.children.iterate(child=> {
  child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
 
  
 });




 // condiciones enemigo 1 
 enemigoss.children.iterate(function (ene) {
  if (ene.texture.key === 'enemi6') {
    ene.anims.play('enemigo6_stand', true);
  } else if (ene.texture.key === 'enemi7') {
    ene.anims.play('enemigo7_stand', true);
  } else  if (ene.texture.key === 'enemi6a') {
    ene.anims.play('enemigo6a_stand', true);
  } else if (ene.texture.key === 'enemi6b') {
    ene.anims.play('enemigo6b_stand', true);
  }



  // Agrega más condiciones según sea necesario...
});
 

 // condiciones enemigo 2

   enemigos.children.iterate(function (enemigo1) {
   if (enemigo1.texture.key === 'enemi1') {
      enemigo1.anims.play('enemigo1_right_walk', true);
      enemigo1.anims.play('enemigo1_left_walk', false);
    } 
     else if (enemigo1.texture.key === 'enemi3') {
      enemigo1.anims.play('enemigo3_right_walk', true);
      enemigo1.anims.play('enemigo3_left_walk', false);
    } else if (enemigo1.texture.key === 'enemi5') {
      enemigo1.anims.play('enemigo5_right_walk', true);
      enemigo1.anims.play('enemigo5_left_walk', false);
    }else if (enemigo1.texture.key === 'enemi8') {
      enemigo1.anims.play('enemigo8_right_walk', true);
      enemigo1.anims.play('enemigo8_left_walk', false);
    }else if (enemigo1.texture.key === 'enemi10') {
      enemigo1.anims.play('enemigo10_right_walk', true);
      enemigo1.anims.play('enemigo10_left_walk', false);
    }else if (enemigo1.texture.key === 'enemi11') {
      enemigo1.anims.play('enemigo11_right_walk', true);
      enemigo1.anims.play('enemigo11_left_walk', false);
    }else if (enemigo1.texture.key === 'enemi12') {
      enemigo1.anims.play('enemigo12_right_walk', true);
      enemigo1.anims.play('enemigo12_left_walk', false);
    } else if (enemigo1.texture.key === 'enemi1a') {
      enemigo1.anims.play('enemigo1a_right_walk', true);
      enemigo1.anims.play('enemigo1a_left_walk', false);
    } else if (enemigo1.texture.key === 'enemi2a') {
      enemigo1.anims.play('enemigo2a_right_walk', true);
      enemigo1.anims.play('enemigo2a_left_walk', false);
    } else if (enemigo1.texture.key === 'enemi3a') {
      enemigo1.anims.play('enemigo3a_right_walk', true);
      enemigo1.anims.play('enemigo3a_left_walk', false);
    }else if (enemigo1.texture.key === 'enemi4a') {
      enemigo1.anims.play('enemigo4a_right_walk', true);
      enemigo1.anims.play('enemigo4a_left_walk', false);
    }else if (enemigo1.texture.key === 'enemi5a') {
      enemigo1.anims.play('enemigo5a_right_walk', true);
      enemigo1.anims.play('enemigo5a_left_walk', false);
    }else if (enemigo1.texture.key === 'enemi9') {
      enemigo1.anims.play('enemigo9_right_walk', true);
      enemigo1.anims.play('enemigo9_left_walk', false);
    } 



    // Agrega más condiciones según sea necesario...
  });

 
  enemigosA.children.iterate(function (enemigoX) {
   
     if (enemigoX.texture.key === 'enemiG') {
       enemigoX.anims.play('enemigo_right_walk', false); 
      enemigoX.anims.play('enemigo_left_walk', true);
      }else  if (enemigoX.texture.key === 'enemiG1') {
       enemigoX.anims.play('enemigoG1_right_walk', false); 
      enemigoX.anims.play('enemigoG1_left_walk', true);
      }else  if (enemigoX.texture.key === 'enemiG2') {
       enemigoX.anims.play('enemigoG2_right_walk', false); 
      enemigoX.anims.play('enemigoG2_left_walk', true);
      }else  if (enemigoX.texture.key === 'enemiG3') {
       enemigoX.anims.play('enemigoG3_right_walk', false); 
      enemigoX.anims.play('enemigoG3_left_walk', true);
      }else  if (enemigoX.texture.key === 'enemiG4') {
       enemigoX.anims.play('enemigoG4_right_walk', false); 
      enemigoX.anims.play('enemigoG4_left_walk', true);
      }else  if (enemigoX.texture.key === 'enemiG5') {
       enemigoX.anims.play('enemigoG5_right_walk', false); 
      enemigoX.anims.play('enemigoG5_left_walk', true);
      }else  if (enemigoX.texture.key === 'enemiG6') {
       enemigoX.anims.play('enemigoG6_right_walk', false); 
      enemigoX.anims.play('enemigoG6_left_walk', true);
      }

    
    // Agrega más condiciones según sea necesario...
  });





const aplicarKnockback = (objA, objB, fuerzaX = 500, fuerzaY = 30, pesoB = 0.3) => {
  const direction = objA.x > objB.x ? 1 : -1;

  // Knockback al objeto A (ej: player)
  objA.body.setVelocity(fuerzaX * direction, fuerzaY);

  // Knockback al objeto B (ej: enemigo), más leve
  objB.body.setVelocity(-fuerzaX * pesoB * direction, fuerzaY * 0.5);

  // Separador mínimo si están en la misma posición
  if (objA.x === objB.x) {
    objA.x += 2 * direction;
    objB.x -= 2 * direction;
  }
};


const impactos = (player, enemy0) => {
  if (!player.invulnerable) {
    player.invulnerable = true;
    player.salud -= 3;
     player.setTint(0x800080);

    this.time.addEvent({
      delay: 1000,
      callback: () => {
        restablecerColor(player);
        player.invulnerable = false;
      },
      callbackScope: this
    });
  }

  // Knockback modular
  aplicarKnockback(player, enemy0);

  // Feedback visual: cámara shake
  this.cameras.main.shake(200, 0.01);

  // Texto de daño flotante
  const damageTexto = this.add.text(player.x -20, player.y - 2, '.', {
    fontSize: '50px',
    fill: '#ff0000',
    fontStyle: 'bold'
  });

  this.tweens.add({
    targets: damageTexto,
    y: player.y - 90,   // sube hacia arriba
    alpha: 0,           // se desvanece
    duration: 800,
    ease: 'Power1',
    onComplete: () => damageTexto.destroy()
  });

if (player.salud <= 0) {
  player.setVisible(false);

  // Sprite explosión
  const explosion = this.add.sprite(player.x, player.y, 'explosion_p');
  explosion.setScale(1.2);
  explosion.play('explosion_p');

  // Onda expansiva con Graphics
  const graphics = this.add.graphics({ fillStyle: { color: 0xff0000, alpha: 0.8 } });
  const circle = new Phaser.Geom.Circle(player.x, player.y, 10);
  graphics.fillCircleShape(circle);

  this.tweens.add({
    targets: circle,
    radius: 120,
    duration: 600,
    onUpdate: () => {
      graphics.clear();
      graphics.fillStyle(0xff0000, 0.5);
      graphics.fillCircleShape(circle);
    },
    onComplete: () => graphics.destroy()
  });

  // Cámara y sonido
  this.cameras.main.flash(300, 255, 200, 50);
  this.cameras.main.shake(500, 0.02);
 // this.sound.play('explosionSound');

  // Delay antes del Game Over
  this.time.delayedCall(900, () => {
    this.scene.start('GameOverScene', { lostSceneKey: 'MainSceneA1' });
  });
}


 
};






// Collider: empuja físicamente
this.physics.add.collider(player, enemigos, impactos, null, this);
this.physics.add.collider(player, enemigoss, impactos, null, this);
this.physics.add.collider(player, enemigosA, impactos, null, this);

// Overlap: asegura que el callback se dispare incluso si están en la misma posición
this.physics.add.overlap(player, enemigos, impactos, null, this);
this.physics.add.overlap(player, enemigoss, impactos, null, this);
this.physics.add.overlap(player, enemigosA, impactos, null, this);



  const objetoColision = mapa1.getObjectLayer('objetoColision');
   
   objetoColision.objects.forEach(function (obj) {
     // Crea un sprite para cada objeto en la capa de objetos
     var objetoSprite = this.physics.add.image(obj.x + obj.width / 2, obj.y + obj.height / 2, 'ruta');
     var invisiblePlatform = objetoSprite
     invisiblePlatform.setAlpha(0); // Establecer la transparencia a 0 para que sea invisible
 
     // Configura el origen y tamaño del sprite
     objetoSprite.setOrigin(0.5, 0.5);
     objetoSprite.displayWidth = obj.width; // Establece el ancho del sprite
     objetoSprite.displayHeight = obj.height; // Establece la altura del sprite
     
     // Habilita la física para el sprite
     this.physics.world.enable(objetoSprite);
 
     // Desactiva la gravedad para el objeto
     objetoSprite.body.setAllowGravity(false);
        // Configura la plataforma como inamovible
        objetoSprite.body.immovable = true;

        // Activa la colisión entre el jugador y el objeto
        this.physics.add.collider(player,  objetoSprite, function() {
          
          // Puedes agregar aquí el código que desees ejecutar cuando haya una colisión
        });
          // Activa la colisión entre el enemigo y el objeto
     this.physics.add.collider(enemigos, objetoSprite, function() {
    
     }); 
       this.physics.add.collider(enemigosA, objetoSprite, function() {
    
     }); 
          // Activa la colisión entre el enemigo y el objeto
     this.physics.add.collider(enemigoss, objetoSprite, function() {
     
      // Puedes agregar aquí el código que desees ejecutar cuando haya una colisión
    }); 
        
      

       // this.physics.add.collider(smartEnemy, objetoSprite, function() {  }); 

        this.physics.add.collider(monedas, objetoSprite, function() {
        
        });
 
      
 
  this.physics.add.collider(obstaculos, objetoSprite, function() {
        
        });

      }, this);
 
     

      const objetoColisione = mapa1.getObjectLayer('objetoColisionX');
  
      objetoColisione.objects.forEach(function (obj) {
        // Crea un sprite para cada objeto en la capa de objetos
        var objetoSprites = this.physics.add.image(obj.x + obj.width / 2, obj.y + obj.height / 2, 'ruta');
        var invisiblePlatform = objetoSprites
        invisiblePlatform.setAlpha(0); // Establecer la transparencia a 0 para que sea invisible
    
        // Configura el origen y tamaño del sprite
        objetoSprites.setOrigin(0.5, 0.5);
        objetoSprites.displayWidth = obj.width; // Establece el ancho del sprite
        objetoSprites.displayHeight = obj.height; // Establece la altura del sprite
        
        // Habilita la física para el sprite
        this.physics.world.enable(objetoSprites);
    
        // Desactiva la gravedad para el objeto
        objetoSprites.body.setAllowGravity(false);
           // Configura la plataforma como inamovible
           objetoSprites.body.immovable = true;
   
           // Activa la colisión entre el jugador y el objeto
           this.physics.add.collider(player,  objetoSprites, function() {
             
             // Puedes agregar aquí el código que desees ejecutar cuando haya una colisión
           });
          
       
         
         }, this);
      
   //collection de cofre      
 this.physics.add.overlap(player, monedas, collectStar, null, this);




 

 

 if (this.plugins.get('rexvirtualjoystickplugin')) {
  // Si el plugin está disponible, crea el joystick
  this.joyStick = this.plugins.get('rexvirtualjoystickplugin').add(this, {
    x: 150,
    y: 670,
    radius: 100,
    base: this.add.circle(0, 0, 50, 0x888888).setAlpha(0.8).setScale(1.9),
    thumb: this.add.circle(0, 0, 25, 0xcccccc).setAlpha(0.5).setScale(1.9),
  });
  if (this.sys.game.device.os.desktop) {
    this.joyStick.setVisible(false);
  }
  this.joystickCursors = this.joyStick.createCursorKeys();
} else {
  console.error('El plugin rexvirtualjoystickplugin no está instalado.');
}

 
 var buttonShoot = this.add.image(1500, 670, 'd1').setInteractive().setScrollFactor(0).setAlpha(0.9);
 buttonShoot.setScale(2.5);

 if (this.sys.game.device.os.desktop) {
  buttonShoot.setVisible(false); 
}

 

buttonShoot.on('pointerdown', () => {
 
  this.dispararConBoton();
}, this);








function crearPisoDeRebote(scene, objetosRebotables, opciones = {}) {
  const {
    y = 790,
    altura = 100,
    color = 0x00ff00,
    fuerzaRebote = -600,
    ondaColor = 0xffffff,
    ondaDuracion = 400
  } = opciones;

  const anchoMapa = mapa1?.widthInPixels || this.scale.width;


  const pisoRebote = scene.add.rectangle(anchoMapa / 2, y, anchoMapa, altura, color);
  scene.physics.world.enable(pisoRebote);
  pisoRebote.body.setAllowGravity(false);
  pisoRebote.body.setImmovable(true);
  pisoRebote.setFillStyle(color, 0); // invisible

  objetosRebotables.forEach(objeto => {
    scene.physics.add.collider(objeto, pisoRebote, (entidad) => {
      if (entidad.body.velocity.y > 0) {
        entidad.body.setVelocityY(fuerzaRebote);

        // Efecto de onda
        const onda = scene.add.circle(entidad.x, pisoRebote.y, 10, ondaColor, 0.4);
        scene.tweens.add({
          targets: onda,
          scale: 5,
          alpha: 0,
          duration: ondaDuracion,
          ease: 'Cubic.easeOut',
          onComplete: () => onda.destroy()
        });

        // Animación squash
        scene.tweens.add({
          targets: entidad,
          scaleX: 1.2,
          scaleY: 0.8,
          duration: 100,
          yoyo: true,
          ease: 'Power1'
        });

     
      }
    }, null, scene);
  });
}




// Función para restablecer el color del jugador
function  restablecerColor(player) {
  player.clearTint();
  
}





 
// Define la función collectStar
function collectStar(player, star) {
  star.disableBody(true, true);
  player.salud += 10;
  player.textoSalud.setText('Health:' + player.salud);
player.clearTint()
sonidoMoneda.play();
  this.cameras.main.shake(200, 0.01);
}

  



}






checkEnemigos() {
    // Un arreglo con todos tus grupos de enemigos
    const gruposDeEnemigos = [enemigos, enemigoss, enemigosA];

    gruposDeEnemigos.forEach(grupo => {
        if (grupo) { // Asegúrate de que el grupo existe
            grupo.children.iterate(enemigo => {
                if (enemigo) { // Asegúrate de que el enemigo existe
                    // Verifica si el enemigo está fuera de los límites del mundo
                    if (enemigo.x < 0 || enemigo.x > mapa1.widthInPixels || enemigo.y < 0 || enemigo.y > mapa1.heightInPixels) {
                        // Si está fuera, lo elimina como si hubiera sido derrotado
                        this.eliminarEnemigo(enemigo);
                    }
                }
            });
        }
    });
}




restablecerColoresB(enemigo) {
  enemigo.clearTint();
}

 handleBulletEnemyCollision (bala, enemigo) {
  const daño = 50;

  bala.destroy();
  enemigo.impactos++;
  enemigo.salud -= daño;

  // Tinte rojo temporal
  enemigo.setTint(0xff0000);
  this.time.addEvent({
    delay: 100,
    callback: () => this.restablecerColoresB(enemigo),
    callbackScope: this
  });

  // Empuje físico + escalado
  const direccion = player.x > enemigo.x ? -1 : 1;
  enemigo.body.setVelocityX(200 * direccion);
  enemigo.body.setVelocityY(-80);

  this.tweens.add({
    targets: enemigo,
    scaleX: 1.2,
    scaleY: 1.2,
    duration: 100,
    yoyo: true,
    ease: 'Power2',
    
  });

  // Sacudida de cámara
  this.cameras.main.shake(150, 0.01);

  // Texto de daño animado

 const texto = this.add.text(enemigo.x, enemigo.y, '.', { fontSize: '28px', fill: '#ff0000' });

  this.tweens.add({
      targets: texto,
      alpha: 1,
      y: enemigo.y - 50,
      duration: 1000,
      repeat: 1,
      onComplete: () => texto.destroy(),
  });

  

  // Onda de choque en el punto de impacto
  const onda = this.add.graphics();
  onda.fillStyle(0xeaff00, 0.4);
  onda.fillCircle(0, 0, 10);
  onda.setPosition(bala.x, bala.y - 30);

  this.tweens.add({
    targets: onda,
    scale: 2,
    alpha: 0,
    duration: 300,
    ease: 'Cubic.easeOut',
    onComplete: () => onda.destroy()
  });

  // Explosión si muere
  if (enemigo.salud <= 0) {
    enemigo.disableBody(true, true);

    const explosion = this.add.sprite(enemigo.x, enemigo.y, 'explosion_zombie');
    explosion.setScale(enemigo.scaleX, enemigo.scaleY);
    explosion.play('zombie_explosion');

    explosion.on('animationcomplete-zombie_explosion', () => {
      explosion.destroy();
      this.eliminarEnemigo(enemigo);
    }, this);
  }
};
 

eliminarEnemigo(enemigo) {
  if (enemigo.eliminado) return;
  enemigo.eliminado = true;

  enemigoss.remove(enemigo, true, true);
  enemigos.remove(enemigo, true, true);
  enemigosA.remove(enemigo, true, true);
  
  totalEnemigos--;
}



dispararConBoton() {
  const balaHielo = this.physics.add.sprite(player.x, player.y, 'bala');
  balaHielo.setScale(0.8).setActive(true).setVisible(true);
  balaHielo.anims.play('bala_hielo_anim', true);

  this.sound.play('arma', { volume: 1 });

var velocidadBala = 2600;
 
  if (this.joystickCursors.left.isDown) {
    balaHielo.setVelocityX(-velocidadBala);
} else if (this.joystickCursors.right.isDown) {
    balaHielo.setVelocityX(velocidadBala);
}else {
      balaHielo.setVelocityX(velocidadBala);
  }

 
  // Efecto visual
  const onda = this.add.graphics({ x: player.x, y: player.y - 40 });
  onda.fillStyle(0x00ffff, 0.6).fillCircle(0, 0, 10);
  this.tweens.add({
    targets: onda,
    scale: 3,
    alpha: 0,
    duration: 300,
    ease: 'Cubic.easeOut',
    onComplete: () => onda.destroy()
  });

  this.time.delayedCall(200, () => {
    if (balaHielo && balaHielo.active) balaHielo.destroy();
  });

  // Colisiones
  this.physics.add.collider(balaHielo, enemigos, this.handleBulletEnemyCollision, null, this);
  this.physics.add.collider(balaHielo, enemigoss, this.handleBulletEnemyCollision, null, this);
  this.physics.add.collider(balaHielo, enemigosA, this.handleBulletEnemyCollision, null, this);
}











update() {
  
  let elapsedTime = Math.floor((this.time.now - this.startTime) / 1000);
  this.timeText.setText('Time: ' + elapsedTime + 's');

 

  // Controlar el movimiento con las teclas del cursor
  let canJump = true;

  this.handlePlayerMovement(canJump);

  // Verificar si se han recogido todas las monedas
 
this.checkCoinsCollected();

  // Actualizar la posición y animación de los enemigos
  this.updateEnemies();

 
  this.updatePlayerHealthBar();


  



}




 handlePlayerMovement(canJump) {

  

const horizontalSpeed = 200;
const jumpSpeed = -750; // Ascenso más explosivo
    // Movimiento horizontal
    if (cursors.left.isDown || this.joystickCursors.left.isDown) {
        player.setVelocityX(-horizontalSpeed);
        player.anims.play('player_left', true);
       

// Creamos un pequeño texto (simulando una partícula) en los pies del jugador
    var polvo1 = this.add.text(player.x, player.y + 40, '.', {
        fontSize: '18px',
        fill: '#ffffff', // Color blanco, puedes usar un gris claro
        alpha: 0.5       // Semi-transparente
    });

    // Hacemos que la "partícula" se desvanezca y se mueva hacia arriba
    this.tweens.add({
        targets: polvo1,
        alpha: 0,        // Se desvanece
        y: polvo1.y - 40, // Se mueve hacia arriba
        duration: 500,   // Duración corta
        onComplete: () => polvo1.destroy() // Se elimina al terminar
    });


    } else if (cursors.right.isDown || this.joystickCursors.right.isDown) {
        player.setVelocityX(horizontalSpeed);
        player.anims.play('player_right', true);

        // Creamos un pequeño texto (simulando una partícula) en los pies del jugador
    var polvo = this.add.text(player.x, player.y + 41, '.', {
        fontSize: '18px',
        fill: '#ffffff', // Color blanco, puedes usar un gris claro
        alpha: 0.5       // Semi-transparente
    });

    // Hacemos que la "partícula" se desvanezca y se mueva hacia arriba
    this.tweens.add({
        targets: polvo,
        alpha: 0,        // Se desvanece
        y: polvo.y - 40, // Se mueve hacia arriba
        duration: 500,   // Duración corta
        onComplete: () => polvo.destroy() // Se elimina al terminar
    });



       
    } else {

if (!player.body.touching.down) {
    player.anims.play('player_up', true);
    
    // Detectar si está cayendo (velocidad positiva)
    if (player.body.velocity.y > 0) {
        // Interpolación de color según velocidad
        const velocidad = Phaser.Math.Clamp(player.body.velocity.y, 0, 1000);
        const colorInterpolado = Phaser.Display.Color.Interpolate.ColorWithColor(
            { r: 255, g: 255, b: 255 }, // blanco
            { r: 255, g: 0, b: 0 },     // rojo
            1000,                       // rango máximo
            velocidad                   // valor actual
        );
        const colorHex = Phaser.Display.Color.GetColor(
            colorInterpolado.r,
            colorInterpolado.g,
            colorInterpolado.b
        );

        // Crear ícono militar
        const impacto = this.add.text(player.x -30, player.y + 60, '✹', {
            fontSize: '26px',
            fill: Phaser.Display.Color.RGBToString(colorInterpolado.r, colorInterpolado.g, colorInterpolado.b, 0.8, '#'),
            alpha: 0.8
        });

        // Animación tipo partícula
        this.tweens.add({
            targets: impacto,
            alpha: 0,
            y: impacto.y - 30,
            scale: 1.8,
            duration: 400,
            ease: 'Power1',
            onComplete: () => impacto.destroy()
        });
    }
} else {
    player.anims.play('player_turn', true);
}


    }

    // Salto
    if ((cursors.up.isDown || this.joystickCursors.up.isDown) && player.body.touching.down && canJump) {
        player.setVelocityY(jumpSpeed);
        this.sonidoPlayer.play();
        canJump = false;
    }

    if (player.body.touching.down) {
        canJump = true;
    }

    // Simulación de easing: aceleración al caer
    if (player.body.velocity.y > 0) {
        player.body.setAccelerationY(900); // Más aceleración al caer
    } else {
        player.body.setAccelerationY(0); // Sin aceleración al subir
    }

    // Drag dinámico
    if (player.body.touching.down) {
        player.setDragX(600);
    } else {
        player.setDragX(100);
    }


   }




checkCoinsCollected() {
    this.score = totalEnemigos;
    this.scoreText.setText('Zombie Kill Count:' + this.score);
    
    // Simplificado: Se inicia la escena final unificada
    if (totalEnemigos === 0) {
        let elapsedTime = Math.floor((this.time.now - this.startTime) / 1000);
        
        this.scene.start('EndScene', {
            score: this.score,
            finalTime: elapsedTime,
             currentLevelIndex: 0, // Le decimos que estamos en el nivel 1 (índice 0) // Cambia a la siguiente escena de objetivo
            levelTitle: 'Level 1' // Nombre del nivel actual
        });
    }
}

updateEnemies() {

 
  var distanciaMinima = 40;
  var velocidadEnemigo2 = 100;
  var distanciaDeteccion = 1000; // Distancia a la que el enemigo detecta al jugador


// Verifica la distancia entre el jugador y cada enemigo y reproduce el sonido si están lo suficientemente cerca
enemigos.getChildren().forEach(enemigo => {
  // Calcula la distancia entre el jugador y el enemigo
  var distancia = Phaser.Math.Distance.Between(player.x, player.y, enemigo.x, enemigo.y);

  // Define una distancia de reproducción del sonido
  var distanciaReproduccion = 200; // Ajusta este valor según lo cerca que quieras que estén los enemigos para que se reproduzca el sonido

  // Si el enemigo está lo suficientemente cerca del jugador
  if (distancia < distanciaReproduccion) {
      // Reproduce el sonido para este enemigo
      enemigo.sonido.play();
  }
});



// Verifica la distancia entre el jugador y cada enemigo y reproduce el sonido si están lo suficientemente cerca
enemigosA.getChildren().forEach(enemigoX => {
  // Calcula la distancia entre el jugador y el enemigo
  var distancia = Phaser.Math.Distance.Between(player.x, player.y, enemigoX.x, enemigoX.y);

  // Define una distancia de reproducción del sonido
  var distanciaReproduccion = 200; // Ajusta este valor según lo cerca que quieras que estén los enemigos para que se reproduzca el sonido

  // Si el enemigo está lo suficientemente cerca del jugador
  if (distancia < distanciaReproduccion) {
      // Reproduce el sonido para este enemigo
      enemigoX.sonido.play();
  }
});



    // Itera sobre cada enemigo en el grupo de enemigos
    enemigos.children.iterate(function (enem) {


      if (Phaser.Geom.Rectangle.ContainsPoint(visibleArea, enem)) {
        enem.setActive(true);
    } else {
        enem.setActive(false);
    }
      // Verifica si el enemigo está definido
      if (enem && enem.body) {
        // Calcula la distancia entre el enemigo y el jugador
        var distancia = Phaser.Math.Distance.Between(enem.x, enem.y, player.x, player.y);
  
        // Si el jugador está cerca
        if (distancia < distanciaDeteccion) {
          // Si el jugador está a la derecha del enemigo
          if (player.x > enem.x) {
            enem.body.velocity.x = velocidadEnemigo2;
            // Verifica el tipo de enemigo y asigna la animación correspondiente
             if (enem.texture.key === 'enemi1') {
              enem.anims.play('enemigo1_right_walk', true);
            } else if (enem.texture.key === 'enemi9') {
              enem.anims.play('enemigo9_right_walk', true);
            }  else if (enem.texture.key === 'enemi3') {
              enem.anims.play('enemigo3_right_walk', true);
            }else if (enem.texture.key === 'enemi5') {
              enem.anims.play('enemigo5_right_walk', true);
            }else if (enem.texture.key === 'enemi8') {
              enem.anims.play('enemigo8_right_walk', true);
            }
            else if (enem.texture.key === 'enemi10') {
              enem.anims.play('enemigo10_right_walk', true);
            }else if (enem.texture.key === 'enemi11') {
              enem.anims.play('enemigo11_right_walk', true);
            }else if (enem.texture.key === 'enemi12') {
              enem.anims.play('enemigo12_right_walk', true);
            } else if (enem.texture.key === 'enemi1a') {
              enem.anims.play('enemigo1a_right_walk', true);
            } else if (enem.texture.key === 'enemi2a') {
              enem.anims.play('enemigo2a_right_walk', true);
            } else if (enem.texture.key === 'enemi3a') {
              enem.anims.play('enemigo3a_right_walk', true);
            }else if (enem.texture.key === 'enemi4a') {
              enem.anims.play('enemigo4a_right_walk', true);
            }else if (enem.texture.key === 'enemi5a') {
              enem.anims.play('enemigo5a_right_walk', true);
            }


          } else if (player.x < enem.x) {
            enem.body.velocity.x = -velocidadEnemigo2;
            // Verifica el tipo de enemigo y asigna la animación correspondiente
            if (enem.texture.key === 'enemi1') {
              enem.anims.play('enemigo1_left_walk', true);
            } else if (enem.texture.key === 'enemi9') {
              enem.anims.play('enemigo9_left_walk', true);
            }  else if (enem.texture.key === 'enemi3') {
              enem.anims.play('enemigo3_left_walk', true);
            } else if (enem.texture.key === 'enemi5') {
              enem.anims.play('enemigo5_left_walk', true);
            }else if (enem.texture.key === 'enemi8') {
              enem.anims.play('enemigo8_left_walk', true);
            }
            else if (enem.texture.key === 'enemi10') {
              enem.anims.play('enemigo10_left_walk', true);
            }else if (enem.texture.key === 'enemi11') {
              enem.anims.play('enemigo11_left_walk', true);
            }else if (enem.texture.key === 'enemi12') {
              enem.anims.play('enemigo12_left_walk', true);
            } else if (enem.texture.key === 'enemi1a') {
              enem.anims.play('enemigo1a_left_walk', true);
            } else if (enem.texture.key === 'enemi2a') {
              enem.anims.play('enemigo2a_left_walk', true);
            } else if (enem.texture.key === 'enemi3a') {
              enem.anims.play('enemigo3a_left_walk', true);
            }else if (enem.texture.key === 'enemi4a') {
              enem.anims.play('enemigo4a_left_walk', true);
            }else if (enem.texture.key === 'enemi5a') {
              enem.anims.play('enemigo5a_left_walk', true);
            }




          }
        }
      }
      
    });
  


    // Itera sobre cada enemigo en el grupo de enemigos
    enemigosA.children.iterate(function (enemX) {


      if (Phaser.Geom.Rectangle.ContainsPoint(visibleArea, enemX)) {
        enemX.setActive(true);
    } else {
        enemX.setActive(false);
    }
      // Verifica si el enemigo está definido
      if (enemX && enemX.body) {
        // Calcula la distancia entre el enemigo y el jugador
        var distancia = Phaser.Math.Distance.Between(enemX.x, enemX.y, player.x, player.y);
  
        // Si el jugador está cerca
        if (distancia < distanciaDeteccion) {
          // Si el jugador está a la derecha del enemigo
          if (player.x > enemX.x) {
            enemX.body.velocity.x = velocidadEnemigo2;
            // Verifica el tipo de enemigo y asigna la animación correspondiente
             if (enemX.texture.key === 'enemiG') {
              enemX.anims.play('enemigo_right_walk', true);
            } else if (enemX.texture.key === 'enemiG1') {
              enemX.anims.play('enemigoG1_right_walk', true);
            } else if (enemX.texture.key === 'enemiG2') {
              enemX.anims.play('enemigoG2_right_walk', true);
            } else if (enemX.texture.key === 'enemiG3') {
              enemX.anims.play('enemigoG3_right_walk', true);
            } else if (enemX.texture.key === 'enemiG4') {
              enemX.anims.play('enemigoG4_right_walk', true);
            } else if (enemX.texture.key === 'enemiG5') {
              enemX.anims.play('enemigoG5_right_walk', true);
            }  else if (enemX.texture.key === 'enemiG6') {
              enemX.anims.play('enemigoG6_right_walk', true);
            } 






            
          } else if (player.x < enemX.x) {
            enemX.body.velocity.x = -velocidadEnemigo2;
            // Verifica el tipo de enemigo y asigna la animación correspondiente
            if (enemX.texture.key === 'enemiG') {
              enemX.anims.play('enemigo_left_walk', true);
            } else if (enemX.texture.key === 'enemiG1') {
              enemX.anims.play('enemigoG1_left_walk', true);
            } else if (enemX.texture.key === 'enemiG2') {
              enemX.anims.play('enemigoG2_left_walk', true);
            }else if (enemX.texture.key === 'enemiG3') {
              enemX.anims.play('enemigoG3_left_walk', true);
            }else if (enemX.texture.key === 'enemiG4') {
              enemX.anims.play('enemigoG4_left_walk', true);
            }else if (enemX.texture.key === 'enemiG5') {
              enemX.anims.play('enemigoG5_left_walk', true);
            }else if (enemX.texture.key === 'enemiG6') {
              enemX.anims.play('enemigoG6_left_walk', true);
            }
          }
        }
      }
      
    });




// Define el número máximo de enemigos que pueden apilarse
var maxApilamiento = 2;

// Crea un contador para llevar la cuenta de cuántos enemigos se han apilado
var contadorApilamiento = 0;




// Itera sobre cada enemigo en el grupo de enemigos
enemigos.children.iterate(function (enem1) {
    enemigos.children.iterate(function (enem2) {
        // No compara el enemigo consigo mismo
        if (enem1 !== enem2) {

            // Calcula la distancia entre los dos enemigos
            var distancia = Phaser.Math.Distance.Between(enem1.x, enem1.y, enem2.x, enem2.y);
            
            // *Asumo que 'distanciaMinima' está definida en otro lugar del código*

            // Si la distancia es menor que la distancia mínima y no se ha alcanzado el máximo de apilamiento
            if (distancia < distanciaMinima && contadorApilamiento < maxApilamiento) {
                // Hace que enem1 se suba a la mitad de enem2
                enem1.y = enem2.y - enem1.height / 2;
                // Incrementa el contador de apilamiento
                contadorApilamiento++;

                 var startY = enem2.y + enem2.height / 2 - 20;

                var damageTexto = this.add.text(enem2.x, startY, '....', { alpha: 0.5, fontSize: '20px', fill: '#e1e7e2ff' });
                 damageTexto.setOrigin(0.5);
                // Añade la animación Tween para hacerlo flotar y desaparecer
                this.tweens.add({
                    targets: damageTexto,
                    alpha: 0, // Lo hacemos desaparecer
                   y: startY - 50, // Lo movemos hacia arriba 50 píxeles
                    duration: 500,
                    ease: 'Power1',
                    onComplete: () => damageTexto.destroy() // Destruye el texto al finalizar
                });
                // ----------------------------------------------------------------------
                // FIN DEL BLOQUE REEMPLAZADO
                // ----------------------------------------------------------------------
            }
        }
    }, this); // *Paso 'this' (la escena) como contexto para el segundo 'iterate'*
    
}, this); // *Paso 'this' (la escena) como contexto para el primer 'iterate'*











// Itera sobre cada enemigo en el grupo de enemigos
enemigosA.children.iterate(function (enemX) {
    enemigosA.children.iterate(function (enemD) {
        // No compara el enemigo consigo mismo
        if (enemX !== enemD) {

            // Calcula la distancia entre los dos enemigos
            var distancia = Phaser.Math.Distance.Between(enemX.x, enemX.y, enemD.x, enemD.y);

            // Si la distancia es menor que la distancia mínima y no se ha alcanzado el máximo de apilamiento
            if (distancia < distanciaMinima && contadorApilamiento < maxApilamiento) {
                // Hace que enem1 se suba a la mitad de enem2
                enemX.y = enemD.y - enemX.height / 2;
                // Incrementa el contador de apilamiento
                contadorApilamiento++;

             
   var startY1 = enemD.y + enemD.height / 2 - 20;

                var damageTexto = this.add.text(enemD.x, startY1, 'ªªªº', { alpha: 0.5, fontSize: '20px', fill: '#e1e7e2ff' });
                 damageTexto.setOrigin(0.5);
                // Añade la animación Tween para hacerlo flotar y desaparecer
                this.tweens.add({
                    targets: damageTexto,
                    alpha: 0, // Lo hacemos desaparecer
                   y: startY1 - 50, // Lo movemos hacia arriba 50 píxeles
                    duration: 500,
                    ease: 'Power1',
                    onComplete: () => damageTexto.destroy() // Destruye el texto al finalizar
                });
                // ----------------------------------------------------------------------
                // FIN DEL BLOQUE REEMPLAZADO
                // ----------------------------------------------------------------------
            }
        }
    }, this); // *Paso 'this' (la escena) como contexto para el segundo 'iterate'*
    
}, this); // *Paso 'this' (la escena) como contexto para el primer 'iterate'*







  // Itera sobre cada enemigo en el grupo de enemigoss
enemigoss.children.iterate(function (ene) {
  // Verifica si el enemigo está definido
  if (ene && ene.body) {
    // Hace que el enemigo se quede en su lugar
    ene.body.velocity.x = 0;

    // Verifica el tipo de enemigo y asigna la animación correspondiente
    if (ene.texture.key === 'enemi6') {
      ene.anims.play('enemigo6_stand', true);
    } else if (ene.texture.key === 'enemi7') {
      ene.anims.play('enemigo7_stand', true);
    }else if (ene.texture.key === 'enemi6a') {
      ene.anims.play('enemigo6a_stand', true);
  }else if (ene.texture.key === 'enemi6b') {
    ene.anims.play('enemigo6b_stand', true);
  }
}
});


}

   


updatePlayerHealthBar() {


  const barX = 90;
  const barY = 100;
  const barWidth = 250;
  const barHeight = 18;

  this.healthBar.clear();

  // Fondo rojo
  this.healthBar.fillStyle(0xff0000);
  this.healthBar.fillRect(barX, barY, barWidth, barHeight);

  // Salud verde proporcional
  const healthWidth = Phaser.Math.Clamp(player.salud, 0, 100) * (barWidth / 100);
  this.healthBar.fillStyle(0x00ff00);
  this.healthBar.fillRect(barX, barY, healthWidth, barHeight);

  // Actualiza texto
  player.textoSalud.setText('Health ' + player.salud);





}


}
      export default MainSceneA1;