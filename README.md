# CX-REACT-POKEMON

The purpose of theses exercices is simple, manipulate and display pokemons


### Installing

First, you have to instal the database (postreSQL) with the script ```/server/models/data_seed/db_init.js```
If you have some authentication issues, you may can resolve it in the same script, where the db connection is initialized : 
```
const db = knex({
  client: "your_database",
  connection: {
    host: "127.0.0.1 / locahost",
    user: "database_username",
    password: "username_password",
    database: "database_name",
    useNullAsDefault: true,
  },
});
```

Don't forget to do

```
npm install
```

In client AND server directory.

After run server on port 4000

```
/server$ node server.js 4000
```
And finally run the client 
```
/client$ npm start
```

## Built With

* [NODEJS]
* [KNEX]
* [REACTJS]

## Contributing

Please read [CONTRIBUTING.md](https://github.com/pu-erh/poke-mon) for details on our exercise.

## Authors

* **Victor BOYER**
* **Samy KHELFA**


EFREI PARIS

