import Head from 'next/head'
import React from "react";

interface AppProps {
}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <Head>
      <title>react sample</title>
    </Head>
  );
}

App.defaultProps = {
};

export default App
