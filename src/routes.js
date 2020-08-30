const {
    Router
} = require('express');

const controller = require('./controllers/controller');

const routes = Router();

routes.get('/database', (req, res) => controller.connectDatabase()
    .then(result => res.send(result))
    .catch(error => console.error(error))
);

module.exports = routes;