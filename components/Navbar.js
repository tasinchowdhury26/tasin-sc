import { useState } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const changeTheme = () => {
    setDarkMode(!darkMode);
  };
  console.log(darkMode);
  return (
    <div className={styles.navbar}>
      <h5>Navbar</h5>
      <button onClick={() => changeTheme}>Dark Mode</button>
    </div>
  );
};

export default Navbar;
