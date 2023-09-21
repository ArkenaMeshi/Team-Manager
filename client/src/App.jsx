import Menu from "./components/Menu/Menu";
import MenuItem from "./components/Menu/MenuItem";
import PlayersList from "./components/PlayersList.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerForm from "./components/PlayerForm";
import PlayerStatus from "./components/PlayerStatus";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {
        <Menu>
          <MenuItem url="/players/list" item="Manage Players" />
          <MenuItem url="/status/game/1" item="Manage Players Status" />
        </Menu>
      }

      <>
        <Routes>
          <Route exact path="/players/list" element={<PlayersList />}></Route>
          <Route
            exact
            path="/players/addplayers"
            element={<PlayerForm />}
          ></Route>
          <Route exact path="/status/game/1" element={<PlayerStatus />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;