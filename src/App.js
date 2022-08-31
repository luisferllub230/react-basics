import React, {Fragment} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {

  const year = new Date().getFullYear()

  return (
    <Fragment>

      <Header 
        title="from the Header component xd dynamic"
      />
      <Footer 
        year={year}
      />

    </Fragment>
  );
}

export default App;
