
class GameOverScene extends Phaser.Scene {
    constructor() {
      super({ key: 'GameOverScene' });
    }
  
    preload() {
      this.scale.scaleMode = Phaser.Scale.SHOW_ALL;
      this.scale.pageAlignHorizontally = true;
      this.scale.pageAlignVertically = true;
      this.load.image('background', 'imag/a1.png');
      this.load.image('resetButton', 'imag/reS1.png');
    }
  
    create(data) {
      this.sound.stopAll(); // Detiene todos los sonidos, incluida la música de fondo
  
      var centerX = this.cameras.main.width / 2;
      var centerY = this.cameras.main.height / 2;
  
      // Configurar la pantalla de Game Over
      this.cameras.main.setBackgroundColor('#ff0000'); // Fondo rojo
  
      this.add.image(centerX, centerY, 'background').setAlpha(0.5).setOrigin(0.5);
  
      // Texto de Game Over
      this.add.text(centerX, centerY - 100, 'Game Over', {
        fontFamily: 'Arial Black',
        fontSize: '64px',
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 8,
        align: 'center'
      }).setOrigin(0.5).setDepth(100);
  
      this.add.text(centerX, centerY, 'Press Reset to restart.', {
        fontFamily: 'Arial Black',
        fontSize: '40px',
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 8,
        align: 'center'
      }).setOrigin(0.5).setDepth(100);
  
      // Botón de reinicio
      var resetBtn = this.add.sprite(centerX, centerY + 100, 'resetButton').setInteractive();
      resetBtn.setScale(0.8);


      // Agregar efectos al botón
      resetBtn.on('pointerover', () => {
        resetBtn.setTint(0x44ff44); // Cambia el color del botón cuando el cursor está sobre él
    });
    resetBtn.on('pointerout', () => {
      resetBtn.clearTint(); // Restaura el color original cuando el cursor sale del botón
    });

    // Agregar animación de pulso al botón
    this.tweens.add({
        targets:  resetBtn,
        scale: { from: 0.7, to: 0.8 },
        duration: 500,
        yoyo: true,
        repeat: -1
    });

    // Añadir texto y ajustar la escala del botón
    this.add.text(centerX, 600, ' Reset', { fontSize: '32px', fill: '#fff', fontFamily: 'Arial, sans-serif', fontStyle: 'bold' }).setOrigin(0.5);



  
      resetBtn.on('pointerdown', () => {
        this.scene.stop();
        const lostSceneKey = data.lostSceneKey;
        this.scene.start(lostSceneKey, { reset: true });


      });
    }
  }


export default GameOverScene;