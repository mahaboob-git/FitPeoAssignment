import "./App.css";
import { DashboardMainContainer } from "./components/layouts/dashboardMainContainer/DashboardMainContainer";
import { DashboardRightContainer } from "./components/layouts/dashboardRightContainer/DashboardRightContainer";
import { SideBar } from "./components/layouts/sidebar/SideBar";

function App() {
  return (
    <div className="mainContainer">
      <SideBar />
      <DashboardMainContainer/>
      <DashboardRightContainer/>
    </div>
  );
}

export default App;
