
import levels from './levels.js';


const GlobalStyles = {
    normal: { fontSize: '20px', fill: '#fff', fontFamily: 'Arial, sans-serif', fontStyle: 'italic', align: 'center', wordWrap: { width: 1200, useAdvancedWrap: true } },
    instrucciones: { fontSize: '26px', fill: '#00ff00', fontFamily: 'Arial, sans-serif', fontStyle: 'bold', align: 'center' },
    instruccionesDetalles: { fontSize: '20px', strokeThickness: 1, fill: '#fff', fontFamily: 'Arial, sans-serif', align: 'center' },
    tituloObjetivo: { fontSize: '38px', fill: '#ff0000', fontFamily: 'Arial, sans-serif', fontStyle: 'bold', align: 'center' },
    // Agrega todos los estilos que necesites
};


class ObjectiveScene extends Phaser.Scene {
    constructor() {
        super({ key: 'ObjectiveScene' });
    }

    init(data) {
        // Guarda los datos pasados desde la escena anterior
        this.levelData = data;
    }


 preload()  {

this.load.image('Z', 'imag/salud10.png');

this.load.image('Za', 'imag/obtaculo.png');
 }


    create() {
        const centerX = this.cameras.main.width / 2;
        this.cameras.main.setBackgroundColor(this.levelData.bgColor || '#222222');

        // Usa los datos parametrizados para cada nivel
        this.add.text(centerX, 120, this.levelData.title, GlobalStyles.tituloObjetivo).setOrigin(0.5);
        this.add.text(centerX, 180, 'Only the bravest will survive the ultimate zombie extermination!', GlobalStyles.normal).setOrigin(0.5);
        this.add.text(centerX, 240, this.levelData.objectiveText, GlobalStyles.tituloObjetivo).setOrigin(0.5);
        this.add.text(centerX, 300, 'Make sure to collect health along the way to survive this fierce battle.', GlobalStyles.normal).setOrigin(0.5);

       
        if (this.levelData.image1) {
  this.add.image(centerX - 100, 470, this.levelData.image1).setScale(0.8);
}
if (this.levelData.image2) {
  this.add.image(centerX + 250, 490, this.levelData.image2).setScale(1.2);
}
        // Si hay una descripción, la muestra
        if (this.levelData.description) {
            this.add.text(centerX, 650, this.levelData.description, GlobalStyles.normal).setOrigin(0.5);
        }

        // Si hay texto adicional, lo muestra
        if (this.levelData.additionalText) {
            this.add.text(centerX, 730, this.levelData.additionalText, GlobalStyles.normal).setOrigin(0.5);
        }

// ...
this.time.delayedCall(this.levelData.delay || 6000, () => {
    // La clave es pasarle el nombre de la escena de juego, no el índice del array
    this.scene.start('LoadScene', { nextScene: this.levelData.nextGameScene });
}, [], this);

       
    }




}



export default ObjectiveScene;