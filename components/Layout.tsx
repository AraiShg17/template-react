import React from "react";
import Head from './Head';
import {css} from "@emotion/react";

interface AppProps {
  children?: any
}

const App: React.FunctionComponent<AppProps> = ({ children }) => {
  return (
    <div css={cssWrapper}>
      <Head />
      { children }
    </div>
  );
}

App.defaultProps = {
  children: null
};

//CSS

const cssWrapper = css`
  min-height: 100vh;
  padding: 100px;
`;

export default App
