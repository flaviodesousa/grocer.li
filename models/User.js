module.export = function(app) {
  var Bookshelf = require('bookshelf').Conn;

  var User = Bookshelf.Model.extend({
    tableName: 'users'
  });

  return User;
}