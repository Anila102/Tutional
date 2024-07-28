import React from 'react'
import uploadGuide from '../../assets/upload_guide.png'
import driveUpload from '../../assets/drive.png'
import bottomEllipse from '../../assets/background/bottomEllipse.png'
import BlueCircle from '../common/BlueCircle'


const VideoImgContainer = () => {
  return (
    <div className='position-relative'>
    <div className='d-flex justify-content-center'>
        <img src={uploadGuide} className='w-75 img_1 position-relative' />
        <img src={driveUpload} className=' img_2' />
    </div>
{/* <img src={bottomEllipse} /> */}
<BlueCircle customClass={'video_bottom_blue_circle'} />


    </div>
  )
}

export default VideoImgContainer