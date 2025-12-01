
class LoadScene extends Phaser.Scene {
    constructor() {
      super({ key: 'LoadScene' });
    }
  
    init(data) {
      // CORRECCIÓN: Guarda el nombre de la próxima escena de forma correcta
      this.nextScene = data.nextScene;
    }
  
    preload() {
      this.scale.scaleMode = Phaser.Scale.SHOW_ALL;
      this.scale.pageAlignHorizontally = true;
      this.scale.pageAlignVertically = true;
  
      var width = this.cameras.main.width;
      var height = this.cameras.main.height;
      var progressBar = this.add.graphics();
      var progressBox = this.add.graphics();
      progressBox.fillStyle(0x222222, 0.8);
      progressBox.fillRect(width / 2 - 160, height / 2 - 25, 320, 50);
      
      var loadingText = this.add.text(width / 2, height / 2 - 50, 'Loading...', { 
        fontFamily: 'Gotham Ultra o Gotham Black', 
        fontSize: 20, 
        color: '#ffffff' 
      }).setOrigin(0.5);
  
      this.load.on('progress', function (value) {
        progressBar.clear();
        progressBar.fillStyle(0xffffff, 1);
        progressBar.fillRect(width / 2 - 150, height / 2 - 15, 300 * value, 30);
      });
  
      // Aquí está el único evento 'complete' que necesitas
      this.load.on('complete', () => {
        // Detiene el progreso visual
        progressBar.destroy();
        progressBox.destroy();
        loadingText.destroy();
        
        // Inicia la siguiente escena que se le pasó a LoadScene
        this.scene.start(this.nextScene);
      });
  
      // Carga los recursos específicos para cada nivel
      if (this.nextScene === 'MainSceneA1' || this.nextScene === 'MainSceneA2' || 
          this.nextScene === 'MainSceneA3' || this.nextScene === 'MainSceneA4' ||
          this.nextScene === 'MainSceneA5' || this.nextScene === 'MainSceneA6'
        
        ) {
         
        this.load.audio('moneda', 'sound/cofre.mp3');
        this.load.audio('arma', 'sound/arma1.mp3');
        this.load.audio('zombi1', 'sound/zomie.mp3');
          this.load.audio('up', 'sound/up1.mp3');
        this.load.audio('fa', 'sound/music2.mp3');
      }
      if (this.nextScene === 'MainSceneA2') {
        this.load.audio('f', 'sound/music1.mp3');
      } else if(this.nextScene === 'MainSceneA3') {
        this.load.audio('fa', 'sound/music2.mp3');
        this.load.audio('mosc', 'sound/mosca.mp3');
        
      } else if(this.nextScene === 'MainSceneA4') {
        this.load.audio('f', 'sound/music1.mp3');
        this.load.audio('mosc', 'sound/mosca.mp3');
      }else if(this.nextScene === 'MainSceneA5') {
        this.load.audio('fa', 'sound/music1.mp3');
         this.load.audio('mosc', 'sound/mosca.mp3');
      }else if(this.nextScene === 'MainSceneA6') {
        this.load.audio('fa', 'sound/music1.mp3');
        this.load.audio('zombi', 'sound/zomiee.mp3');
         this.load.audio('mosc', 'sound/mosca.mp3');
      }
    }
  
  
  }
  
  export default LoadScene;

