"use client";

import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FormEvent, useState } from "react";
import Language from "../components/ui/language";
import generalDoctor from "../../public/doctor-icon.svg";
import dentist from "../../public/doctor-dentist-icon.svg";
import eyeDoctor from "../../public/doctor-optometrist-icon.svg";
import skinDoctor from "../../public/doctor-trichologist-icon.svg";
import physician from "../../public/doctor-physician-icon.svg";
import surgeon from "../../public/doctor-surgeon-icon.svg";
import gynecologist from "../../public/doctor-gynecologist-icon.svg";
import infectionDoctor from "../../public/doctor-infection-icon.svg";

function SecondSetup() {

  const medicalAids = [
    ["general doctor", generalDoctor],
    ["dentist", dentist],
    ["eye doctor", eyeDoctor],
    ["skin doctor", skinDoctor],
    ["physician", physician],
    ["surgeon", surgeon],
    ["gynecologist", gynecologist],
    ["infection doctor", infectionDoctor],
  ];


  const router = useRouter();

  async function setMedicalAid(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

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
            <div className="flex flex-wrap p-2 m-4 text-center">
              <ul className="grid w-full gap-6 md:grid-cols-4">
                {medicalAids.map((medicalAid, index) => 
                  <li key={index}>
                      <input type="checkbox" id={"react-option" + index} value="" className="hidden peer"/>
                      <label htmlFor={"react-option" + index} className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600peer-checked:text-gray-600 hover:bg-gray-50">                           
                      <div className="w-full">
                        <div className="w-20 h-20 inline-block">
                          <Image src={medicalAid[1]} alt={medicalAid[0]}/>
                        </div>

                        <p className="p-1 leading-relaxed">I need {medicalAid[0]}</p>
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
