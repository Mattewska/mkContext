import React, { createContext, useState } from "react"

interface contextProps {
    contextValue: string,
    setContextValue: React.Dispatch<React.SetStateAction<string>>,
}
interface providerProps {
    children: React.ReactNode
}

export const initContext = createContext<contextProps | undefined>(undefined);

    

    export const providerContext = ({children}: providerProps) => {
        const [ contextValue, setContextValue ] = useState("");
        return (
            <initContext.Provider value={{ contextValue, setContextValue }}>{ children }</initContext.Provider>
        );
    }
