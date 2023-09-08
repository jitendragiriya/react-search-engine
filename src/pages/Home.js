"use client";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";
import Sponsers from "../components/Sponsers";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const [sponsor, setSponsor] = useState([]);

  const handleSearch = async (searchQuery) => {
    if (searchQuery && searchQuery?.length) {
      const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
        searchQuery
      )}&key=AIzaSyAmVdDKu5lBz0uwgUgAE2v-4YG99QQTms0&cx=176b70bd34d6f449e`;

      await axios
        .get(url)
        .then(async (response) => {
          setSearchResults(response?.data?.items);
          //get ads
          await axios
            .get(
              `https://search-enginex.onrender.com/api/get-ad?keyword=${searchQuery}`
            )
            .then((res) => {
              setSponsor(res?.data);
            })
            .catch((err) => {});

          //add post to our database
          await axios
            .post(
              `https://search-enginex.onrender.com/api/add-post`,
              { ...response?.data, searchQuery },
              {
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              }
            )
            .then((res) => {})
            .catch((err) => {});
        })
        .catch((error) => {});
    }
  };

  useEffect(() => {
    const paramsQuery = searchParams.get("keyword");

    if (paramsQuery?.length) {
      setSearchQuery(paramsQuery);
      handleSearch(paramsQuery);
    }
    setLoading(false);
  }, []);

  return (
    <>
      {!loading ? (
        <div className="min-h-screen bg-white">
          <div
            className={`flex flex-col min-h-screen px-4 md:px-8 mx-auto max-w-[95vw] w-full md:max-w-3xl md:min-w-[600px]`}
          >
            <SearchBar
              value={searchQuery}
              setSearchQuery={setSearchQuery}
              searchQuery={searchQuery || searchResults?.length}
              handleSearch={handleSearch}
            />

            {searchResults?.length
              ? sponsor.map((d, index) => (
                  <Sponsers sponsor={d} key={index} searchQuery={searchQuery} />
                ))
              : null}
            {searchResults?.map((result, index) => (
              <SearchResult key={index} result={result} index={index} />
            ))}

            <ul className="text-xs text-[#888] sticky top-[calc(100vh-50px)] flex items-center justify-center my-6">
              <li className="">
                <Link
                  className="PartialPageFooter-item-link"
                  href="/privacy-policy"
                  data-qo="footerLinks"
                >
                  Privacy Policy
                </Link>
              </li>

              <li className="pl-2">
                <Link
                  className="PartialPageFooter-item-link"
                  href="/terms"
                  data-qo="footerLinks"
                >
                  Terms of Service
                </Link>
              </li>

              <li className="pl-2">
                <Link
                  className="PartialPageFooter-item-link"
                  href="/help"
                  data-qo="footerLinks"
                >
                  Help
                </Link>
              </li>

              <li className="pl-2">
                <span className="PartialPageFooter-item-label copyright">
                  © 2023 {window.location.hostname}
                </span>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="bg-white"></div>
      )}
    </>
  );
};

export default HomePage;
