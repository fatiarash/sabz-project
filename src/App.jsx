import { Outlet, Link } from "react-router-dom";

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
