import React, { useState, createContext, useEffect } from 'react'
import axios from 'axios'

export const CharacterContext = createContext()

const CharacterContextProvider = props => {
    const [ character, setCharacter ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(false)
    const [pageCount, setpageCount] = useState(1)
    const [currentPage, setcurrentPage] = useState(1)
    const runSearch = () => {
        axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
            .then( resp => {
                setCharacter(resp.data.results)
                setpageCount(resp.data.info.pages)
                setLoading(false)
            }, (err) => {
                setError(true)
                setLoading(true)
            })
    }

    const onPageChange = (selectedObject) => {
        setcurrentPage(selectedObject.selected + 1)
    }

    useEffect(() => {
        setLoading(true)
        runSearch()
    }, [currentPage])

    return (
        <CharacterContext.Provider value={{ character, loading, error, pageCount, onPageChange ,runSearch }}>
            {props.children}
        </CharacterContext.Provider>
    )
}

export default CharacterContextProvider