import { useEffect } from "react";
import { Phone, AtSign } from "lucide-react";
import { useAppContext } from "../context/AppContext.jsx";
import { headerContent } from "../data/headerContent.js";
import { titles } from "../data/titlesPage.js";

export default function Header() {
  const { language } = useAppContext();
  const { name, intro, description } = headerContent[language];

  useEffect(() => {
    document.title = titles[language].title;
  }, []);
  
  return (
    <header className="w-full">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 flex flex-col justify-center bg-gray-100 dark:bg-gray-800">
            <h1 className="font-montserrat font-bold text-3xl md:text-4xl tracking-tight text-gray-900 dark:text-gray-100">
              {name}
            </h1>
            <h2 className="font-roboto font-bold text-xl md:text-2xl text-red-700 dark:text-red-400 my-3 uppercase">
              { intro }
            </h2>
            <p className="font-roboto font-normal text-md text-gray-600">
              { description }
            </p>
            <div className="my-6">
              <div className="flex items-center gap-3 text-lg font-roboto text-gray-600">
                <Phone className="w-5 h-5" />0152 58403623
              </div>
              <div className="flex items-center gap-3 text-lg font-roboto text-gray-600">
                <AtSign />oleksandr.strekanov@gmail.com
              </div>
            </div>
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