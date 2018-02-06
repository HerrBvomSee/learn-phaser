var StateMain = {

    preload:function() {
        game.load.image("background", "./images/backgrounds/desert-background.png");
        game.load.spritesheet("ship", "./images/spritesheets/ship.png", 16, 24, 10);
    },

    create:function() {
        this.background = game.add.sprite(0, 0, "background");
        this.background.height = game.height;
        this.background.width = game.width;
        
        this.ship = game.add.sprite(100, 100, "ship");
        this.ship.inputEnabled = true;
        this.ship.events.onInputUp.add(this.clickHandler, this);

        this.ship.animations.add('fly', [2, 7], 4, true);
        this.ship.animations.add('left', [1, 6, 0, 5, 7], 6, false);

        this.ship.animations.play('fly');

        this.ship.frame = 2;
        this.ship.anchor.set(0.5, 0.5);
        this.ship.x = game.world.centerX;
        this.ship.y = game.height * 0.95;

        this.cursors = game.input.keyboard.createCursorKeys();
    },

    clickHandler:function() {
        this.ship.animations.stop();
    },

    udpate:function() {

    }

}