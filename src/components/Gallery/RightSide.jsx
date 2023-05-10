import { Tabs } from "@mantine/core";
import React, { useState, useEffect } from "react";
import TabChanger from "./TabChanger";
import MoviesContainer from "./MoviesContainer";
import Pagination from "./Pagination";

const RightSide = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({});

  let api = `${VITE_APP_DOMAIN}discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;

  useEffect(() => {
    fetchWithAxios(api)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setTop(res.data.results);
      })
      .catch((err) => console.error(err));
  }, [page]);

  return (
    <div className="lg:w-[75%]">
      <h1 className="text-3xl">Action</h1>
      <MoviesContainer />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default RightSide;
