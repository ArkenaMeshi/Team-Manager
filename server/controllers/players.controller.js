const Players = require("../models/player.model");

module.exports = {
  createPlayer: (request, response) => {
    const { name, position } = request.body;
    Players.create({
      name: name,
      position: position,
    })
      .then((player) => {
        response.json(player);
      })
      .catch((err) => response.status(400).json(err));
  },

  getPlayers: (request, response) => {
    Players.find({})
      .then((players) => {
        console.log(players);
        response.json(players);
      })
      .catch((err) => {
        console.log(err);
        response.json(err);
      });
  },

  getOnePlayer: (request, response) => {
    Players.findOne({ _id: request.params.id })
      .then((player) => {
        console.log(player);
        response.json(player);
      })
      .catch((err) => {
        console.log(err);
        response.json(err);
      });
  },

  deleteOnePlayer: (request, response) => {
    Players.deleteOne({ _id: request.params.id })
      .then((result) => {
        console.log(result);
        response.json(result);
      })
      .catch((err) => {
        console.log(err);
        response.json(err);
      });
  },

  updateOnePlayer: (request, response) => {
    Players.findOneAndUpdate({ _id: request.params.id }, request.body, {
      new: true,
    })
      .then((result) => response.json(result))
      .catch((err) => response.json(err));
  },
};