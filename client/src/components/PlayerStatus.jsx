import React, { useEffect, useState } from "react";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";
import axios from "axios";
import "../App.css";
import { useNavigate, useParams } from "react-router-dom";

const PlayerStatus = () => {
  const [playersList, setPlayersList] = useState([]);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/players")
      .then((res) => {
        console.log(res.data);
        setPlayersList(res.data);
      })
      .catch((err) => console.log(err));
  }, [updated]);

  const changeStatus = (id, status) => {
    axios
      .patch(`http://localhost:8000/players/${id}`, {
        status: status,
      })
      .then((res) => {
        console.log(res);
        setUpdated(!updated);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="player-list-table">
      <h1>Player Status - Game 1</h1>
      <Menu>
        <MenuItem url="/status/game/1" item="Game 1" />
      </Menu>

      <table>
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        {playersList &&
          playersList.map((player, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{player.name}</td>
                  <td>
                    <button
                      onClick={() => changeStatus(player._id, "playing")}
                      className={player.status === "playing" ? "playing" : ""}
                    >
                      Playing
                    </button>
                    <button
                      onClick={() => changeStatus(player._id, "not-playing")}
                      className={
                        player.status === "not-playing" ? "not-playing" : ""
                      }
                    >
                      Not Playing
                    </button>
                    <button
                      onClick={() => changeStatus(player._id, "undecided")}
                      className={
                        player.status === "undecided" ? "undecided" : ""
                      }
                    >
                      Undecided
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
};

export default PlayerStatus;