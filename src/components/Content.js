import React, { useContext, useEffect } from 'react'
import loadable from '@loadable/component'
import { CharacterContext } from '../context/context'

const Loader = loadable(() => import('./Loader'))
const Gallery = loadable(() => import('./Gallery'))
const Pagination = loadable(() => import('./Pagination'))

const Content = () => {

    const { character, loading, pageCount, currentPage, onPageChange, runSearch } = useContext(CharacterContext)

    useEffect(() => {
        runSearch()
    }, [])

    return (
        <section>
            <section className="pagination">
                <Pagination count={pageCount} current={currentPage} pageChange={onPageChange} />
            </section>
            <section className="content">
                {loading ? <Loader /> : <Gallery data={character} />}
            </section>
        </section>
    )
}

export default Content