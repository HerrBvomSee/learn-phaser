var StateMain = {

    preload:function() {
        game.load.image("background", "./images/backgrounds/desert-background.png");
    },

    create:function() {
        this.background = game.add.sprite(0, 0, "background");
        this.background.height = game.height;
        this.background.width = game.width;
    },

    udpate:function() {

    }

}