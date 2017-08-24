const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const port = 3000;
const app = express();


app.use( bodyParser.json() );

app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );