import { useLocalStorage } from './useLocalStorage'
import { useEffect } from 'react'

export const useDarkMode = () => {

    const [darkMode, setDarkMode] = useLocalStorage('dark mode', false)
    
    useEffect(() => {
        //Grab the <body> so we can change the class names
        const body = document.getElementsByTagName('body')[0]
        //Add/Remove the dark-mode class depending on if darkMode is on/off
        darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')

    }, [darkMode])

    return [darkMode, setDarkMode]
}