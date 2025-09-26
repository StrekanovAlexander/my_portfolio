export default function BlockInfo2({ title, description, list }) {
  return (
    <div className="border-l-2 border-red-600 pl-6 relative">
      <h3 className="font-montserrat font-bold text-xl text-gray-900 dark:text-gray-100 mb-4">
        { title }
      </h3>
      {description &&
        <p className="font-roboto font-semibold text-gray-700 dark:text-gray-400 leading-relaxed">
          { description }
        </p>
      }
      {list &&
        <ul className="list-disc list-inside space-y-1 font-roboto text-gray-700 dark:text-gray-300">
          { list.map((el, ix) => <li key={ix}>{el}</li>) }
        </ul>
      }
    </div>
  );
}