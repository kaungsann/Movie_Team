import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
const Upload = () => {
  return (
    <div className="cursor-pointer md:flex items-center gap-2 hidden">
      <AiOutlineCloudUpload size={25} color="gray" />
      <p>Upload</p>
    </div>
  );
};

export default Upload;
