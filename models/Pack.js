var Pack = Backbone.Collection.extend({
  model: Card,

  initialize: function() {
    this.listenTo(this.model, 'pick', this.executePick);
  },

  executePick: function() {

  },

  url: 'http://api.mtgapi.com/v2/booster/bfz',
  loadPack: function() {
    this.fetch();
  },
  parse: function(response) {
    // console.log(response);
    var result = _.map(response, function(card) {
      return {id: card.multiverseid, name: card.name}
    });
    console.log(result);
    return result;
  }

})
