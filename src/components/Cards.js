import React from "react";

const Cards = ({ data, setData }) => {
  const editThisAdDetails = () => {
    setData(data);
    window.scrollTo({top:0, behavior:"smooth"})
  };

  return (
    <>
      <div className="border p-4 rounded shadow hover:shadow-md transition duration-300">
        <div className="flex items-start mb-2">
          <p className="block text-gray-700 font-semibold mr-4 w-40 min-w-[160px]">
            Link :
          </p>
          <p className="">{data?.link}</p>
        </div>
        <div className="flex items-start mb-2">
          <p className="block text-gray-700 font-semibold mr-4 w-40 min-w-[160px]">
            Heading :
          </p>
          <p className="">{data?.mainHeading}</p>
        </div>
        <div className="flex items-start mb-2">
          <p className="block text-gray-700 font-semibold mr-4 w-40 min-w-[160px]">
            Main Discription :
          </p>
          <p className="">{data?.mainDescription}</p>
        </div>
        <div className="flex items-start mb-2">
          <p className="block text-gray-700 font-semibold mr-4 w-40 min-w-[160px]">
            Query :
          </p>
          <div className="flex flex-wrap gap-1">
            {data?.query?.map((d) => (
              <p className="px-4 py-1 bg-gray-200 rounded">{typeof d === "string" ? d: null}</p>
            ))}
          </div>
        </div>
        <div className="flex items-start mb-2">
          <div>
            <p className="block text-gray-700 font-semibold mr-4 w-40 min-w-[160px]">
              Sub Headings :
            </p>
            <button
              type="button"
              className="px-4 py-.5 text-white rounded bg-green-500"
              onClick={editThisAdDetails}
            >
              Edit
            </button>
          </div>
          <div className="flex flex-wrap gap-1 justify-end">
            {data?.subHeadings?.map((d) => (
              <div className="px-4 py-1 bg-gray-200 rounded">
                <p>{d?.heading}</p>
                <p className="">{d?.description}</p>
                <p className="">{d?.link}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
