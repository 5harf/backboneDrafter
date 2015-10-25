var CardView = Backbone.View.extend({
  template: _.template('<img class="card" src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=<%= id %>&type=card">'),

  el: '<span>',

  events: {
    'click': function() {
      this.model.pick()
    }
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }



});
