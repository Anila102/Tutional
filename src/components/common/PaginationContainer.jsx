import React from 'react'
import { BsArrowLeft ,BsArrowRight   } from "react-icons/bs";

const PaginationContainer = () => {
    return (
        <div className='w-100 px-2 mt-4 d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
            <BsArrowLeft className='bg-white rounded-circle pagination_arrow' size={35}  /> <span className='fs-5 text-dark fw-semibold d-md-block d-none mx-3'>Back</span>
            </div>
            <div className='d-flex align-items-center'>
            <span className='fs-5 text-dark fw-semibold mx-3 d-md-block d-none'>Next</span> <BsArrowRight  className='bg-white pagination_arrow  rounded-circle' size={35} /> 
            </div>
        </div>
    )
}

export default PaginationContainer