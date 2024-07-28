import React from 'react';
import Logo from '../../assets/logos/header_logo.png';
import BlueCircle from '../../components/common/BlueCircle';

const Header = () => {
  return (
    <>
      <div className="bg-white shadow-sm d-flex justify-content-center align-items-center  p-2 header">
        <div className="d-flex justify-content-center w-100">
          <img src={Logo} alt='logo' className="img-fluid mw-md-100 mw-50" />
        </div>
      </div>
      <BlueCircle customClass={'small_blue_circle'} />
      <BlueCircle customClass={'large_blue_circle'} />
    </>
  );
};

export default Header;
