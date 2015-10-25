// var app = new AppView({model: new App})
var player = new Player;
var playerView = new PlayerView({
  model: player
});

$('body').append(playerView.render())

