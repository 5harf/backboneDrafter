var AppView = Backbone.View.extend({

  initialize: function() {
    this.playerView = new PlayerView({model: new Player})
    this.listenTo(this.playerView.pack, 'pass', function() {
      console.log('heard the pass');
    })
  },

  render: function() {
    return this.$el.html(this.playerView.$el);
  }
  // make the app give packs to the player from a collection of packs
})
