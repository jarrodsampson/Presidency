var theCredits = function(game){
	console.log("Credits Loaded");
};
  
theCredits.prototype = {
	preload: function(){
          
	},
  	create: function(){


		var w = 800,
			h = 600; // height and width of screen size

  		var descriptionText = "Fly through outter space as you take on various asteriods while collecting " +
				"various items to build better ships and return home. Get through bonus rounds and hop your way " +
				"through this space-themed game edition.";
		
  		// The scrolling starfield background
        background = this.game.add.tileSprite(0, 0, 800, 600, 'creditBackground');

        var startGameText = this.game.add.text(w/2, h/2 - 250, 'About', { font: '40px Orbitron', fill: '#ffffff' });
  		startGameText.anchor.setTo(0.5,0.5);

  		//var createdby = this.game.add.text(w/2, h/2 - 150, 'Created By: Jarrod Sampson', { font: '32px Helvetica', fill: '#ffffff' });
  		//createdby.anchor.setTo(0.5,0.5);

  		var description = this.game.add.text(w/2, h/2 - 0, descriptionText, { font: '32px Helvetica', fill: '#ffffff', align: 'center'});
  		description.anchor.setTo(0.5,0.5);
		description.wordWrap = true;
		description.wordWrapWidth = window.innerWidth - 50;

  		var ourWebsite = this.game.add.text(w/2, h/2 + 250, 'Visit My Website: Planlodge.com', { font: '32px Helvetica', fill: '#ffffff' });  
  		ourWebsite.anchor.setTo(0.5,0.5);
  		ourWebsite.inputEnabled = true;
	    ourWebsite.input.useHandCursor = true;
	    ourWebsite.events.onInputUp.add(this.website, this);

        backButton = this.add.sprite(50,50,"backButton");
        backButton.anchor.setTo(0.5,0.5);
        backButton.scale.setTo(0.3, 0.3);
        backButton.inputEnabled = true;
	    backButton.input.useHandCursor = true;
	    backButton.events.onInputUp.add(this.mainMenu, this);
		
	},
	update: function(){
          //  Scroll the background
        //starfield.tilePosition.y += 2;
        //starfield.tilePosition.x += 3;
	},
	website: function(){
          window.open("http://www.planlodge.com", "_blank");
	},
	mainMenu: function(){
          buttonSound.play();
          this.game.state.start("GameTitle");
	}
};