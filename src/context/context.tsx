import React, { createContext, useContext, useState } from "react"

interface contextProps {
    contextValue: string,
    setContextValue: React.Dispatch<React.SetStateAction<string>>,
}
interface providerProps {
    children: React.ReactNode
}

export const initContext = createContext<contextProps | undefined>(undefined);

    

export const ProviderContext = ({children}: providerProps) => {
    const [ contextValue, setContextValue ] = useState("");
    return (
        <initContext.Provider value={{ contextValue, setContextValue }}>{ children }</initContext.Provider>
    );
}

export function ContextUse(){
    const context = useContext(initContext);
    if(context === undefined){
        throw new Error(`Error ${Error.name}`)
    };
    return context;
}