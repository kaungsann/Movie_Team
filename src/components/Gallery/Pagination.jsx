import { useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
export default ({ page, setPage, total_page }) => {
  console.log(page);
  const [pages, setPages] = useState(["1", "2"]);
  const [currentPage, setCurrentPage] = useState("1");

  return (
    <div className="max-w-screen-xl mx-auto mt-12  text-gray-600 ">
      <div className="hidden justify-between text-sm md:flex">
        <div>
          Showing{" "}
          <input
            style={{ width: "100px" }}
            maxlength={total_page}
            type="number"
            value={page}
            onChange={(e) => {
              setPage(e.target.value);
            }}
          />{" "}
          – {total_page} results
        </div>
        <div className="flex items-center gap-12" aria-label="Pagination">
          <ul className="flex items-center gap-1">
            {/* {...Array(pages)?.map((item, idx) => (
              <li key={item}>
                {item == "..." ? (
                  <div>{item}</div>
                ) : (
                  <a
                    href="javascript:void(0)"
                    aria-current={currentPage == item ? "page" : false}
                    className={`px-4 py-3 rounded duration-150 ${
                      currentPage == item
                        ? "bg-cyan-500 text-black font-medium"
                        : "bg-gray-600 text-white"
                    }`}
                  >
                    {item}
                  </a>
                )}
              </li>
            ))} */}
          </ul>
          <a
            onClick={() => {
              if (page <= 1) {
                setPages(1);
              } else {
                setPage(page - 1);
              }
            }}
            className=" flex items-center cursor-pointer justify-center  gap-2"
          >
            Prev Page
            <BsArrowLeft size={20} color="gray" />
          </a>
          <a
            onClick={() => setPage(page + 1)}
            className=" flex items-center cursor-pointer justify-center  gap-2"
          >
            Next Page
            <BsArrowRight size={20} color="gray" />
          </a>
        </div>
      </div>
      {/* On mobile version */}
      <div className="flex items-center justify-between text-sm text-gray-600 font-medium md:hidden">
        <div className="font-medium">
          Showing{" "}
          <input
            style={{ width: "100px" }}
            maxlength={total_page}
            type="number"
            value={page}
            onChange={(e) => {
              if (Number(e.target.value) > 1) {
                setPage(Number(e.target.value));
              } else if (Number(e.target.value) >= total_page) {
                setPage(total_page);
              } else {
                setPage(1);
              }
            }}
          />
          –{total_page} results
        </div>
        <a
          onClick={() => {
            if (page <= 1) {
              setPages(1);
            } else {
              setPage(page - 1);
            }
          }}
          className=" flex items-center cursor-pointer justify-center  gap-2"
        >
          Prev Page
          <BsArrowLeft size={20} color="gray" />
        </a>
        <a
          onClick={() => setPage(page + 1)}
          className=" flex items-center cursor-pointer justify-center  gap-2"
        >
          Next Page
          <BsArrowRight size={20} color="gray" />
        </a>
      </div>
    </div>
  );
};
