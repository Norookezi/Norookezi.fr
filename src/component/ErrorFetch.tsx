interface ErrorFetchProps {
    message: string;
    description?: string
}

export function ErrorFetch({ message, description }: ErrorFetchProps) {

    return (
        <div className="flex flex-col items-center mx-auto w-fit gap-3 bg-gradient-to-r from-red-100 via-red-200 to-red-100 dark:from-red-900 dark:via-red-800 dark:to-red-900 text-red-700 dark:text-red-200 px-6 py-4 rounded-2xl shadow-lg border border-red-200 dark:border-red-800">
            <div className="flex items-center gap-3">
                <span className="text-lg font-semibold">{message}</span>
            </div>
            {description && (
                <div className="mt-2 text-sm text-red-600 dark:text-red-300 text-center max-w-xs">
                    {description}
                </div>
            )}
        </div>
    );
}
