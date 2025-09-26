import { Phone, AtSign } from "lucide-react";
import { useAppContext } from "../context/AppContext.jsx";
import { headerContent } from "../data/headerContent.js";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

export default function Header() {
  const { language, setLanguage } = useAppContext();
  const { firstName, lastName, intro, description } = headerContent[language];
  
  return (
    <header className="w-full">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 flex flex-col justify-center bg-gray-100 dark:bg-gray-800">
            <h1 className="text-5xl font-roboto font-bold mb-4 tracking-wide">
              {firstName} {lastName}
            </h1>
            <h2 className="text-2xl font-serif font-semibold mb-6">
              { intro }
            </h2>
            <div className="flex items-center gap-3 text-lg font-serif text-gray-700 dark:text-gray-300 leading-relaxed mb-2"><Phone className="w-5 h-5" />0152 58403623</div>
            <div className="flex items-center gap-3 text-lg font-serif text-gray-700 dark:text-gray-300 leading-relaxed mb-4"><AtSign />strekanov.alexander@gmail.com</div>
            <LanguageSwitcher
              currentLanguage={language}
              onChange={setLanguage}
            />
          </div>
          <div className="flex items-start justify-center bg-white dark:bg-gray-900">
            <img
              src="/foto.jpg"
              alt=""
              className="w-full object-cover max-h-[300px] md:max-h-[400px]"
            />
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300 dark:border-gray-600 my-4"></div>
    </header>
    )
}