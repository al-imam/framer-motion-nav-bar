import classes from "./app.module.css";

function App() {
  return (
    <nav className={classes.navbar}>
      <Ul />
    </nav>
  );
}

function Ul() {
  return (
    <ul className={classes.navbarNav}>
      <li className={classes.navItem}>Home</li>

      <li className={classes.navItem}>
        <button className={classes.dropdownToggler}>Department</button>
        <ul className={classes.dropdownMenu}>
          <li>Computer Technology</li>
          <li>Electrical Technology</li>
          <li>Civil Technology</li>
          <li>Electronics Technology</li>
          <li>Architecture Technology</li>
        </ul>
      </li>

      <li className={classes.navItem}>Contact Us</li>
      <li className={classes.navItem}>About Us</li>
    </ul>
  );
}

export default App;
