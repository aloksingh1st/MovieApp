import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Cards from "../Components/Card";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState();

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://api.tvmaze.com/search/shows?q=all"
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <Container className="wrapper mt-4">
        {data &&
          data.length > 0 &&
          data.map((userObj, index) => (
            <Cards
              className="m-4"
              image={userObj?.show?.image?.original}
              name={userObj?.show?.name}
              language={userObj?.show?.language}
              premiered={userObj?.show?.premiered}
              rating={userObj?.show?.rating?.average}
              summary={userObj?.show?.summary}
              link={userObj?.show?.url}
              showid = {userObj?.show?.externals?.thetvdb}
            />
          ))}
      </Container>
    </>
  );
};

export default Home;
