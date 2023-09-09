"use client";

import { FormEvent } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function Setup() {
  const router = useRouter();

  async function setLanguageCookie(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    setCookie("languages", [formData.get("language1"), formData.get("language2")]);

    router.refresh();
  }

  return (
    <form onSubmit={setLanguageCookie}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">First we need a little information about you</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            What language do you understand?
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Language 1
              </label>
              <div className="mt-2">
                <select
                  name="language1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option></option>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>Japanese</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Language 2
              </label>
              <div className="mt-2">
                <select
                  name="language2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option></option>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>Japanese</option>
                </select>
              </div>
            </div>
          </div>
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
  )
}
