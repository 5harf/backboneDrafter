var Card = Backbone.Model.extend({
  defaults: {
    multiverseid: '',
    cardname: '',
    PackId: ''
  },

  pick: function() {
    if (this.get('PackId') === '') {
      this.trigger('pick', this);
    } else {
      console.log('TRIGGERING SECOND');
      this.trigger('pickSecond', this);
    }
  }
  


})
