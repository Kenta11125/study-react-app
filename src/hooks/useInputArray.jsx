import { useState,useCallback } from 'react';

export const useInputArray = () => {
    const [text, setText] = useState("");
    const [array, setArray] = useState([]);
    const handleChange = useCallback((foo) => {
      if (foo.target.value.length > 5) {
        alert('5文字以内にしてください');
        return;
      }
        setText(foo.target.value.trim());
    }, []);
  
    const handleAdd = useCallback(() => {
      setArray((prevArray) => {
        if (prevArray.some(item => item === text)) {
          alert(`『${text}』はすでに存在します。違う要素を追加してください。`);
          return prevArray;
        }
        // const newArray = [...prevArray, text];
        // return newArray;
        return [...prevArray, text];
      });
    }, [text]);
    return {text, array, handleChange, handleAdd};
   }