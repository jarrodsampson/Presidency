var preload = function(game){var loadingBar = "";var mainMusicSound = "";};
 
preload.prototype = {
	preload: function(){



        loadingBar = this.add.sprite(160,240,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        loadingBar.alpha = 0;
        this.load.setPreloadSprite(loadingBar);
		this.game.load.baseURL = 'assets/';
	    this.game.load.crossOrigin = 'anonymous';

		// game levels
		this.game.load.text('levels', 'levels/levels.json');
		// bonus levels
		this.game.load.text('bonusLevels', 'levels/bonus_levels.json');

		// game backgrounds
		this.game.load.image('mainBackground', 'backgrounds/trumpBackground.jpg');
		this.game.load.image('creditBackground', 'backgrounds/creditBackground.jpg');
		this.game.load.image('helpBackground', 'backgrounds/helpBackground.png');
		this.game.load.image('highscoreBackground', 'backgrounds/highscoreBackground.png');
		this.game.load.image('arena', 'backgrounds/battleArena.png');

		// game assets
		this.game.load.image('backButton', 'game/backButton.png');
		this.game.load.image('life', 'game/trumpheadLife.png');
		this.game.load.image('rock', 'game/clinton-head.png');
		this.game.load.image('obama', 'game/obama.png');
		this.game.load.image('bernie', 'game/bernie.png');
		this.game.load.image('bill', 'game/bill.png');
		this.game.load.image('bush', 'game/bush.png');
		this.game.load.image('jeb', 'game/jeb.png');
		this.game.load.spritesheet('kaboom', 'game/explode.png', 128, 128);
		this.game.load.image('orb', 'game/ivotedorb.png');
		this.game.load.image('healthLife', 'game/tupee.png');
		this.game.load.image('bullet', 'game/email.png');
		this.game.load.image('trash', 'game/pin.png');

		// sound assets
		this.game.load.image('soundIcon', 'game/soundIcon.png');
		this.game.load.image('soundIconDisabled', 'game/soundIconDisabled.png');

		// music jukebox
		this.game.load.audio('battleSong', ['audio/hailToChief.mp3']);
		this.game.load.audio('song1', ['audio/hailToChief.mp3']);
		this.game.load.audio('song2', ['audio/Marching-through-Georgia.mp3']);
		this.game.load.audio('song3', ['audio/THE-BATTLE-HYMN-OF-THE-REPUBLIC.mp3']);
		this.game.load.audio('song4', ['audio/The-Battle-Cry-of-Freedom.mp3']);

		// game audio
		this.game.load.audio('mainMusic', ['audio/hailToChief.mp3']);
		this.game.load.audio('button', ['audio/button.mp3']);
		this.game.load.audio('timesupsound', ['audio/timesup.mp3']);
		this.game.load.audio('livesLost', ['audio/warning.mp3']);
		this.game.load.audio('nextLevelSound', ['audio/nextlevel.mp3']);
		this.game.load.audio('orbhit', ['audio/orbhit.mp3']);
		this.game.load.audio('blast', ['audio/blaster.mp3']);
		this.game.load.audio('explosion', ['audio/explosion.mp3']);
		this.game.load.audio('crowdBoo', ['audio/boo.mp3']);
		this.game.load.audio('healthpacksound', ['audio/boo.mp3']);
		this.game.load.audio('error', ['audio/error.mp3']);
		this.game.load.audio('cashSound', ['audio/cash.mp3']);

		// character remarks
		this.game.load.audio('trumpRemark1', ['audio/remarks/bingBong.mp3']);

		this.game.load.audio('hillaryRemark1', ['audio/remarks/bingBong.mp3']);

		this.game.load.audio('jebRemark1', ['audio/remarks/bingBong.mp3']);

		this.game.load.audio('bushRemark1', ['audio/remarks/bingBong.mp3']);

		this.game.load.audio('obamaRemark1', ['audio/remarks/bingBong.mp3']);

		this.game.load.audio('bernieRemark1', ['audio/remarks/bingBong.mp3']);

	},
  	create: function(){

		var w = 800,
			h = 600; // height and width of screen size

  		var brandText = this.game.add.text(w/2, h/2 - 50, 'Planlodge Games', { font: '65px Dancing Script', fill: '#ffffff' });  
  		brandText.anchor.setTo(0.5,0.5);
		brandText.alpha = 0;

		// Adding the fading animations to the stars and rocks
		this.game.add.tween(brandText).to({
			alpha: 1
		}, 1000, Phaser.Easing.Linear.None, true, 0, 0, true);


		//start up music

		mainMusicSound = this.game.add.audio('mainMusic');
		mainMusicSound.volume = 0;
		this.game.add.tween(mainMusicSound).to({volume:0.3}, 6500, null, true);
		mainMusicSound.play('', 0, 1, true);
		mainMusicSound.onLoop.add(this.playMainMusic, this);


  		this.game.time.events.add(Phaser.Timer.SECOND * 3,function () {this.game.state.start("GameTitle"); }, this);
	},
	playMainMusic: function() {
        mainMusicSound.play('', 0, 1, true);
    }
};