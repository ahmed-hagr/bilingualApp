import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "@/store/store";
import { Provider } from 'react-redux';
import ParentNav from "../Components/Navs/ParentNav";
import { useRouter } from 'next/router';
import { useEffect } from "react";
import { appWithTranslation } from 'next-i18next';
import '../i18n'; 

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  const isRTL = locale === 'ar';
  useEffect(() => {
    const currentLocale = locale || 'en';
    document.documentElement.lang = currentLocale;
    document.documentElement.dir = currentLocale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  return (
    <Provider store={store}>
      <div className="flex">
        <ParentNav />
        <main className={`lex flex-1 flex-col overflow-y-auto mt-10 pt-5 ${isRTL?"lg:mr-64":"lg:ml-64"}`}>
          <div className="p-6 flex-1">
            <Component {...pageProps} />
          </div>
        </main>
      </div>
    </Provider>
  );
};

export default appWithTranslation(MyApp);
