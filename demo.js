
import MenuScene from './scenes/MenuScene.js';
import LoadScene from './scenes/LoadScene.js';
import MainSceneA1 from './scenes/MainSceneA1.js';
import MainSceneA2 from './scenes/MainSceneA2.js';
import MainSceneA3 from './scenes/MainSceneA3.js';
import MainSceneA4 from './scenes/MainSceneA4.js';
import MainSceneA5 from './scenes/MainSceneA5.js';
import MainSceneA6 from './scenes/MainSceneA6.js';
import GameOverScene from './scenes/GameOverScene.js';
import ObjectiveScene from './scenes/ObjectiveScene.js';
import EndScene from './scenes/EndScene.js';
import EndDemo from './scenes/EndDemo.js';


const config = {
    type: Phaser.AUTO,
    parent: "container",
    width: 1650,
    height: 800,
    scale: {
        mode: Phaser.Scale.SHOW_ALL,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1200 },
            debug: false,

             
            velocityIterations: 20, 
            
            positionIterations: 6 
        
        }
    },
    input: {
        gamepad: true,

          activePointers: 3, 
    touch: {
      // Habilita los eventos táctiles
      enabled: true


}
    },
    scene: [
        MenuScene,
        LoadScene,
        MainSceneA1,
        MainSceneA2,
        MainSceneA3,
        MainSceneA4,
        MainSceneA5,
        MainSceneA6,
        GameOverScene,
        ObjectiveScene,
        EndScene,
        EndDemo,
        
    ],
};

const game = new Phaser.Game(config);