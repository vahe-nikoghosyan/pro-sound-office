import { Box } from "@mui/material";
import ProSound from "../components/Home/ProSound";
import Service from "../components/Home/Service";
import Slider from "../components/Home/Slider";
import Products from "../components/Home/Products";
import FunktionOne from "../components/Home/FunktionOne";
import HomeBlog from "../components/Home/HomeBlog";
import JoinCommunity from "../components/Home/JoinCommunity";
import HomeCheckBlog from "../components/Home/HomeCheckBlog";

function Home(props: any) {
  console.log("home", props);
  return (
    <Box>
      <ProSound />
      <Service />
      <Slider />
      <Products />
      <FunktionOne />
      <HomeBlog />
      <HomeCheckBlog />
      <JoinCommunity />
    </Box>
  );
}

export async function getStaticProps() {
  console.log("home starting");
  return {
    props: {
      home: "home",
    },
  };
}

export default Home;
