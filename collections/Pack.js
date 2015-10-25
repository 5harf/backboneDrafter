var Pack = Backbone.Collection.extend({
  model: Card,

  initialize: function() {
    this.listenTo(this, 'pick', this.executePick);
  },

  executePick: function(card) {
    this.remove(card)
  },

  url: 'http://api.mtgapi.com/v2/booster/bfz',
  loadPack: function() {
    this.fetch();
  },
  parse: function(response) {
    var result = _.map(response, function(card) {
      return {id: card.multiverseid, name: card.name}
    });
    return result;
  }

})
