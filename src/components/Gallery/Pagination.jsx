import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
export default ({ page, setPage }) => {
  const [pages, setPages] = useState(["1", "2"]);
  const [currentPage, setCurrentPage] = useState("1");

  return (
    <div className="max-w-screen-xl mx-auto mt-12  text-gray-600 ">
      <div className="hidden justify-between text-sm md:flex">
        <div>Showing 1–24 of 48 results</div>
        <div className="flex items-center gap-12" aria-label="Pagination">
          <ul className="flex items-center gap-1">
            {pages.map((item, idx) => (
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
            ))}
          </ul>
          <a className=" flex items-center cursor-pointer justify-center  gap-2">
            Next Page
            <BsArrowRight size={20} color="gray" />
          </a>
        </div>
      </div>
      {/* On mobile version */}
      <div className="flex items-center justify-between text-sm text-gray-600 font-medium md:hidden">
        <div className="font-medium">Showing 1–24 of 48 results</div>
        <a className=" flex items-center cursor-pointer justify-center  gap-2">
          Next Page
          <BsArrowRight size={20} color="gray" />
        </a>
      </div>
    </div>
  );
};
