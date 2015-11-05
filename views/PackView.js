var PackView = Backbone.View.extend({
  
  initialize: function() {
    this.listenTo(this.collection, 'sync add', this.render);
    this.listenTo(this.collection, 'remove', this.render);
    this.listenTo(this.collection, 'reset', this.render);
    this.render();
  },

  render: function() {
    this.$el.empty();
    var nodes = this.collection.map(function(card) {
      return new CardView({model: card}).render();
    });
    return this.$el.html('<h1>Pack</h1>').append(nodes);
  }
})
