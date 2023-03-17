import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({children}) => {

    const [area, setArea] = useState();
    const [constant, setConstant] = useState();
    const [density, setDensity] = useState();
    const [initialMasses, setInitialMasses] = useState([]);
    const [currentUser, setCurrentUser] = useState();
    const [settingsChanged, setSettingsChanged] = useState(true); //state para verificar se houve mudança nas configurações
                                                                 //e impedir atualização desnecessária dos dados (generalSettings) no componente home

    return (
        <DataContext.Provider
            value={{area, setArea, constant, setConstant, density, setDensity, initialMasses, setInitialMasses, currentUser, setCurrentUser, settingsChanged, setSettingsChanged}}
        >
            {children}
        </DataContext.Provider>
    );
}
