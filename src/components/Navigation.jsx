import { useState } from "react";
import { useAppContext } from "../context/AppContext.jsx";
import Section from "./Section.jsx";
import { sections } from "../data/sections.jsx";

export default function Navigation() {
  const { language } = useAppContext();
  const [active, setActive] = useState("education");

  const handleClick = (key) => {
    if (key !== active) {
      setActive(key);
    }
  };

  const langSections = sections[language];

  return (
    <section className="w-full">
      <div className="max-w-5xl mx-auto px-6 py-2">

        <div className="flex justify-center gap-6 mb-8">
          {Object.keys(langSections).map((key) => (
            <button
              key={key}
              onClick={() => handleClick(key)}
              className={`uppercase font-sans font-bold tracking-wide px-3 py-1 border-b-2 transition-colors ${
                active === key
                  ? "border-red-700 dark:border-red-500 text-red-700 dark:text-red-500"
                  : "border-transparent hover:border-gray-400 text-gray-900 dark:text-gray-100"
              }`}
            >
              {langSections[key].title}
            </button>
          ))}
        </div>

        <div className="min-h-[300px]">
          <Section
            title={langSections[active].title}
            icon={langSections[active].icon}
            leftContent={langSections[active].left}
            rightContent={langSections[active].right}
          />
        </div>

      </div>
    </section>
  );
}
