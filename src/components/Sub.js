import React, { useEffect, useState } from "react";

const Sub = ({ subHeadings, setSubHeadings, index, data }) => {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const handleChangeSubHeading = (value, index) => {
    subHeadings[index].heading = value;
    setSubHeadings(subHeadings);
    setHeading(value);
  };

  const handleChangeSubDesciption = (value, index) => {
    subHeadings[index].description = value;
    setSubHeadings(subHeadings);
    setDescription(value);
  };

  const handleChangeLink = (value, index)=>{
    subHeadings[index].link = value;
    setSubHeadings(subHeadings);
    setLink(value);
  } 

  useEffect(() => {
    if(data){
      setDescription(data?.subHeadings[index]?.description)
      setHeading(data?.subHeadings[index]?.heading)
      setLink(data?.subHeadings[index]?.link)
    }
  }, [data])
  

  return (
    <>
      <div className="">
        <label className="block text-gray-700 font-semibold mb-1">
          {index + 1} Sub Headings
        </label>
        <input
          type="text"
          className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-500"
          value={heading}
          onChange={(e) => handleChangeSubHeading(e.target.value, index)}
          required
        />
      </div>
      <div className="">
        <label className="block text-gray-700 font-semibold mb-1">
          {index + 1} Sub description
        </label>
        <input
          type="text"
          className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-500"
          value={description}
          onChange={(e) => handleChangeSubDesciption(e.target.value, index)}
          required
        />
      </div>
      <div className="">
        <label className="block text-gray-700 font-semibold mb-1">
          {index + 1} Link
        </label>
        <input
          type="url"
          className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-500"
          value={link}
          onChange={(e) => handleChangeLink(e.target.value, index)}
          required
        />
      </div>
    </>
  );
};

export default Sub;
