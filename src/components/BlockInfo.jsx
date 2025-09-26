export default function BlockInfo({ header, period, description, list }) {
    return (
        <div className="border-l-2 border-red-600 pl-6 relative">
            <div className="absolute -left-[10px] top-2 w-4 h-4 rounded-full bg-red-600"></div>
            <h3 className="font-montserrat font-bold text-xl text-gray-900 dark:text-gray-100">
                { header }
            </h3>
            {period &&
                <span className="block font-roboto text-sm text-gray-500 dark:text-gray-400 mb-2">
                    { period }
                </span>
            }
            {description &&
                <p className="font-roboto font-semibold text-gray-700 dark:text-gray-400 leading-relaxed">
                    { description }
                </p>
            }    
            {list && 
                <ul className="list-disc pl-6 space-y-2 font-roboto text-gray-700 dark:text-gray-400 my-1">
                    {list.map((el, ix) => <li key={ix}>{el}</li>)}
                </ul>
            }
        </div>
    );
}