export async function getData(path: string, callBack: CallableFunction) {
    try {
        const fetchResult = await fetch(path);
        const json = await fetchResult.json();
        callBack({ data: json });
    } catch (e) {
        const error = e as Error;

        switch (error.name) {
            case 'SyntaxError':
                callBack({ error: 'Error during parsing data' });
                break;

            case 'TypeError':
                callBack({ error: 'Error during gathering data' });
                break;

            default:
                callBack({ error: 'Ehhhh.... this error isn\'t planned... sorry' });
                break;
        }
    }
}
