import React from 'react';
// import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { motion } from 'framer-motion';
import logo from '../../assets/logos/header_logo.png'
const SpinnerContainer = () => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
    }}>
        {/* <Spinner animation="border"  size="xxl" /> */}
        <div className='spinner-container'>
            <motion.img
                src={logo}
                alt='Logo'
                className='logo'
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            />
        </div>
    </div>
);

export default SpinnerContainer;
