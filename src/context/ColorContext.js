import React, { createContext, useState } from 'react';

const ColorContext = createContext()

const ColorContextProvider = ({ children }) => {

    const [color, setColor] = useState('#c7200e')

    const handleColor = (e) => {
        setColor(e.target.value)
    }

    return (
        <ColorContext.Provider value={{ color, handleColor }}>
            {children}
        </ColorContext.Provider>
    )
}

export { ColorContext, ColorContextProvider }