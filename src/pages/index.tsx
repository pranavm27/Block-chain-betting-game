
import { useTheme } from "next-themes";
import MainCard from "@/components/main-card/mainCard";
import Header from "@/components/header/header";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import { AppConfig } from "@/utils/AppConfig";

const Index = () => {

  return (
    <Main meta={<Meta title={AppConfig.title} description="AppConfig." />}>
      <div className="">
        <Header />
        <MainCard />
      </div>
    </Main>
  );
};

export default Index;
