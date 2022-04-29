import React from "react";


const useLocalStorage = (key, initialValue) => {

    const localStorageKey = localStorage.getItem(key)
    let parsedKey;

    if (!localStorageKey) {
        localStorage.setItem(key, JSON.stringify(initialValue))
        parsedKey = initialValue
    } else {
        parsedKey = JSON.parse(localStorageKey)
    }

    const [content, setContent] = React.useState(parsedKey)

    const saveContent = (newContent) => {
        const parsedContent = JSON.stringify(newContent)
        localStorage.setItem(key, parsedContent)
        setContent(newContent)
    }

    return [content, saveContent]

}

export { useLocalStorage }