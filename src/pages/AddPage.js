import AddResult from "../components/AddResult";
import { useEffect, useState } from "react";

import axios from "axios";
import Cards from "../components/Cards";

const AddPage = () => {
  const [ad, setAd] = useState(null);
  const [result, setResult] = useState([]);

  const [message, setMessage] = useState(null);

  useEffect(() => {
    axios
      .get(`https://search-enginex.onrender.com/api/get-ads`)
      .then((response) => {
        setResult(response?.data);
      })
      .catch((error) => {});
  }, [message]);

  return (
    <>
      <div className="min-h-screen bg-white p-8">
        <div className="w-full p-8 bg-gray-50 rounded shadow max-w-7xl  mx-auto">
          <AddResult
            data={ad}
            setData={setAd}
            message={message}
            setMessage={setMessage}
          />
          {result?.length ? (
            <div className="mt-8 grid grid-cols-1 gap-4">
              {result?.map((res, index) => (
                <Cards key={res?.description} data={res} setData={setAd} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default AddPage;
