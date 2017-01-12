var gameTitle = function(game) {var buttonSound = ""; };

gameTitle.prototype = {
    create: function() {
        var w = 800,
            h = 600; // height and width of screen size

            buttonSound = this.game.add.audio('button'); 


        if (!mainMusicSound.isPlaying)
        {
            mainMusicSound.volume = 0;
            this.game.add.tween(mainMusicSound).to({volume:0.3}, 6500, null, true);
            mainMusicSound.play('', 0, 1, true);
            mainMusicSound.onLoop.add(this.playMainMusic, this);
        }
        

        // background
        background = this.game.add.tileSprite(0, 0, 800, 600, 'mainBackground');

        var textDisplayGroup = this.game.add.physicsGroup();
        textDisplayGroup.alpha = 0;

        var gameTitle = this.game.add.text(w / 2, h / 2 - 200, 'Trump Presidency', {
            font: '40px Orbitron',
            fill: '#ffffff'
        }, textDisplayGroup);
        gameTitle.anchor.setTo(0.5, 0.5);

        var startGameButton = this.game.add.text(w / 2 - 200, h / 2 - 100, 'Start Game', {
            font: '30px Helvetica',
            fill: '#ffffff'
        }, textDisplayGroup);
        startGameButton.inputEnabled = true;
        startGameButton.input.useHandCursor = true;
        startGameButton.events.onInputUp.add(this.playTheGame, this);
        startGameButton.anchor.setTo(0.5, 0.5);

        var startCreditsButton = this.game.add.text(w/2 + 200, h/2 - 100, 'About', {
            font: '30px Helvetica',
            fill: '#ffffff'
        }, textDisplayGroup);
        startCreditsButton.inputEnabled = true;
        startCreditsButton.input.useHandCursor = true;
        startCreditsButton.events.onInputUp.add(this.showCredits, this);
        startCreditsButton.anchor.setTo(0.5, 0.5);

        var shopButton = this.game.add.text(w/2, h/2 + 0, 'Votes', {
            font: '30px Helvetica',
            fill: '#fff'
        }, textDisplayGroup);
        shopButton.inputEnabled = true;
        shopButton.input.useHandCursor = true;
        shopButton.events.onInputUp.add(this.votes, this);
        shopButton.anchor.setTo(0.5, 0.5);

        var garageButton = this.game.add.text(w/2 + 0, h/2 + 100, 'Collections', {
            font: '30px Helvetica',
            fill: '#fff'
        }, textDisplayGroup);
        garageButton.inputEnabled = true;
        garageButton.input.useHandCursor = true;
        garageButton.events.onInputUp.add(this.collections, this);
        garageButton.anchor.setTo(0.5, 0.5);

        var highScores = this.game.add.text(w/2 - 200, h/2 + 200, 'High Scores', {
            font: '30px Helvetica',
            fill: '#ffffff'
        }, textDisplayGroup);
        highScores.anchor.setTo(0.5, 0.5);

        var helpButton = this.game.add.text(w/2 + 200, h/2 + 200, 'Help/Instructions', {
            font: '30px Helvetica',
            fill: '#ffffff'
        }, textDisplayGroup);
        helpButton.inputEnabled = true;
        helpButton.input.useHandCursor = true;
        helpButton.events.onInputUp.add(this.showInstructions, this);
        helpButton.anchor.setTo(0.5, 0.5);

        // Adding the fading animations to the stars and rocks
        this.game.add.tween(textDisplayGroup).to({
            alpha: 1
        }, 1000, Phaser.Easing.Linear.None, true, 0, 0, true);


        // set storage
        if (localStorage.getItem('presidency_highscores') === null) {
            localStorage.setItem('presidency_highscores', "[]");
            console.log("Added HighScores");
        }

        if (localStorage.getItem('presidency_bestScore') === null) {
            localStorage.setItem('presidency_bestScore', "");
            console.log("Added BestScore");
        }

        // set inventory items
        if (localStorage.getItem('presidency_inventory') === null) {
            localStorage.setItem('presidency_inventory', '{"data":{"ownedCandidates":{"jeb":0,"bush":0,"bill":0,"obama":0,"bernie":0,"hillary":0,"ben":0,"trump":0},"bernies":0,"bills":0,"bushs":0,"jebs":0,"obamas":0,"votes":0}}');
            console.log("Added Inventory");
            console.log(JSON.parse(localStorage.getItem('presidency_inventory')));

        } else {
            console.log(JSON.parse(localStorage.getItem('presidency_inventory')));
        }




        console.log(JSON.parse(localStorage.getItem('presidency_highscores')).length);
        if (JSON.parse(localStorage.getItem('presidency_highscores')).length >= 1) {
            highScores.inputEnabled = true;
            highScores.input.useHandCursor = true;
            highScores.events.onInputUp.add(this.highScores, this);
        } else {
            highScores.fill = '#565656';
        }
    },
    update: function() {
        //  Scroll the background
        //starfield.tilePosition.y += 2;
        //starfield.tilePosition.x += 3;
    },
    playTheGame: function() {
        buttonSound.play();
        mainMusicSound.stop();
        this.game.state.start("TheGame");
    },
    highScores: function() {
        buttonSound.play();
        this.game.state.start("highScores");
    },
    showCredits: function() {
        buttonSound.play();
        this.game.state.start("TheCredits");
    },
    showInstructions: function() {
        buttonSound.play();
        this.game.state.start("Help");
    },
    votes: function() {
        buttonSound.play();
        this.game.state.start("Votes");
    },
    collections: function() {
        buttonSound.play();
        this.game.state.start("Collections");
    },
    playMainMusic: function() {
        mainMusicSound.play('', 0, 1, true);
    }
};