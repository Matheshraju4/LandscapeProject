"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [flowerdata, setFlowerdata] = useState<string[] | any>();
  const [plantsdata, setPlantsdata] = useState<string[] | any>();
  const [modeldata, setModeldata] = useState<string[] | any>();
  const [displayflower, setDisplayflower] = useState(true);
  const [displayplants, setDisplayplants] = useState(true);
  const [displaymodel, setDisplaymodel] = useState(true);
  const [all, setall] = useState(true);
  useEffect(() => {
    async function getUserDetails() {
      try {
        const response = await axios.get("http://localhost:3000/api/");

        setFlowerdata(response.data.imageFileNames);
        setModeldata(response.data.modelFileNames);
        setPlantsdata(response.data.plantsFileNames);
        return response.data;
      } catch (e) {
        console.log(e);
      }
    }
    getUserDetails();
  }, []);
  return (
    <>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          onClick={() => {
            setDisplayflower(true);
            setDisplayplants(true);
            setDisplaymodel(true);
            setall(true);
          }}
          type="button"
          className={
            all === true
              ? "text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
              : "text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
          }
        >
          All categories
        </button>
        <button
          onClick={() => {
            setDisplayflower(true);
            setDisplayplants(false);
            setDisplaymodel(false);
            setall(false);
          }}
          type="button"
          className={
            displayflower === true
              ? "text-blue-700 max-h-16 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
              : "text-gray-900  max-h-16 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
          }
        >
          Flowers
        </button>
        <button
          onClick={() => {
            setDisplayflower(false);
            setDisplayplants(false);
            setDisplaymodel(true);
            setall(false);
          }}
          type="button"
          className={
            displaymodel === true
              ? "text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
              : "text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
          }
        >
          Models
        </button>
        <button
          onClick={() => {
            setDisplayflower(false);
            setDisplayplants(true);
            setDisplaymodel(false);
            setall(false);
          }}
          type="button"
          className={
            displayplants === true
              ? "text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
              : "text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
          }
        >
          Plants and Trees
        </button>
      </div>
      {displayflower === true ? (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-10">
            {flowerdata &&
              flowerdata.map((data: string) => {
                return (
                  <div>
                    <img
                      className="max-h-250 max-w-250 rounded-lg"
                      src={"./Flowers/" + data}
                      alt=""
                    />
                  </div>
                );
              })}
            {/* <div>
          <img
            className="max-h-250 max-w-full rounded-lg"
            src={"./Flowers/"}
            alt=""
          />
        </div> */}
          </div>
        </>
      ) : (
        <></>
      )}

      {displaymodel === true ? (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-10">
            {modeldata &&
              modeldata.map((data: string) => {
                return (
                  <div>
                    <img
                      className="max-h-250 max-w-250 rounded-lg"
                      src={"./Models/" + data}
                      alt=""
                    />
                  </div>
                );
              })}
          </div>{" "}
        </>
      ) : (
        <></>
      )}
      {displayplants === true ? (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-10">
            {plantsdata &&
              plantsdata.map((data: string) => {
                return (
                  <div>
                    <img
                      className="max-h-250 max-w-250 rounded-lg"
                      src={"./Plants_and_trees/" + data}
                      alt=""
                    />
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Home;
