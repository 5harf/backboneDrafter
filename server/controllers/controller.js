var db = require('../db');
var Promise = require('bluebird');
var Sequelize = require("sequelize");

// User.bulkCreate([
//   { username: 'barfooz', isAdmin: true },
//   { username: 'foo', isAdmin: true },
//   { username: 'bar', isAdmin: false }
// ]).then(function() { // Notice: There are no arguments here, as of right now you'll have to...
//   User.findAll().then(function(users) {
//     console.log(users) // ... in order to get the array of user objects
//   })
// })

var num = 70
module.exports = {
  firstPack: {
    get: function (req, res) {
      // db.Message.findAll({include: [db.User]})
      //   .then(function(messages) {
      //     res.json(messages);
      //   });
    },
    post: function (req, res) {
      db.Pack.create()
      .then(function(PackId) {
        PackId = JSON.parse(JSON.stringify(PackId)).id
        var pack = req.body.pack
        var bulkCreateArray = pack.map(function(card) {
          return {multiverseid: card.multiverseid, cardname: card.cardname, PackId: PackId }
        });
        return db.Packcard.bulkCreate(bulkCreateArray)
      })
      .then(function(currentPack) {
        var pack = JSON.parse(JSON.stringify(currentPack))
        var currentId = pack[0].PackId;
        return db.Packcard.findAll({
          attributes: ['multiverseid', 'cardname', 'PackId'],
          where: {PackId: num}
        });
      })
      .then(function(pack) {
        res.send(pack);
        var pack = JSON.parse(JSON.stringify(pack))
        return db.Packcard.destroy({
          where: {PackId: pack[0].PackId}
        });
      })
      .catch(function(err) {
        throw err;
      })
    }
    
  },

  packs: {
    get : function() {},

    post: function (req, res) {
      // console.log('put body: ' , req.body);
      //maybe have to change reference to PackId in the where object
      db.Pack.findOrCreate({where: {id: req.body.pack[0].PackId}}) 
      .then(function(PackId) {
        console.log('PREPACK', PackId)
        PackId = JSON.parse(JSON.stringify(PackId))[0].id
        var pack = req.body.pack
        console.log('POSTJSONPARSE', PackId)
        console.log('PACK', pack);

        var bulkCreateArray = pack.map(function(card) {
          return {multiverseid: card.multiverseid, cardname: card.cardname, PackId: PackId }
        });

        console.log('BULKARRAY' , bulkCreateArray);
        return db.Packcard.bulkCreate(bulkCreateArray)
      })
      .then(function(currentPack) {
        var pack = JSON.parse(JSON.stringify(currentPack))
        var currentId = pack[0].PackId;
        return db.Packcard.findAll({
          attributes: ['multiverseid', 'cardname', 'PackId'],
          where: {PackId: ++num}
        });
      })
      .then(function(pack) {
        res.send(pack);
        var pack = JSON.parse(JSON.stringify(pack))
        return db.Packcard.destroy({
          where: {PackId: pack[0].PackId}
        });
      })
      .catch(function(err) {
        throw err;
      })
    }

  },

  // thing: {
  //   post: function() {

  //   }
  // },

  decks: {
    get: function (req, res) {
      // db.User.findAll()
      //   .then(function(users) {
      //     res.json(users);
      //   });
    },
    post: function (req, res) {
      db.User.findOrCreate({where: {username: req.body.username}})
      .then(function(user) {
        userid = JSON.parse(JSON.stringify(user))
        id = userid[0].id
        db.Deckcard.create({UserId: id, multiverseid: req.body.card.multiverseid, cardname: req.body.card.cardname})
        .then(function() {
          res.sendStatus(201);
        })
      });
    }
  }

  // decks: {

  //   // get: function (req, res) {
  //   //   db.User.findAll()
  //   //     .then(function(users) {
  //   //       res.json(users);
  //   //     });
  //   // },

    // post: function (req, res) {
    //   db.User.findOrCreate({where: {username: req.body.username}})
    //   .then(function(user) {
    //     userid = JSON.parse(JSON.stringify(user))[0].id
    //     db.Deckcard.create({UserId: userid, multiverseid: req.body.card.id, cardname: req.body.card.name})
    //     .then(function() {
    //       res.sendStatus(201);
    //     })
    //   });
    // }

  // }

}














// var models = require('../models/model.js');


// module.exports = {
//   pack: {
//     get: function (req, res) {
//       console.log('request recieved');
//       res.send('request recieved');
//       //initiate model to send pack
//     }, // a function which handles a get request for all messages
//     post: function (req, res) {
//       //initiate model send pack
//       console.log(req.body);
//       // models.packs.post(req.body, function() {
//       //   res.send('Message Recieved');
//       // });
//     } // a function which handles posting a message to the database
//   },

// //   users: {
// //     // Ditto as above
// //     get: function (req, res) {
// //       models.users.get(function(rows) {
// //         res.send({results: rows});  
// //       });
// //     },
// //     post: function (req, res) {
// //       models.users.post(req.body, function() {
// //         console.log('User Recieved');
// //         res.send('User Recieved');
// //       });
// //     }
// //   }
// };
