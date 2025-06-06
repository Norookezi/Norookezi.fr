export function LoadingFetch() {
    return (
        <li className="text-gray-400 dark:text-gray-600 snap-center animate-pulse">
            <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="bg-gray-200 dark:bg-gray-700 rounded w-32 h-5 inline-block"></span>
                    <span className="bg-gray-100 dark:bg-gray-800 rounded w-20 h-4 inline-block"></span>
                </div>
                <div className="text-sm">
                    <span className="bg-gray-100 dark:bg-gray-800 rounded w-24 h-4 inline-block"></span>
                    <span className="mx-1"></span>
                    <span className="bg-gray-100 dark:bg-gray-800 rounded w-16 h-4 inline-block"></span>
                </div>
                <div>
                    <span className="bg-gray-100 dark:bg-gray-800 rounded w-full h-4 block mb-1"></span>
                    <span className="bg-gray-100 dark:bg-gray-800 rounded w-3/4 h-4 block"></span>
                </div>
            </div>
        </li>
    );
}

