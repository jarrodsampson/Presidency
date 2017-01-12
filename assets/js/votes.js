var votes = function(game) {var buttonSound = ""; };

votes.prototype = {
    preload: function () {

        this.game.load.image('ivoted', 'game/ivoted.png');

    },
    create: function () {

        var responses = [
          'You Are Just Starting Out, You need to Find a Away to Make America Great Again!',
          'The Republican Party Still Thinks you are a laughing Stock, show them they\'re Wrong!',
          'Hillary Doesn\'t think her emails are a big deal. Show her you mean business!',
          'So Now you\'re the top Republican Candidate, get to the top by any means necessary!',
          'The Race is close, don\'t let your twitter feed be what stops you from winning!',
          'You\'re a serious candidate now, only a month away from the polls, keep getting votes!',
          'The week of the election, seal the deal!',
          'You\'ve won the presidency!'
        ];

        var selectedText = "";

        // The scrolling starfield background
        background = this.game.add.tileSprite(0, 0, 800, 600, 'highscoreBackground');

        backButton = this.add.sprite(50, 50, "backButton");
        backButton.anchor.setTo(0.5, 0.5);
        backButton.scale.setTo(0.3, 0.3);
        backButton.inputEnabled = true;
        backButton.input.useHandCursor = true;
        backButton.events.onInputUp.add(this.mainMenu, this);

        var votesText = this.game.add.text(w / 2, h / 2 - 250, 'Votes', {
            font: '40px Orbitron',
            fill: '#ffffff',
            align: 'center'
        });
        votesText.anchor.setTo(0.5, 0.5);
        votesText.wordWrap = true;
        votesText.wordWrapWidth = window.innerWidth - 50;


        // get your garage data
        // set inventory items
        if (localStorage.getItem('presidency_inventory') !== null) {
            itemsStored = JSON.parse(localStorage.getItem('presidency_inventory'));
        }

        var votesCollected = this.game.add.sprite(w/2 - 50, h/2 + 100, 'ivoted');
        votesCollected.scale.setTo(0.3, 0.3);

        var textDisplayGroup = this.game.add.physicsGroup();
        textDisplayGroup.alpha = 0;

        // conditional text

        if (itemsStored.data.orbs == 0) {
            selectedText = responses[0];
        }
        else if (itemsStored.data.orbs > 0 && itemsStored.data.orbs < 10) {
            selectedText = responses[1];
        }
        else if (itemsStored.data.orbs >= 10 && itemsStored.data.orbs < 20) {
            selectedText = responses[2];
        }
        else if (itemsStored.data.orbs >= 20 && itemsStored.data.orbs < 40) {
            selectedText = responses[3];
        }
        else if (itemsStored.data.orbs >= 40 && itemsStored.data.orbs < 60) {
            selectedText = responses[4];
        }
        else if (itemsStored.data.orbs >= 60 && itemsStored.data.orbs < 85) {
            selectedText = responses[5];
        }
        else if (itemsStored.data.orbs >= 85 && itemsStored.data.orbs <= 99) {
            selectedText = responses[6];
        }
        else if (itemsStored.data.orbs >= 100) {
            selectedText = responses[7];
        }

        var electText = this.game.add.text(w/2 - 10, h/2 - 30 + 0,
            selectedText, {
                font: '32px Helvetica',
                fill: '#fff',
                align: 'center'
            },
            textDisplayGroup
        );
        electText.anchor.setTo(0.5,0.5);
        electText.wordWrap = true;
        electText.wordWrapWidth = window.innerWidth - 50;

        // text displayed underneath of gains
        var voteText = this.game.add.text(w/2 - 10, h/2 + 100 + 130,
            "+ " + itemsStored.data.orbs, {
                font: '18px Helvetica',
                fill: '#fff'
            },
            textDisplayGroup
        );


        // Adding the fading animations to the stars and rocks
        this.game.add.tween(textDisplayGroup).to({
            alpha: 1
        }, 1000, Phaser.Easing.Linear.None, true, 0, 0, true);

    },
    update: function() {
        //  Scroll the background
        //starfield.tilePosition.y += 2;
        //starfield.tilePosition.x += 3;
    },
    mainMenu: function() {
        buttonSound.play();
        this.game.state.start("GameTitle");
    }
};