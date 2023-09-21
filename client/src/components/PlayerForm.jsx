
import axios from "axios";
import React, { useState } from "react";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";
import { useNavigate } from "react-router-dom";

const PlayerForm = () => {
  const [name, setName] = useState("");
  const [position, setPostion] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/players", { name: name, position: position })
      .then((res) => {
        console.log(res);
        navigate("/players/list");
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };
  const isEnabled = name.length >= 2;

  return (
    <div className="add-player">
      <Menu>
        <MenuItem url="/players/list" item="List" />
        <MenuItem url="/players/addplayers" item="Add Player" />
      </Menu>
      <form onSubmit={onSubmitHandler}>
        <h3> Add Player </h3>
        {errors.map((err, index) => (
          <p className="validation-errors" key={index}>
            *{err}
          </p>
        ))}
        <label>Player Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Preferred Position: </label>
        <input type="text" onChange={(e) => setPostion(e.target.value)} />
        <hr />
        <button type="submit" disabled={!isEnabled}>
          Add
        </button>
      </form>
    </div>
  );
};

export default PlayerForm;