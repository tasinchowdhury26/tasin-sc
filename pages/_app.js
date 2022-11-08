import { useState } from "react";
import AppContext from "../components/contexts/AppContext";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [darkmode, setDarkmode] = useState(false);
  return (
      <AppContext.Provider value={{darkmode, setDarkmode}}>
        <Component {...pageProps} />
      </AppContext.Provider>
  );
}

export default MyApp;
