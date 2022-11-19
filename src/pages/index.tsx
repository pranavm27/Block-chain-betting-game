// import { useRouter } from 'next/router';

import { useTheme } from "next-themes";

import MainCard from "@/components/main-card/mainCard";
import Header from "@/components/header/header";
// import Card from "@/components/card/card";
// import Card from "@/components/card/card";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import { AppConfig } from "@/utils/AppConfig";

const Index = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Main meta={<Meta title={AppConfig.title} description="AppConfig." />}>
      <div className="">
        <Header />
        <MainCard />

        {/* <div className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
          <span role="img" aria-label="Love">
            ♥
          </span>{' '}
        </div> */}
      </div>
    </Main>
  );
};

export default Index;
