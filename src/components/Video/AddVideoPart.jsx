import React from 'react'
import UploadContainer from './UploadContainer'
import BlueCircle from '../common/BlueCircle'
import PaginationContainer from '../common/PaginationContainer'

const AddVideoPart = () => {
  return (
    <>
      <div className='position-relative p-lg-4 p-3'>
        <div>
          <h2 className='fw-semibold'>Video</h2>
          <p className='fw-400 text-secondary '>Control your availability by selecting these slots.</p>
        </div>
        <div className='upload-container p-4'>
          <UploadContainer />
          <div className='my-3'>
            <div className='fw-semibold my-2'>Add Video URL</div>
            <input placeholder='Video URL'  className='w-100 bg-white border-0 py-2 px-3 text-dark input_field ' />
          </div>
          <PaginationContainer />
        </div>
      </div>
      <BlueCircle customClass={'bottom_blue_circle d-lg-block d-none'} />
    </>
  )
}

export default AddVideoPart