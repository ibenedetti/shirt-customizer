import { createContext, useContext, useState } from 'react'

const CustomizationContext = createContext ({});

export const CustomizationProvider = (props) => {
    const [color, setColor] = useState("#ffffff"); 
    const [side, setSide] = useState("front");
    const [decal, setDecal] = useState(null);
    const [decalPosY, setDecalPosY] = useState(0.5); 
    const [decalPosZ, setDecalPosZ] = useState(-0.05); 
    const [decalScale, setDecalScale] = useState(0.25); 

    return (
        <CustomizationContext.Provider value={{
            color, setColor, 
            side, setSide, 
            decal, setDecal,
            decalPosY, setDecalPosY, 
            decalPosZ, setDecalPosZ,
            decalScale, setDecalScale
        }}>
            {props.children}
        </CustomizationContext.Provider>
    )
}

export const useCustomization = () => {
    const context = useContext(CustomizationContext);
    return context;
}