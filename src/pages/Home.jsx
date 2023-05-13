import React from "react";
import Footer from "../components/Footer/Footer";
import FeaturedTV from "../components/FeaturedTV/FeaturedTV";
import Loading from "./Loading";

const Home = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return loading ? (
    <Loading />
  ) : (
    <div className="">
      <FeaturedTV />
      <Footer />
    </div>
  );
};

export default Home;
