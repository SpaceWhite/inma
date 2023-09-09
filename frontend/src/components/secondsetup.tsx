"use client";

import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Language from "../components/ui/language";

function SecondSetup() {

  const medicalAids = [
    "doctor",
    "dentist",
    "eye doctor",
    "skin doctor"
  ];


  const router = useRouter();

  async function setMedicalAid(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    setCookie("medicalAids", [])

    router.refresh();
  }

  const [language, setLanguage] = useState("en");

  return (
    <div className="bg-white">
      <Language value={language} onChange={setLanguage}/>
      <section className="text-gray-600 body-font">
        <form onSubmit={setMedicalAid}>
          <div className="container px-5 py-4 mx-auto border-b">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-10 text-gray-900">What do you need?</h1>
            </div>
            <div className="flex flex-wrap p-12 m-4 text-center">
              <ul className="grid w-full gap-6 md:grid-cols-4">
                {medicalAids.map((medicalAid, index) => 
                  <li key={index}>
                      <input type="checkbox" id={"react-option" + index} value="" className="hidden peer"/>
                      <label htmlFor={"react-option" + index} className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600peer-checked:text-gray-600 hover:bg-gray-50">                           
                      <div className="w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-indigo-500 inline-block">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>

                        <p className="leading-relaxed">I need {medicalAid}</p>
                      </div>
                      </label>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Next
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default SecondSetup;
