import { Listbox, Transition } from "@headlessui/react";
import { DropdownIcon } from "./Icon";
import { useState, Fragment } from "react";

const people = [
  { name: 1 },
  { name: 2 },
  { name: 3 },
  { name: 4 },
  { name: 5 },
];

const Dropdown = () => {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="w-[75px] ">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-full  h-[61px] bg-[#80C4D3]  font-poppins font-medium text-[14px] text-white leading-[21px] border border-[#80C4D3] group hover:bg-white hover:text-[#80C4D3] duration-300 rounded-r-[5px] flex items-center justify-center gap-[10px] ">
            <span className="block truncate"> {selected.name}</span>
            <span className="absolute inset-y-0 right-4 flex items-center">
              <DropdownIcon />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Listbox.Options className="absolute max-h-60 w-full overflow-auto rounded-md bg-white">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected, active }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-semibold" : ""
                      }`}
                    >
                      {person.name}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Dropdown;
