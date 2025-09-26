export default function Section({ title, icon: Icon, leftContent, rightContent }) {
    return (
        <div className="grid md:grid-cols-2 gap-8 relative">
            <div className="pr-4 border-r border-gray-300 dark:border-gray-600">
                <h2 className="text-2xl md:text-3xl font-roboto font-extrabold mb-4 border-b border-gray-300 pb-2 flex items-center justify-between uppercase">
                    {title}
                    {Icon && <Icon className="text-red-700 dark:text-red-500" size={28} />}
                </h2>
                { leftContent.map((el, ix) => (
                    <div key={ ix } className="font-serif leading-relaxed mb-4">
                        { el }
                    </div>
                )) }
            </div>
            <div className="pl-4">
                { rightContent.map((el, ix) => (
                    <div key={ ix } className="font-serif leading-relaxed mb-4">
                        { el }
                    </div>
                ))}
            </div>
        </div>
    );
}