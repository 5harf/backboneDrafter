var Card = Backbone.Model.extend({
  // url: 'http://api.mtgapi.com/v2/booster/bfz',

  defaults: {
    id: '',
    name: ''
  },

  pick: function() {
    console.log('pick triggered');
    this.trigger('pick');
  }
  


})
