import { useEffect, useMemo  } from 'react';
import { useRouter } from 'next/router';

export const useBgColor = () => {

  const router = useRouter();

  const bgColor = useMemo(() => {
    switch (router.pathname) {
      case "/" : {
        return "darkblue";
      }
      case "/about" : {
        return "darkred";
      }
      default: {
        return "";
      }
    }
  //   return router.pathname === "/" ? "darkblue" : "darkred";
  }, [router.pathname]);

    useEffect(() => {
      // console.log(`マウント時： ${count}`);
      document.body.style.backgroundColor = bgColor;
      
      return () => {
      // console.log(`アンマウント時： ${count}`); //バックスラッシュ
      document.body.style.backgroundColor = "";
      };
      },[bgColor]);
   }
  