export default function Rating({ value = 0, max = 6 }) {
    return (
        <div className="flex gap-2">
            {Array.from({ length: max }, (_, i) => {
                const score = i + 1;
                return (
                    <span
                        key={i}
                        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                            score <= value ? "bg-gray-600" : "bg-gray-300 dark:bg-gray-400"
                        }`}
                    />
                );
            })
        }
    </div>
  );
}