import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({children}) => {

    const [area, setArea] = useState();
    const [constant, setConstant] = useState();
    const [density, setDensity] = useState();

    return (
        <DataContext.Provider value={{area, setArea, constant, setConstant, density, setDensity}}>
            {children}
        </DataContext.Provider>
    );
}
