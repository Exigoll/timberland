import "./scss/app.scss";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Drawer />
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
