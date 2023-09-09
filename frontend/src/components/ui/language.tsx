import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import "flag-icons/css/flag-icons.min.css"

interface Lang {
  id: string,
  name: string,
  flag: string,
}

const languages: Array<Lang> = [
  {
    id: "en",
    name: 'English',
    flag: "gb",
  },
  {
    id: "es",
    name: 'Español',
    flag: "es",
  },
  {
    id: "jp",
    name: '日本語',
    flag: "jp",
  },
  {
    id: "cn",
    name: '中文',
    flag: "cn",
  },
  {
    id: "kr",
    name: '한국',
    flag: "kr",
  },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

interface LanguageProps {
  value: string,
  onChange: (language: string) => any,
}

function Language({value, onChange}: LanguageProps) {

  const defaultValue = languages.find((lang) => lang.name == value);

  const [selected, setSelected] = useState<Lang>(defaultValue == undefined ? languages[0] : defaultValue);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="fixed top-16 w-72">
            <Listbox value={selected} onChange={(val: Lang) => {
              setSelected(val);
              onChange(val.id);
            }}>
              {({ open }) => (
                <>
                  <div className="relative mt-2">
                    <Listbox.Button className="w-48 relative cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                      <span className="flex items-center">
                        <span className={"fi " + "fi-" + selected.flag}/>
                        <span className="ml-3 block truncate">{selected.name}</span>
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {languages.map((language) => (
                          <Listbox.Option
                            key={language.id}
                            className={({ active }) =>
                              classNames(
                                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                'relative cursor-default select-none py-2 pl-3 pr-9'
                              )
                            }
                            value={language}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className="flex items-center">
                                  <span className={"fi " + "fi-" + language.flag}/>
                                  <span
                                    className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                  >
                                    {language.name}
                                  </span>
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? 'text-white' : 'text-indigo-600',
                                      'absolute inset-y-0 right-0 flex items-center pr-4'
                                    )}
                                  >
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Language;

