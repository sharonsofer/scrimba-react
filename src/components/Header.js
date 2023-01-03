import classes from "./Header.module.css";

function Header() {
  return (
    <nav className={classes.nav}>
      <img src="../logo192.png" alt="" className={classes.nav_logo} />
      <ul className={classes.nav_items}>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Header;
