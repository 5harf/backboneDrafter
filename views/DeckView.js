var DeckView = Backbone.View.extend({
  
  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
    this.render();
  },

  render: function() {
    this.$el.empty();
    var nodes = this.collection.map(function(card) {
      return new CardView({model: card}).render();
    });
    return this.$el.html('<h1>Deck</h1>').append(nodes);
  }
})

