var game;

window.onload = function() {
    game = new Phaser.Game(400, 640, Phaser.AUTO, "ph_game");
    game.state.add("StateMain", StateMain);
    game.state.start("StateMain");
}