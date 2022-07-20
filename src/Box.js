import "./styles.css";

import Footer from "./Footer";
import Search from "./Search";
import Forecast from "./Forecast";

export default function Box() {
  return (
    <div className="Box">
      <Search />
      <Forecast />
      <Footer />
    </div>
  );
}
