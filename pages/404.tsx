import React from "react"
import {css} from "@emotion/react";
import Button from "../components/Button"

interface AppProps {
}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <section>
      <div>
        <Button href="/">Top</Button>
      </div>
    </section>
  );
}

App.defaultProps = {
};

export default App
