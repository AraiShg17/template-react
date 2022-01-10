import React, { useState, useEffect } from "react"
import Button from "../components/Button"

interface AppProps {
  props?: String;
}

const App: React.FunctionComponent<AppProps> = ({ props }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // useStateの更新の仕方
    setCount(count + 1)
    console.log('読み込み時');
    return () => {
      console.log('破棄時');
    }
  },[])

  return (
    <section>
      <h1>TOP</h1>
      <Button href="/sample">sampleページへ</Button>
    </section>
  );
};

App.defaultProps = {
  props: null,
};

export default App
