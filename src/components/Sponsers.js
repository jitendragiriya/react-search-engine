import React from "react";

const Sponsers = ({ sponsor, searchQuery }) => {
  const mainLink = `https://www.amazon.com/gp/search?ie=UTF8&tag=alexparkermc-20&linkCode=ur2&linkId=67db50b02d396ddb247d753b6051d1eb&camp=1789&creative=9325&index=aps&keywords=${searchQuery}`;

  return (
    <>
      <div className="p-4">
        <h2 className="text-sm font-bold mb-2 text-[#202124]">Sponsored</h2>
        <div className="mb-1">
          <a target="_blank" href={mainLink}>
            <p className="text-sm mb-1">{sponsor?.link}</p>
            <p className="text-xs lowercase">{sponsor?.link}</p>
          </a>
        </div>
        <a target="_blank" href={mainLink} className="text-xl text-[#1a0dab]">
          {sponsor?.mainHeading}
        </a>
        <h2 className="text-sm">{sponsor?.mainDescription}</h2>

        <div className="p-[18px] pb-0 pr-0 grid sm:grid-cols-2 gap-5">
          {sponsor?.subHeadings?.map((data) => (
            <div key={data?.heading}>
              <a
                target="_blank"
                href={mainLink}
                className="text-xl text-[#1a0dab]"
              >
                {data?.heading}
              </a>
              <p className="text-sm">{data?.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="p-4">
        <h2 className="text-sm font-bold mb-2 text-[#202124]">Sponsored</h2>
        <div className="mb-1">
          <a target="_blank" href={mainLink}>
            <p className="text-sm mb-1">
              {sponsor?.link1?.replace("https://", "")}
            </p>
            <p className="text-xs lowercase">{sponsor?.link1}</p>
          </a>
        </div>
        <a target="_blank" href={mainLink} className="text-xl text-[#1a0dab]">
          {sponsor?.heading1}
        </a>
        <h2 className="text-sm">{sponsor?.description1}</h2>
      </div> */}

      {/* <div className="p-4">
        <h2 className="text-sm font-bold mb-2 text-[#202124]">Sponsored</h2>
        <div className="mb-1">
          <a target="_blank" href={mainLink}>
            <p className="text-sm mb-1">
              {sponsor?.link2?.replace("https://", "")}
            </p>
            <p className="text-xs lowercase">{sponsor?.link2}</p>
          </a>
        </div>
        <a target="_blank" href={mainLink} className="text-xl text-[#1a0dab]">
          {sponsor?.heading2}
        </a>
        <h2 className="text-sm">{sponsor?.description2}</h2>
      </div> */}
    </>
  );
};

export default Sponsers;
