import "./styles.css";

import Footer from "./Footer";
import Header from "./Header";
import Search from "./Search";
import Forecast from "./Forecast";

export default function Box() {
  return (
    <div className="Box">
      <Header />
      <Search />
      <Forecast />
      <Footer />
    </div>
  );
}
