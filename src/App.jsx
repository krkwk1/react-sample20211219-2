import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
import { ColorfulMessage2 } from "./components/ColorfulMessage2";

const App = () => {
  const [num, setVal] = useState(0); //useState利用 変数とsetterの定義
  const [showFlg, setShowFlg] = useState(false);

  const contentStyle = {
    color: "#cccc00"
  };

  const onClickCountUp = () => {
    setVal(num + 1);
  };
  const onClickDisplay = () => {
    setShowFlg(!showFlg);
  };

  /** 第二引数に監視対象の変数を指定。再レンダリング時の更新対象を限局する */
  useEffect(() => {
    console.log("useEffect");
  }, [num]);

  return (
    <>
      {/*  ↑React.fragment省略 */}
      <h1 style={contentStyle}>H1</h1>
      {/*  ↑style定義その１ */}
      <p style={{ color: "#00cccc" }}>hello world!</p>
      {/*  ↑style定義その２ */}
      <ColorfulMessage color="blue" message="WREEEEEEEEEEEEEEEE!" />
      <ColorfulMessage2 color="red">HEY!</ColorfulMessage2>
      <button onClick={onClickCountUp}>countUP</button>
      <button onClick={onClickDisplay}>on/off</button>
      <p>{num}</p>
      {showFlg && <p>HOGEHOGEHOGEHOGE</p>}
    </>
  );
};

export default App;
