import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { buildTemplate, buildHomepage } from './pug';
import { buildLanding } from './landing';

// initialize
const app = express();

// enable/disable cross origin resource sharing if necessary
app.use(cors());

// enable json message body for posting data to API
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// default index route
app.get('/', (req, res) => {
  // res.send('hi');
  res.send(buildHomepage());
});

app.get('/landing', (req, res) => {
  res.send(buildLanding());
});

// START THE SERVER
// =============================================================================
const port = process.env.PORT || 9090;
app.listen(port);

console.log(`listening on: ${port}`);
