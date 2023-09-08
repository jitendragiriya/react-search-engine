import React, { useEffect, useState } from "react";
import Sub from "./Sub";
import axios from "axios";

const AddResult = ({ data, setData, message, setMessage }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [subHeadings, setSubHeadings] = useState([
    {
      heading: "",
      description: "",
      link: "",
    },
    {
      heading: "",
      description: "",
      link: "",
    },
    {
      heading: "",
      description: "",
      link: "",
    },
    {
      heading: "",
      description: "",
      link: "",
    },
  ]);

  useEffect(() => {
    if (data?._id) {
      setTitle(data?.mainHeading);
      setDescription(data?.mainDescription);
      setLink(data?.link);
      let arr = data?.query;
      let str = "";

      for (let index = 0; index < arr.length; index++) {
        str += arr[index] + (index <= arr.length - 2 ? " | " : "");
      }
      setQuery(str);
      setSubHeadings(data?.subHeadings);
      setLoading(false);
    } else setLoading(false);
  }, [data]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newQuery = query.split("|");

    let newFormData = {
      query: newQuery,
      link,
      mainHeading: title,
      mainDescription: description,
      subHeadings, 
    };

    if (data) {
      await axios
        .put(
          `https://search-enginex.onrender.com/api/update-ad`,
          { ...newFormData, adId: data?._id },
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        )
        .then((response) => {
          if (response.status === 200) setMessage("Done");
          setData(null);
        })
        .catch((json) => console.log(json));
    } else {
      await axios
        .post(`https://search-enginex.onrender.com/api/add-ad`, newFormData, {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((response) => {
          setData(null);
          if (response.status === 200) setMessage("Done");
        })
        .catch((json) => console.log(json));
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  }, [message]);

  return (
    <>
      {loading ? null : (
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          <div className="">
            <label className="block text-gray-700 font-semibold mb-1">
              Search Query
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-500"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
            />
          </div>
          <div className="">
            <label className="block text-gray-700 font-semibold mb-1">
              Main Heading
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="">
            <label className="block text-gray-700 font-semibold mb-1">
              Main Description
            </label>
            <textarea
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="">
            <label className="block text-gray-700 font-semibold mb-1">
              Link
            </label>
            <input
              type="url"
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-500"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required
            />
          </div>
          {[...Array(4)]?.map((d, index) => (
            <Sub
              setSubHeadings={setSubHeadings}
              subHeadings={subHeadings}
              index={index}
              key={index}
              data={data}
            />
          ))}

          <button
            type="submit"
            className="bg-blue-500 text-white rounded p-3 h-12 w-full hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
          {message?.length ? (
            <p className="text-green-500 font-semibold">{message}</p>
          ) : null}
        </form>
      )}
    </>
  );
};

export default AddResult;
