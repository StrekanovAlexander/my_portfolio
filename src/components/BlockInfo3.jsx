import Rating from "./Rating.jsx";
export default function BlockInfo3({ title, list }) {
  return (
    <div className="border-l-2 border-red-600 pl-6 relative">
      <h3 className="font-montserrat font-bold text-xl text-gray-900 dark:text-gray-100 mb-4">
        { title }
      </h3>
      {list &&
        <ul className="list-disc list-inside space-y-1 font-roboto text-gray-700 dark:text-gray-300">
          { list.map((el, ix) => 
            <li key={ix} className="flex items-center">
                <div className="w-40 text-gray-700 dark:text-gray-300">
                  {el.title}
                </div>
                <div className="text-gray-900 dark:text-gray-100">
                  <Rating value={el.rating} />
                </div>
            </li>
          )}
        </ul>
      }
    </div>
  );
}