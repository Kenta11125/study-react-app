import React, { useState, useEffect, useCallback } from 'react';
import { Header } from 'src/components/Header';

const App= () => {
  // useStateでカウントの初期値を0に設定
  const [count, setCount] = useState(0);

  // ボタンがクリックされたらカウントを増やすおまじない（関数）をuseCallbackで作る
  const handleClick = useCallback(() => {
    setCount((foo) => foo + 1);
  }, [count]);

  // カウントが変わったらメッセージを表示するようにuseEffectで設定
  useEffect(() => {
    if (count > 0) {
      alert(`ボタンが${count}回押されました！`);
    }
  }, [count]);

  return (
    <div>
        <Header />
        <h1>ボタンを押してね！</h1>
        <button onClick={handleClick}>ボタンを押す</button>
        <p>今までに {count} 回押されました。</p>
    </div>
  );
}

export default App;
