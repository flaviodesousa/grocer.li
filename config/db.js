var Bookshelf = require('bookshelf');

Bookshelf.Conn = Bookshelf.initialize({
  client: 'pg',
  connection: '/var/run/postgresql grocerli'
});

Bookshelf.Conn.knex.schema.hasTable('users')
  .then(function(exists) {
    if(exists) return;

    Bookshelf.Conn.knex.schema.createTable('users', function(table) {
      table.increments('id');
      table.string('email').notNullable().unique();
      table.string('secret').notNullable();
    })
    .then(function() {
      console.log('users table created');
    })
    .catch(function(err) {
      console.log('error: '+err);
    });
  });
