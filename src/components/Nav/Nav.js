import NavCSS from "./Nav.module.css";

function Nav() {
  return (
    <div className={NavCSS.Nav}>
      <p>Widget</p>
      <p>Reiews</p>
      <p>Customers</p>
      <p>Online Analysis</p>
      <p>Settings</p>
    </div>
  );
}

export default Nav;
