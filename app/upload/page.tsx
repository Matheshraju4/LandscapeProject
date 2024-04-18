"use client";

import Select from "@/components/select";
import axios from "axios";
import { cookies } from "next/headers";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

export default function Upload() {
  const router = useRouter();
  useEffect(() => {
    async function getUserDetails() {
      const response = await axios.post("/upload/checkcookie");
      if (response.data.success === false) {
        router.push("/");
      }
    }
    getUserDetails();
  });

  const [file, setfile] = useState<FileList | null>(null);
  const [type, settype] = useState("All");

  const onsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      return;
    }
    try {
      const data = new FormData();
      data.append("type", type);
      for (let i = 0; i < file.length; i++) {
        data.append("files", file[i]);
        console.log(data);
      }
      const res = await fetch("api/upload", { method: "POST", body: data });
      if (res.ok) {
        alert("Uploaded Successfully");
      }
      if (!res.ok) {
        throw new Error(await res.text());
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center w-full">
        {" "}
        <form onSubmit={onsubmit}>
          <Select onChange={(value: string) => settype(value)} />
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
            </div>
            <input
              type="file"
              name="file"
              onChange={(e) => {
                setfile(e.target.files);
              }}
              multiple
            />
          </label>

          <button
            type="submit"
            value="upload"
            className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded "
          >
            Upload
          </button>
        </form>
      </div>
    </>
    // <div>
    //   <form onSubmit={onsubmit}>
    //     <input
    //       type="file"
    //       name="file"
    //       onChange={(e) => {
    //         setfile(e.target.files);
    //       }}
    //       multiple
    //     />
    //     <button type="submit" value="upload">
    //       Upload
    //     </button>
    //   </form>
    // </div>
  );
}
