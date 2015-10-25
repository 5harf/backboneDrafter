var PackView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'remove', this.render);
    this.render();
  },

  render: function() {
    var nodes = this.collection.map(function(card) {
      return new CardView({model: card}).render();
    });
    console.log(nodes);
    this.$el.append(nodes);
    console.log(this.$el);
    $('body').append(this.$el);
  }
})
