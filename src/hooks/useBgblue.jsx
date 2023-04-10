import { useEffect } from 'react';

export const useBgblue = () => {
    useEffect(() => {
      // console.log(`マウント時： ${count}`);
      document.body.style.backgroundColor = "darkblue";
      
      return () => {
      // console.log(`アンマウント時： ${count}`); //バックスラッシュ
      document.body.style.backgroundColor = "";
      };
      },[]);
   }
  