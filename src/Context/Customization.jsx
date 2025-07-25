import { createContext, useContext, useState } from 'react'

const CustomizationContext = createContext ({});

export const CustomizationProvider = (props) => {
    const [color, setColor] = useState("#ffffff"); 
    const [side, setSide] = useState("front");
    const [decal, setDecal] = useState(null)
    return (
        <CustomizationContext.Provider value={{color, setColor, side, setSide, decal, setDecal}}>
            {props.children}
        </CustomizationContext.Provider>
    )
}

export const useCustomization = () => {
    const context = useContext(CustomizationContext);
    return context;
}