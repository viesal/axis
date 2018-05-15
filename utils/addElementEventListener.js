export function addElementEventListener(element, eventName, callback) {
    element.addEventListener(eventName, callback);

    return () => {
        element.removeEventListener(eventName, callback);
    };
}