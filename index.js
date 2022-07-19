const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const indexRouter = require('./routes/index');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const PORT = process.env.PORT || 8000
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/thing', indexRouter);

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Things API",
      version: '1.0.0',
    },
  },
  apis: ['./routes/index.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/** Mongodb config */
const CONFIG = { 
    uri : process.env.DATABASE_URl,
    OPTIONS : { 
      useNewUrlParser : true , 
      keepAlive : true , 
      useUnifiedTopology : true , 
      keepAliveInitialDelay : 3e6
    }
}

/** Mongodb connection */
mongoose.Promise = Promise;  
mongoose.connect(CONFIG.uri, CONFIG.OPTIONS) 
let db = mongoose.connection 
db.on('open' , console.info.bind(console , 'Connection to the database was successful'))


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))