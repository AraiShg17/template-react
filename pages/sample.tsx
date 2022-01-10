import React, { useState, useEffect } from "react"

import Button from "../components/Button";

interface AppProps {
}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <section>
      <h1>SAMPLE</h1>
      <Button href="/">topページへ</Button>
    </section>
  );
}

App.defaultProps = {
};

export default App
