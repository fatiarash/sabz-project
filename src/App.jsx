import { Outlet, Link } from "react-router-dom";
import "./App.css";
import "./index.css";
function App() {
  return (
    <div>
      <nav>
        <Link to="/">صفحه اصلی</Link> | <Link to="/test">صفحه تست</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
