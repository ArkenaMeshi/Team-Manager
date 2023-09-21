const PlayersController = require('../controllers/players.controller');

module.exports = (app) => {
    app.post('/players', PlayersController.createPlayer);  
    app.get('/players', PlayersController.getPlayers); 
    app.get('/players/:id', PlayersController.getOnePlayer);
    app.patch('/players/:id', PlayersController.updateOnePlayer);
    app.delete('/players/:id', PlayersController.deleteOnePlayer);
}