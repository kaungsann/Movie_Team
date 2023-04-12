import React from 'react'

const TopfiveList = ({list}) => {
  return (

      <div className="flex flex-row justify-around lg:xl:2xl:md:justify-between items-center m  w-[300px]  lg:xl:2xl:md:w-[350px]  border-b border-gray-500  h-[88px]  ">
        <div className="text-3xl font-bold  mb-[1rem]">{list}</div>
        <div className=" w-[200px] lg:xl:2xl:md:w-[250px] h-full">
          <div className='text-gray-400'>Year</div>
          <div>Movie Title</div>
          <div className='text-sky-400'>Category</div>
        </div>
      </div>
  );
}

export default TopfiveList