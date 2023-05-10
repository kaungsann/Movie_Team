import { Tabs } from "@mantine/core";
import React, { useState, useEffect } from "react";
import TabChanger from "./TabChanger";
import MoviesContainer from "./MoviesContainer";
import Pagination from "./Pagination";
import { fetchWithAxios } from "../../services/apiservices.js";

const RightSide = () => {
  const { VITE_APP_DOMAIN } = import.meta.env;
  const [page, setPage] = useState(1);
  const [data, setData] = useState({});

  let api = `${VITE_APP_DOMAIN}discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;

  useEffect(() => {
    fetchWithAxios(api)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, [page]);

  return (
    <div className="lg:w-[75%]">
      <h1 className="text-3xl">Action</h1>
      <MoviesContainer api={api} data={data?.results} />
      <Pagination
        total_page={data?.total_pages}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default RightSide;
