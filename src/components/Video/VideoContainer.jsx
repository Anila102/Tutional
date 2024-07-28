import React from 'react';
import { motion } from 'framer-motion';
import VideoImgContainer from './VideoImgContainer';
import AddVideoPart from './AddVideoPart';
// import BlueCircle from '../common/BlueCircle';
import bottomEllipse from '../../assets/background/bottomEllipse.png'

const VideoContainer = () => {
  return (
    <div className=' row overflow-hidden my-4 w-100' >
      <motion.div
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 2 }}
        exit={{ x: '100vw', opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="right-div col-lg-6  d-lg-flex align-items-center d-none ps-lg-4 px-3"
        style={{

        }}
      >
        <VideoImgContainer /> 
      </motion.div>

      <motion.div
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 2 }}
        exit={{ x: '-100vw', opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="left-div col-lg-6 col-12 pe-lg-4 px-3"
      
      >
       <AddVideoPart />
      </motion.div>
    </div>
  );
}

export default VideoContainer;
