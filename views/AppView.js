var AppView = Backbone.View.extend({

  initialize: function() {
    this.server = 'http://localhost:3000/packs';
    this.playerView = new PlayerView({model: new Player});
    this.listenTo(this.playerView.pack, 'pass', this.passFirstPack);
    this.listenTo(this.playerView.pack, 'passSecond', this.passPack);
  },

  passFirstPack: function(card) {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/firstPack',
      data: JSON.stringify({pack: this.playerView.pack}),
      contentType: 'application/json',
      success: function(data) {
        this.playerView.packView.collection.add(data);
      }.bind(this),
      complete: function() {
      }
    });
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/decks',
      data: JSON.stringify({card: card, username: 'DefaultUsername'}),
      contentType: 'application/json',
      success: function(json) {
        console.log('Card sent to server')
      },
      complete: function() {
      }
    });
    this.playerView.pack.reset();
  },

  passPack: function(card) {
    $.ajax({
      type: 'POST',
      url: this.server,
      data: JSON.stringify({pack: this.playerView.pack}),
      contentType: 'application/json',
      success: function(data) {
        this.playerView.packView.collection.add(data);
      }.bind(this),
      complete: function() {
      }
    });
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/decks',
      data: JSON.stringify({card: card, username: 'DefaultUsername'}),
      contentType: 'application/json',
      success: function(json) {
        console.log('Card sent to server')
      },
      complete: function() {
      }
    });
    this.playerView.pack.reset();
  },



  render: function() {
    return this.$el.html(this.playerView.$el);
  },

  switchPack: function() {
    
  }
  // make the app give packs to the player from a collection of packs
})
