var PlayerView = Backbone.View.extend({
  initialize: function() {
    this.pack = this.model.get('pack');
    this.deck = this.model.get('deck');
    this.packView = new PackView({collection: this.pack})
    this.deckView = new DeckView({collection: this.deck})
    this.pack.loadPack();
    this.listenTo(this.pack, 'remove', this.addToDeck)
    this.render();
  },

  addToDeck: function(card) {
    this.deck.add(card);
    console.log(this.deck);
  },

  render: function() {
    return this.$el.html([
      this.packView.$el,
      this.deckView.$el
          ]);
  }
  
})
