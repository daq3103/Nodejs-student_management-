const express = require('express');
const app = express();
const port = 3000;
const router = require('./routers/root.router');
app.use(express.json());


app.use ( router );

// chuyển req , res về json để thao tác

app.get('/', (req, res) => {
  res.send('Hello World!');
});


// http://localhost:3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// setup sequelize
const {sequelize} = require('./model') ;
sequelize.sync({alter:true});
