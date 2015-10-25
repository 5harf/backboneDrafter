var Card = Backbone.Model.extend({
  // url: 'http://api.mtgapi.com/v2/booster/bfz',

  defaults: {
    id: '',
    name: ''
  },

  pick: function() {
    this.trigger('pick', this);
  }
  


})
