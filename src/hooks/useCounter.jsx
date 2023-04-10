import { useState,useCallback } from 'react';

export const useCounter = () => {
    const [count, setCount] = useState(1);
    const [isShow, setIsShow] = useState(true);
  
    const handleClick = useCallback(() => {
      if (count < 10) {
        setCount((prevCount) => prevCount + 1);//これでも一緒　アロー関数
      }
      // setFoo(function(foo) {
      //   return foo + 1;
      // });
  
    }, [count]);
  
    const handleDisplay = useCallback(() => {
      // setIsShow((isShow) => {
    //   // if(isShow) {
    //   //   return false;
    //   // }
    //   // return true;
    //   // return isShow ? false : true;
    //   return !isShow;
    // });
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);
  
  
  return { count, isShow, handleClick, handleDisplay };
  
   }