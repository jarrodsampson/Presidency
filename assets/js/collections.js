var collections = function(game) {
    var buttonSound = "";
    var errorSound = "";
    var cashSound = "";
    var popupText = "";
    var candidateSpecsData = "";

    var buyBill = "";
    var buyBen = "";
    var buyBush = "";
    var buyBernie = "";
    var buyObama = "";
    var buyTrump = "";
    var buyHillary = "";
};

collections.prototype = {
    preload: function () {

        this.game.load.image('ivoted', 'game/ivoted.png');

        this.game.load.image('shopHillary', 'game/shopHillary.png');
        this.game.load.image('shopBen', 'game/shopBen.png');
        this.game.load.image('shopObama', 'game/shopObama.png');
        this.game.load.image('shopJeb', 'game/shopJeb.png');
        this.game.load.image('shopBush', 'game/shopBush.png');
        this.game.load.image('shopTrump', 'game/shopTrump.png');
        this.game.load.image('shopBernie', 'game/shopBernie.png');
        this.game.load.image('shopBill', 'game/shopBill.png');

        // ship specs
        this.game.load.text('candidateSpecs', 'levels/candidatesShop.json');


    },
    create: function () {

        // The scrolling starfield background
        background = this.game.add.tileSprite(0, 0, 800, 600, '2highscoreBackground');

        backButton = this.add.sprite(50, 50, "backButton");
        backButton.anchor.setTo(0.5, 0.5);
        backButton.scale.setTo(0.3, 0.3);
        backButton.inputEnabled = true;
        backButton.input.useHandCursor = true;
        backButton.events.onInputUp.add(this.mainMenu, this);

        candidateSpecsData = JSON.parse(this.game.cache.getText('candidateSpecs'));
        console.log(candidateSpecsData);

        errorSound = this.game.add.audio('error');
        cashSound = this.game.add.audio('cashSound');

        var highScoreText = this.game.add.text(w / 2, h / 2 - 250, 'Collections', {
            font: '40px Orbitron',
            fill: '#ffffff'
        });
        highScoreText.anchor.setTo(0.5, 0.5);

        popupText = this.game.add.text(w/2, h/2 - 200, '', { font: '35px helvetica', fill: '#ffffff' });
        popupText.anchor.setTo(0.5,0.5);

        var textDisplayGroup = this.game.add.physicsGroup();
        textDisplayGroup.alpha = 0;

        // Images for collections
        var shopBill = this.game.add.sprite(w - 800, h/2 - 200, 'shopBill');
        shopBill.scale.setTo(0.9, 0.9);

        var shopHillary = this.game.add.sprite(w - 600 , h/2 - 200, 'shopHillary');
        shopHillary.scale.setTo(0.9, 0.9);

        var shopJeb = this.game.add.sprite(w - 400 , h/2 - 200, 'shopJeb');
        shopJeb.scale.setTo(0.9, 0.9);

        var shopBush = this.game.add.sprite(w - 200 , h/2 - 200, 'shopBush');
        shopBush.scale.setTo(0.9, 0.9);

        var shopObama = this.game.add.sprite(w - 800, h/2 + 50, 'shopObama');
        shopObama.scale.setTo(0.9, 0.9);

        var shopBernie = this.game.add.sprite(w - 600 , h/2 + 50, 'shopBernie');
        shopBernie.scale.setTo(0.9, 0.9);

        var shopTrump = this.game.add.sprite(w - 400 , h/2 + 50, 'shopTrump');
        shopTrump.scale.setTo(0.9, 0.9);

        var shopBen = this.game.add.sprite(w - 200 , h/2 + 50, 'shopBen');
        shopBen.scale.setTo(0.9, 0.9);


        if (localStorage.getItem('presidency_inventory') !== null) {

            var candidatesOwned = JSON.parse(localStorage.getItem('presidency_inventory'));
            console.log("owned candidates", candidatesOwned.data.ownedCandidates);

            for (var t = 0; t < candidatesOwned.data.ownedCandidates.length; t++) {
                console.log("owned candidates", candidatesOwned.data.ownedCandidates[t]);
            }

            if (candidatesOwned.data.ownedCandidates.bill > 0) {
                buyBill = this.game.add.text(w - 710, h/2 + 10, "Purchased", { font: '30px helvetica', fill: '#fff', align: 'center' });
                buyBill.anchor.setTo(0.5,0.5);

            } else {
                buyBill = this.game.add.text(w - 710, h/2 + 10, "Buy", { font: '30px helvetica', fill: '#fff', align: 'center' });
                buyBill.inputEnabled = true;
                buyBill.input.useHandCursor = true;
                buyBill.anchor.setTo(0.5,0.5);
                buyBill.name = "Bill";
                buyBill.number = 0;
                buyBill.events.onInputUp.add(this.buyCandidate, this);
            }

            if (candidatesOwned.data.ownedCandidates.hillary > 0) {
                buyHillary = this.game.add.text(w - 510, h/2 + 10, "Purchased", { font: '30px helvetica', fill: '#fff', align: 'center' });
                buyHillary.anchor.setTo(0.5,0.5);

            } else {
                buyHillary = this.game.add.text(w - 510, h/2 + 10, "Buy", { font: '30px helvetica', fill: '#fff', align: 'center' });
                buyHillary.inputEnabled = true;
                buyHillary.input.useHandCursor = true;
                buyHillary.anchor.setTo(0.5,0.5);
                buyHillary.name = "Hillary";
                buyHillary.number = 1;
                buyHillary.events.onInputUp.add(this.buyCandidate, this);
            }

            if (candidatesOwned.data.ownedCandidates.jeb > 0) {
                buyJeb = this.game.add.text(w - 310, h/2 + 10, "Purchased", { font: '30px helvetica', fill: '#fff', align: 'center' });
                buyJeb.anchor.setTo(0.5,0.5);

            } else {
                buyJeb = this.game.add.text(w - 310, h/2 + 10, "Buy", { font: '30px helvetica', fill: '#fff', align: 'center' });
                buyJeb.inputEnabled = true;
                buyJeb.input.useHandCursor = true;
                buyJeb.anchor.setTo(0.5,0.5);
                buyJeb.name = "Jeb";
                buyJeb.number = 2;
                buyJeb.events.onInputUp.add(this.buyCandidate, this);
            }

            if (candidatesOwned.data.ownedCandidates.bush > 0) {
                buyBush = this.game.add.text(w - 110, h/2 + 10, "Purchased", { font: '30px helvetica', fill: '#fff', align: 'center' });
                button.anchor.setTo(0.5,0.5);

            } else {
                buyBush = this.game.add.text(w - 110, h/2 + 10, "Buy", { font: '30px helvetica', fill: '#fff', align: 'center' });
                buyBush.inputEnabled = true;
                buyBush.input.useHandCursor = true;
                buyBush.anchor.setTo(0.5,0.5);
                buyBush.name = "Bush";
                buyBush.number = 3;
                buyBush.events.onInputUp.add(this.buyCandidate, this);
            }


            // second row

            if (candidatesOwned.data.ownedCandidates.obama > 0) {
                buyObama = this.game.add.text(w - 710, h/2 + 260, "Purchased", { font: '30px helvetica', fill: '#fff', align: 'center' });
                buyObama.anchor.setTo(0.5,0.5);

            } else {
                buyObama = this.game.add.text(w - 710, h/2 + 260, "Buy", { font: '30px helvetica', fill: '#fff', align: 'center' });
                buyObama.inputEnabled = true;
                buyObama.input.useHandCursor = true;
                buyObama.anchor.setTo(0.5,0.5);
                buyObama.name = "Obama";
                buyObama.number = 4;
                buyObama.events.onInputUp.add(this.buyCandidate, this);
            }

            if (candidatesOwned.data.ownedCandidates.bernie > 0) {
                buyBernie = this.game.add.text(w - 510, h/2 + 260, "Purchased", { font: '30px helvetica', fill: '#fff', align: 'center' });
                buyBernie.anchor.setTo(0.5,0.5);

            } else {
                buyBernie = this.game.add.text(w - 510, h/2 + 260, "Buy", { font: '30px helvetica', fill: '#fff', align: 'center' });
                buyBernie.inputEnabled = true;
                buyBernie.input.useHandCursor = true;
                buyBernie.anchor.setTo(0.5,0.5);
                buyBernie.name = "Bernie";
                buyBernie.number = 5;
                buyBernie.events.onInputUp.add(this.buyCandidate, this);
            }

            if (candidatesOwned.data.ownedCandidates.trump > 0) {
                buyTrump = this.game.add.text(w - 310, h/2 + 260, "Purchased", { font: '30px helvetica', fill: '#fff', align: 'center' });
                buyTrump.anchor.setTo(0.5,0.5);

            } else {
                buyTrump = this.game.add.text(w - 310, h/2 + 260, "Buy", { font: '30px helvetica', fill: '#fff', align: 'center' });
                buyTrump.inputEnabled = true;
                buyTrump.input.useHandCursor = true;
                buyTrump.anchor.setTo(0.5,0.5);
                buyTrump.name = "Trump";
                buyTrump.number = 6;
                buyTrump.events.onInputUp.add(this.buyCandidate, this);
            }

            if (candidatesOwned.data.ownedCandidates.ben > 0) {
                buyBen = this.game.add.text(w - 110, h/2 + 260, "Purchased", { font: '30px helvetica', fill: '#fff', align: 'center' });
                buyBen.anchor.setTo(0.5,0.5);

            } else {
                buyBen = this.game.add.text(w - 110, h/2 + 260, "Buy", { font: '30px helvetica', fill: '#fff', align: 'center' });
                buyBen.inputEnabled = true;
                buyBen.input.useHandCursor = true;
                buyBen.anchor.setTo(0.5,0.5);
                buyBen.name = "Ben";
                buyBen.number = 7;
                buyBen.events.onInputUp.add(this.buyCandidate, this);
            }

        }


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
    },
    buyCandidate: function(item) {

        console.log(item.name);
        console.log(item.number);

        var number = item.number;

        var button = "buy" + item.name;
        console.log(button);

        if (item.name == "Hillary") {
            if (buyHillary.text == "Purchased") {
                this.popupHandler("owned", item.name);
                return false;
            }
        } else if (item.name == "Bill") {
            if (buyBill.text == "Purchased") {
                this.popupHandler("owned", item.name);
                return false;
            }
        } else if (item.name == "Jeb") {
            if (buyJeb.text == "Purchased") {
                this.popupHandler("owned", item.name);
                return false;
            }
        } else if (item.name == "Bush") {
            if (buyBush.text == "Purchased") {
                this.popupHandler("owned", item.name);
                return false;
            }
        } else if (item.name == "Obama") {
            if (buyObama.text == "Purchased") {
                this.popupHandler("owned", item.name);
                return false;
            }
        } else if (item.name == "Bernie") {
            if (buyBernie.text == "Purchased") {
                this.popupHandler("owned", item.name);
                return false;
            }
        } else if (item.name == "Trump") {
            if (buyTrump.text == "Purchased") {
                this.popupHandler("owned", item.name);
                return false;
            }
        } else if (item.name == "Ben") {
            if (buyBen.text == "Purchased") {
                this.popupHandler("owned", item.name);
                return false;
            }
        }



        if (localStorage.getItem('presidency_inventory') !== null) {

            itemsStored = JSON.parse(localStorage.getItem('presidency_inventory'));
            var alreadyOwnedCandidates = itemsStored.data;
            console.log("look here", alreadyOwnedCandidates);
            console.log("YOUR ITEMS", itemsStored.data.obamas);

            if (itemsStored.data.obamas >= candidateSpecsData.candidateData.candidates[number].obamas &&
                itemsStored.data.bushs >= candidateSpecsData.candidateData.candidates[number].bushs &&
                itemsStored.data.bernies >= candidateSpecsData.candidateData.candidates[number].bernies &&
                itemsStored.data.bills >= candidateSpecsData.candidateData.candidates[number].bills &&
                itemsStored.data.votes >= candidateSpecsData.candidateData.candidates[number].votes) {

                itemsStored.data.obamas -= candidateSpecsData.candidateData.candidates[number].obamas;
                itemsStored.data.bushs -= candidateSpecsData.candidateData.candidates[number].bushs;
                itemsStored.data.bernies -= candidateSpecsData.candidateData.candidates[number].bernies;
                itemsStored.data.bills -= candidateSpecsData.candidateData.candidates[number].bills;
                itemsStored.data.votes -= candidateSpecsData.candidateData.candidates[number].votes;

                var hillaryPoint;
                var billPoint;
                var jebPoint;
                var bushPoint;
                var obamaPoint;
                var berniePoint;
                var trumpPoint;
                var benPoint;


                if (item.name == "Hillary") {
                    buyHillary.text = "Purchased";
                    hillaryPoint = 1;
                } else if (item.name == "Bill") {
                    buyBill.text = "Purchased";
                    billPoint = 1;
                } else if (item.name == "Jeb") {
                    buyJeb.text = "Purchased";
                    jebPoint = 1;
                } else if (item.name == "Bush") {
                    buyBush.text = "Purchased";
                    bushPoint = 1;
                } else if (item.name == "Obama") {
                    buyObama.text = "Purchased";
                    obamaPoint = 1;
                } else if (item.name == "Bernie") {
                    buyBernie.text = "Purchased";
                    berniePoint = 1;
                } else if (item.name == "Trump") {
                    buyTrump.text = "Purchased";
                    trumpPoint = 1;
                } else if (item.name == "Ben") {
                    buyBen.text = "Purchased";
                    benPoint = 1;
                }

                var saveJSON = '{"data":{"ownedCandidates":{"jeb":' + jebPoint + ',"bush":' + bushPoint + ',"bill":' + billPoint + ',"obama":' + obamaPoint + ',"bernie":' + berniePoint + ',"hillary":' + hillaryPoint + ',"ben":' + benPoint + ',"trump":' + trumpPoint + '},"bernies":' + itemsStored.data.bernies + ',"bills":' + itemsStored.data.bills + ',"bushs":' + itemsStored.data.bushs + ',"obamas":' + itemsStored.data.obamas + ',"votes":' + itemsStored.data.votes + '}}';

                localStorage.setItem('presidency_inventory', saveJSON);

                console.log('saved');
                // play sound
                this.onItemBought();

                this.popupHandler("success", item.name);

            } else {
                this.onError();
                console.log('Not enough');
                this.popupHandler("fail", item.name);
            }


        }

    },
    popupHandler: function (type, candidateName) {


        if (type == "success")
        {
            popupText.text = "Purchased " + candidateName;
        } else if (type == "owned") {
            popupText.text = "You already own " + candidateName;
            this.onError();
        } else {
            popupText.text = "Not Enough Resources to buy " + candidateName;
        }

        var fadeTween = this.game.add.tween(popupText).to({
            alpha: 1
        }, 700, Phaser.Easing.Linear.None, true, 0, 0, true);
        fadeTween.onComplete.addOnce(function() {
            fadeTween.to({
                alpha: 0
            }, 300, Phaser.Easing.Linear.None, true, 0, 0, true);
        }, this);
        fadeTween.start();

    },
    onError: function () {
        errorSound.play();
    },
    onItemBought: function () {
        cashSound.play();
    }

};