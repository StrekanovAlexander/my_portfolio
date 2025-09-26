import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
    const [language, setLanguage] = useState("de");
    const value = { language, setLanguage };

    return (
        <AppContext.Provider value={ value }>
            { children }
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
