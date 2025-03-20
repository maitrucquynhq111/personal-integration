/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { API_URL, DATABASE_ID_HISTORY_TABLE } from "~app/utils/constants";
console.log("🚀 ~ :5 ~ API_URL:", API_URL);

const NotionWorkout = () => {
  const [listExercises, setListExercises] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(
      API_URL + "/databases/" + DATABASE_ID_HISTORY_TABLE,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filter: {
            property: "Notes",
            rich_text: {
              contains: "-",
            },
          },
        }),
      }
    );

    const result = await response.json();
    setListExercises(
      Array.isArray(result?.data?.results) ? result?.data?.results : []
    );
  };

  const getNotes = (exercise: any) => {
    return exercise?.properties?.Notes.title[0].plain_text || "";
  };
  const getDate = (exercise: any) => {
    return exercise?.properties?.Date?.rollup?.array[0]?.date?.start || "";
  };

  const submit = async (exercise: any) => {
    setLoading(true);
    await fetch(API_URL + "/update-exercise-notion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exercise),
    });
    await getData();
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div id="section2" className="p-8 mt-6 rounded shadow bg-white w-6/12">
        <form>
          <div className="mb-6">
            <label
              className="block text-black text-2xl font-bold mb-3 pr-4"
              htmlFor="my-select"
            >
              Exercise
            </label>
            {listExercises.map((exercise: any, index) => (
              <div
                key={`${index}-${exercise?.id}`}
                className="flex flex-row justify-between border-b border-gray-300 px-4 pb-2"
              >
                <div className="flex flex-col ">
                  <p className="text-black text-lg font-medium">
                    {getNotes(exercise)}
                  </p>
                  <p className="text-gray-500 text-sm font-medium">
                    {getDate(exercise)}
                  </p>
                </div>
                <button
                  type="button"
                  className={loading ? "text-gray-400" : "text-sky-500"}
                  disabled={loading}
                  onClick={() => {
                    submit(exercise);
                  }}
                >
                  Convert
                </button>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default NotionWorkout;
