import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const [searchFilter, setSearchFilter] = useState({
        title: '',
        locaton: ''
    })

    const [isSearched, setIsSearched] = useState(false)
    const value = {
        setSearchFilter,searchFilter,
        isSearched, setIsSearched
    }
    return(<AppContext.Provider value={value}>{props.children}</AppContext.Provider>)
}