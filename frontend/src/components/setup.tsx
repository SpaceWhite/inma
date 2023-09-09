"use client"

import { FormEvent, useState } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import Language from "../components/ui/language";

export default function Setup() {
  const router = useRouter();

  async function setLanguageCookie(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    setCookie("languages", [formData.get("language1"), formData.get("language2")]);

    router.refresh();
  }
  
  const [languages, setLanguages] = useState(["English", ""]);

  const [weblang, setWeblang] = useState("en");

  function addLanguage() {
    setLanguages([...languages, ""]);
  }

  return (
    <div className="bg-white">
      <Language value={weblang} onChange={setWeblang}/>
      <form onSubmit={setLanguageCookie}>
        <div className="space-y-10">
          <div className="border-b border-gray-900/10 pb-12">
            <h1 className="text-2xl font-semibold leading-7 text-gray-900">First, we need a little information about you</h1>
            <p className="text-lg leading-6 text-gray-600">
              What language do you understand?
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {languages.map((language, index) => 
              <div className="col-span-full" key={index}>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Language {index + 1}
                </label>
                <div className="mt-2 grid grid-cols-2">
                  <select
                    name={"language" + (index + 1)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option></option>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>Japanese</option>
                    <option>Chinese</option>
                    <option>Korean</option>
                  </select>
                  <ul className="grid w-full gap-6 md:grid-cols-3">
                    <li>
                        <input type="checkbox" id={"can-read-" + index} value="" className="hidden peer"/>
                        <label htmlFor={"can-read-" + index} className="inline-flex items-center between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">                           
                              <div className="w-full text-sm">I can read</div>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id={"can-write-" + index} value="" className="hidden peer"/>
                        <label htmlFor={"can-write-" + index} className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">                           
                              <div className="w-full text-sm">I can write</div>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id={"can-speak-" + index} value="" className="hidden peer"/>
                        <label htmlFor={"can-speak-" + index} className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">                           
                              <div className="w-full text-sm">I can speak</div>
                        </label>
                    </li>
                  </ul>
                </div>
              </div>
              )}

            </div>
          </div>

          <button type="button" className="flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-small rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 focus:outline-none dark:focus:ring-blue-800" onClick={addLanguage}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>

            Add language
          </button>
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
    </div>
  )
}
