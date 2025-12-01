// Simplificado: Clase única para todas las escenas de final


const estiloGlobal = {
    normal: { fontSize: '20px', fill: '#fff', fontFamily: 'Arial, sans-serif', fontStyle: 'italic', align: 'center', wordWrap: { width: 1200, useAdvancedWrap: true } },
    titulo: { fontSize: '38px', fill: '#ff0000', fontFamily: 'Arial, sans-serif', fontStyle: 'bold', align: 'center' },
    destacado:{ fontFamily: 'Gotham Ultra, Gotham Black',
        fontSize: '55px',
        color: '#ffffff',
        stroke: '#000000',
        strokeThickness: 8,
        align: 'center'}
    // Agrega todos los estilos que necesites
};
import levels from './levels.js';


class EndScene extends Phaser.Scene {
    constructor() {
        super({ key: 'EndScene' });
    }

    init(data) {
        this.score = data.score;
        this.finalTime = data.finalTime;
      
       
       
        
       
        this.levelTitle = data.levelTitle;
        this.currentLevelIndex = data.currentLevelIndex; // Nuevo dato para saber en qué nivel estamos
        
    }

    create() {

        this.sound.stopAll(); // Detiene todos los sonidos
        var centerX = this.cameras.main.width / 2;
        var centerY = this.cameras.main.height / 2;

        this.add.text(centerX, 150, 'ZOMBIE ANNIHILATION EXTERMINATION', estiloGlobal.titulo).setOrigin(0.5);
        this.add.text(centerX, 250, `Level Completed: ${this.levelTitle}`, estiloGlobal.normal).setOrigin(0.5);
        this.add.text(centerX, 500, `Best Time: ${this.finalTime}`, estiloGlobal.destacado).setOrigin(0.5);





   
// Difficulty scale: each level increases the threshold by 30 seconds
const baseThreshold = 15 + ((this.currentLevelIndex + 1) * 30);

let feedback = '';
if (this.finalTime <= baseThreshold) feedback = '⚡ Unstoppable Lightning! Your fury wiped out the horde in record time!';
else if (this.finalTime <= baseThreshold + 10) feedback = '🔥 Chaos Whirlwind! You played with the plague and laughed it off.';
else if (this.finalTime <= baseThreshold + 20) feedback = '🧠 Master Strategist! Every move was perfectly calculated.';
else feedback = '👾 Last Survivor! You endured when everything seemed lost.';

this.add.text(centerX, 350, feedback, { fontSize: '30px', color: '#ffff00' }).setOrigin(0.5);

let title = '';
if (this.finalTime <= baseThreshold ) title = '🏆 Supreme Exterminator';
else if (this.finalTime <= baseThreshold + 10) title = '💀 Horde Hunter';
else if (this.finalTime <= baseThreshold + 20) title = '🔥 Frenzied Survivor';
else title = '👻 Brave Novice';

this.add.text(centerX, 400, '🎮' + title, {
  fontSize: '30px',
  color: '#ff69b4'
}).setOrigin(0.5);

      
      
        var startBtn = this.add.image(centerX, centerY + 250, 'startButton').setInteractive();
    
    startBtn.on('pointerdown', () => {
        const nextLevelIndex = this.currentLevelIndex + 1;
        if (nextLevelIndex < levels.length) {
            this.scene.start('ObjectiveScene',  levels[nextLevelIndex] );
        } 
    });

    


      // Agregar efectos al botón
          startBtn.on('pointerover', () => {
            startBtn.setTint(0x44ff44); // Cambia el color del botón cuando el cursor está sobre él
        });
        startBtn.on('pointerout', () => {
            startBtn.clearTint(); // Restaura el color original cuando el cursor sale del botón
        });


  
        // Agregar animación de pulso al botón
        this.tweens.add({
            targets: startBtn,
            scale: { from: 0.7, to: 0.8 },
            duration: 500,
            yoyo: true,
            repeat: -1
        });


   


    }

    
}
export default EndScene;



