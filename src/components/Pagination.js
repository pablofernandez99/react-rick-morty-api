import React from 'react'
import ReactPaginate from 'react-paginate'



const Pagination = ({count, pageChange}) => {
    return (
        <ReactPaginate
            pageCount={count}
            pageRangeDisplayed={0}
            marginPagesDisplayed={1}
            onPageChange={pageChange}
            containerClassName={'paginations'}
            previousLinkClassName={'previous'}
            breakClassName={'break'}
            nextLinkClassName={'next'}
            pageClassName={'page'}
            disabledClassName={'disabled'}
            activeClassName={'active'}
            nextLabel={'next'}
        />
    )
}

export default Pagination