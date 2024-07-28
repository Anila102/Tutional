import React from 'react'
import Steps from './Steps'

const Progress = () => {
  const stepsData = [
    { number: '01', label: 'About', status: true },
    { number: '02', label: 'Profile Image', status: true },
    { number: '03', label: 'Education', status: true },
    { number: '04', label: 'Video', status: true },
    { number: '05', label: 'Availaiblity', status: false },
    { number: '06', label: 'Subjects & Pricing', status: false },
  ];
  return (
    <div className='d-flex justify-content-center'>
      <Steps stepsData={stepsData} />
    </div>
  )
}

export default Progress