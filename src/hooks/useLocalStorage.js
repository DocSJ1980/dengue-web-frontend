import { useEffect, useState } from "react"

export const useLocalStorage = (key, value) => {
    useEffect(() => {
        localStorage.setItem(key, value)
    }, [key, value])
}

export const useLocalStorageRemove = (key) => {
    useEffect(() => {
        localStorage.removeItem(key)
    }, [key])
}

export const useLocalStorageGet = (key) => {
    const [value, setValue] = useState(localStorage.getItem(key))
    useEffect(() => {
        setValue(localStorage.getItem(key))
    }, [key])
    return value
}