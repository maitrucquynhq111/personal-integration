/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { API_URL } from "~app/utils/constants";

const NotionWorkout = () => {
  const [listExercises, setListExercises] = useState([]);
  const [exerciseChoose, setExerciseChoose] = useState("");
  const [exerciseDetail, setExerciseDetail] = useState("");
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        API_URL + "/databases/" + "15db01dbbb89819bb5e2c61d4cfc00b6",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        }
      );

      const result = await response.json();
      setListExercises(
        Array.isArray(result?.data?.results) ? result?.data?.results : []
      );
    };
    getData();
  }, []);

  const getName = (exercise: any) => {
    return exercise?.properties?.Name.title[0].plain_text;
  };

  const submit = async () => {
    const data = {
      parent: {
        database_id: "15db01dbbb8981e490bdc994ce7c2dde",
      },
      properties: {
        Set: {
          number: 1,
        },
        Exercise: {
          relation: [{ id: exerciseChoose }],
        },
      },
    };
    const response = await fetch(API_URL + "/page", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("🚀 ~ submit ~ response:", response);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div id="section2" className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
        <form>
          <div className="md:flex mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                htmlFor="my-select"
              >
                Exercise
              </label>
            </div>
            <div className="md:w-2/3">
              <select
                name=""
                className="form-select block w-full p-2 bg-gray-100 text-black"
                id="my-select"
                onChange={(event) => setExerciseChoose(event.target.value)}
              >
                {listExercises.map((exercise: any, index) => (
                  <option key={index} value={exercise.id}>
                    {getName(exercise)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="md:flex mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                htmlFor="my-textfield"
              >
                Detail Exercise
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="form-input block w-full p-2 bg-gray-100 text-black"
                id="my-textfield"
                type="text"
                onChange={(event) => setExerciseDetail(event.target.value)}
                // value=""
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={() => submit()}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NotionWorkout;
