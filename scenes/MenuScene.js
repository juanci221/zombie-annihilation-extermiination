

import levels from './levels.js';

class MenuScene extends Phaser.Scene {
  constructor() {
      super({ key: 'MenuScene' });
  }

  preload() {
      this.scale.scaleMode = Phaser.Scale.SHOW_ALL;
      this.scale.pageAlignHorizontally = true;
      this.scale.pageAlignVertically = true;

      this.load.image('background1', 'imag/a1.png');
      this.load.image('startButton', 'imag/bS1.png');
  }

  create() {
      var centerX = this.cameras.main.width / 2;
      const screenWidth = this.cameras.main.width;


      

      // Fondo
      this.background1 = this.add.image(centerX, this.cameras.main.height / 2, 'background1');
      this.background1.setAlpha(0.6);
      this.background1.setScale(screenWidth / this.background1.width);

      // Botón "Start"
      var startBtn = this.add.sprite(centerX, 690, 'startButton').setInteractive();
      startBtn.setScale(0.7); // Cambia el tamaño al 70%
      startBtn.setAlpha(1); // Aumenta la opacidad para que sea más visible

      // Agregar efectos al botón
      startBtn.on('pointerover', () => {
          startBtn.setTint(0x44ff44); // Cambia el color del botón cuando el cursor está sobre él
      });
      startBtn.on('pointerout', () => {
          startBtn.clearTint(); // Restaura el color original cuando el cursor sale del botón
      });

     
      this.tweens.add({
          targets: startBtn,
          scale: { from: 0.7, to: 0.8 },
          duration: 500,
          yoyo: true,
          repeat: -1
      });

      
      this.add.text(centerX, 690, 'Start', { fontSize: '32px', fill: '#fff', fontFamily: 'Arial, sans-serif', fontStyle: 'bold' }).setOrigin(0.5);

      var estiloTexto = { 
          fontSize: '20px', 
          fill: '#fff', 
          fontFamily: 'Arial, sans-serif', 
          fontStyle: 'italic', 
          align: 'center',
          wordWrap: { width: 1200, useAdvancedWrap: true }
      };

      var instruccionesTexto = { 
          fontSize: '26px', 
          fill: '#00ff00', 
          fontFamily: 'Arial, sans-serif', 
          fontStyle: 'bold', 
          align: 'center' 
      };

      var instruccionesDetalles = { 
          fontSize: '20px', 
          strokeThickness: 1, 
          fill: '#fff', 
          fontFamily: 'Arial, sans-serif', 
          align: 'center'
      };

      
      this.add.text(centerX, 200, 'In a world devastated by an apocalyptic virus, humanity faces a terrifying threat: zombies.', estiloTexto).setOrigin(0.5);
      this.add.text(centerX, 250, 'Rising from the dead, these undead creatures hunt the living, turning cities into battlegrounds.', estiloTexto).setOrigin(0.5);
      this.add.text(centerX, 300, 'You are part of an elite group of exterminators, whose sole objective is to eradicate this plague.', estiloTexto).setOrigin(0.5);
      this.add.text(centerX, 350, 'Your mission is clear: infiltrate infested territories and eliminate every zombie in your path.', estiloTexto).setOrigin(0.5);
      this.add.text(centerX, 400, 'Armed with a variety of skills, you will have to fight for your life as you venture into the darkness and chaos.', estiloTexto).setOrigin(0.5);

      // Instrucciones
      this.add.text(centerX, 450, 'Instructions:', instruccionesTexto).setOrigin(0.5);
      this.add.text(centerX, 470, '* Use the arrow keys to move', instruccionesDetalles).setOrigin(0.5);
      this.add.text(centerX, 490, '* SPACE: Shoot', instruccionesDetalles).setOrigin(0.5);
      this.add.text(centerX, 520, '*Instructions for Mobile Devices:', instruccionesTexto).setOrigin(0.5);
      this.add.text(centerX, 540, '* Use the virtual joystick on the screen by tapping and sliding your finger in the desired direction to move the character.', instruccionesDetalles).setOrigin(0.5);
      this.add.text(centerX, 570, '* To shoot, tap the shoot button located on the screen.', instruccionesDetalles).setOrigin(0.5);

      // Evento de clic en el botón
startBtn.on('pointerdown', () => {
  if (!this.scale.isFullscreen) {
    this.scale.startFullscreen();
  }
  this.startGame();
});

      
  }
startGame() {

  this.scene.start('ObjectiveScene', levels[0]);




}



 
}

export default MenuScene;