const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient; 
const createRouter = require('./helpers/create_router.js');
const cors = require('cors')

app.use(express.json());
app.use(cors()); 


MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology:true})
.then((client) => {
  const db = client.db('guitar_shop');
  const guitarsCollection = db.collection('guitars'); 
  const guitarsRouter = createRouter(guitarsCollection);
  app.use('/api/guitars', guitarsRouter );
  const manufacturersCollection = db.collection('manufacturers');
  const manufacturersRouter = createRouter(manufacturersCollection)
  app.use('/api/manufacturers',manufacturersRouter)
})
.catch(console.error);

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});


