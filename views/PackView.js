var PackView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'remove', this.render);
    this.render();
  },

  render: function() {
    this.$el.empty();
    var nodes = this.collection.map(function(card) {
      return new CardView({model: card}).render();
    });
    this.$el.append(nodes);
    $('body').append(this.$el);
  }
})
