var Sequelize = require("sequelize");
var orm = new Sequelize("drafter", "root", "");


// we define the models we need using js--we don't need a schema file!
var User = orm.define('User', {
  username: Sequelize.STRING
});

var Pack = orm.define('Pack', {
});

var Packcard = orm.define('Packcard', {
  cardname: Sequelize.STRING,
  multiverseid: Sequelize.INTEGER
});

var Deckcard = orm.define('Deckcard', {
  cardname: Sequelize.STRING,
  multiverseid: Sequelize.INTEGER
})

Packcard.belongsTo(Pack);
Deckcard.belongsTo(User);
Pack.hasMany(Packcard);
User.hasMany(Deckcard);

// puts a UserId column on each Message instance
// also gives us the `.setUser` method, available inside the .success callback
// after creating a new instance of Message
// Message.belongsTo(User);
// enables bi-directional associations between Users and Messages
// User.hasMany(Message);


User.sync()
.then(function() {
  Pack.sync();
})
.then(function() {
  Packcard.sync();
})
.then(function() {
  Deckcard.sync({force: true});
})
.catch(function(err) {
  throw err
});
// creates these tables in MySQL if they don't already exist. Pass in {force: true}
// to drop any existing user and message tables and make new ones.

exports.User = User;
exports.Pack = Pack;
exports.Packcard = Packcard;
exports.Deckcard = Deckcard;

