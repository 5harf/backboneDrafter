var Pack = Backbone.Collection.extend({
  model: Card,

  initialize: function() {
    this.listenTo(this, 'pick', this.executePick);
    this.listenTo(this, 'pickSecond', this.executeSecond);

  },

  executePick: function(card) {
    // $.ajax({
    //   type: 'POST',
    //   url: 'http://localhost:3000/decks',
    //   data: JSON.stringify({card: card, username: 'DefaultUsername'}),
    //   contentType: 'application/json',
    //   success: function(json) {
    //     console.log('Card sent to server')
    //   },
    //   complete: function() {
    //   }
    // });
    this.remove(card)
    this.trigger('pass', card);
  },

    executeSecond: function(card) {
    // $.ajax({
    //   type: 'POST',
    //   url: 'http://localhost:3000/decks',
    //   data: JSON.stringify({card: card, username: 'DefaultUsername'}),
    //   contentType: 'application/json',
    //   success: function(json) {
    //     console.log('Card sent to server')
    //   },
    //   complete: function() {
    //   }
    // });
    this.remove(card)
    this.trigger('passSecond', card);
  },

  url: 'http://api.mtgapi.com/v2/booster/bfz',

  loadPack: function() {
    this.fetch();
  },
  parse: function(response) {
    var result = _.map(response, function(card) {
      return {multiverseid: card.multiverseid, cardname: card.name}
    });
    console.log(result);
    return result;
  }

})
