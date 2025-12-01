
const estiloGlobal = {
    normal: { fontSize: '20px', fill: '#fff', fontFamily: 'Arial, sans-serif', fontStyle: 'italic', align: 'center', wordWrap: { width: 1200, useAdvancedWrap: true } },
    titulo: { fontSize: '38px', fill: '#ff0000', fontFamily: 'Arial, sans-serif', fontStyle: 'bold', align: 'center' },
    destacado:{ fontFamily: 'Gotham Ultra, Gotham Black',
        fontSize: '55px',
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 8,
        align: 'center'}
  
};


class EndDemo extends Phaser.Scene {

    constructor() {
        super('EndDemo');
    }


  init(data) {
        this.score = data.score;
        this.finalTimeA = data.finalTime;
       
       
    }


    create() {
        
        const { width, height } = this.sys.game.canvas;
        const centerX = width / 2;
        const centerY = height / 2;

     
  
        this.sound.stopAll();


        this.cameras.main.setBackgroundColor('#000000');
        this.cameras.main.fadeIn(1000); 
        
        
        
         this.add.text(centerX, 500, `Best Time: ${this.finalTimeA}`, estiloGlobal.destacado).setOrigin(0.5);
        


        this.add.text(centerX, centerY - 100, '¡Full Demo!', {
            fontSize: '48px',
            fill: '#ffffff',
            fontFamily: 'Arial',
            align: 'center'
        }).setOrigin(0.5);

    
        
        this.add.text(centerX, centerY, '¡Thanks for playing! You’ve achieved Zombie Annihilation Extermination..', {
            fontSize: '20px',
            fill: '#cccccc',
            fontFamily: 'Arial',
            align: 'center'
        }).setOrigin(0.5);

        this.add.text(centerX, centerY + 50, 'Did you enjoy the demo? Support the development of the full game!', {
            fontSize: '24px',
            fill: '#ff9900', 
            fontFamily: 'Arial',
            align: 'center'
        }).setOrigin(0.5);

       
        const donateButton = this.add.text(centerX, centerY + 150, 'Join us on Itch.io!', {
            fontSize: '28px',
            fill: '#000000',
            backgroundColor: '#00ff00', 
            padding: { x: 20, y: 10 }
        })
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', () => { 
            
            this.openExternalLink('https://tu-usuario.itch.io/tu-juego/donate'); 
        });
        

            
      var startBtn = this.add.sprite(centerX, 690, 'startButton').setInteractive();
      startBtn.setScale(0.7); 
      startBtn.setAlpha(1); 

      // Agregar efectos al botón
      startBtn.on('pointerover', () => {
          startBtn.setTint(0x44ff44);
      });
      startBtn.on('pointerout', () => {
          startBtn.clearTint(); 
      });

      this.tweens.add({
          targets: startBtn,
          scale: { from: 0.7, to: 0.8 },
          duration: 500,
          yoyo: true,
          repeat: -1
      });

      
      this.add.text(centerX, 690, 'Restart Game', { fontSize: '32px', fill: '#fff', fontFamily: 'Arial, sans-serif', fontStyle: 'bold' }).setOrigin(0.5);

        

    
 startBtn.on('pointerdown', () => {
     
            this.scene.start('MenuScene'); 
        

         });
       
        const currentYear = new Date().getFullYear();
        this.add.text(centerX, height - 30, `© ${currentYear} All rights reserved [Juan A. Quinodoz].Todos los derechos reservados.`, {
            fontSize: '14px',
            fill: '#555555', 
            fontFamily: 'Arial',
            align: 'center'
        }).setOrigin(0.5);
    }
    
    
    openExternalLink(url) {
        window.open(url, '_blank');
    }
}


 export default EndDemo;