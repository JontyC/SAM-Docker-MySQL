const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes');

const debug = require('debug')('sam-docker-api:app');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(compress());
app.use(helmet());
app.use(cors());

app.use('/', routes);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        debug(err.message);
        res.json({ error: err });
    });
}

// Production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
    res.json({
        message: err.message,
        error: {}
    });
});

module.exports = app;
