import { createContext } from 'react';

export const DataContext = createContext('');

export function DataContextProvider(props: any){
    const dataContext: string =  "";

    return (
        <DataContext.Provider value={dataContext} > { props.children }</DataContext.Provider>
    );
}