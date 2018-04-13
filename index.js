const express = require('express');
const app = express();
const port = process.env.PORT || 2000;

/* ===========BODY_PARSER=========== */
const bodyParser = require('body-parser');
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());
// Parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

/* =============ROUTES============= */
//
const cache = require('./controllers/cache')
const router = express.Router();
//


router.post('/store/:key', cache.set);

router.post('/delete/:key', cache.delete);
router.get('/:key', cache.get);


app.use('/', router);

app.listen(port);
