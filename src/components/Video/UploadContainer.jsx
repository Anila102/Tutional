import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsCloudUploadFill,BsFileEarmark  } from 'react-icons/bs';
import { color } from '../../constants/color';
import CustomButton from '../common/CustomButton';

const UploadContainer = () => {
    const [files, setFiles] = useState(null)
    const onDrop = useCallback(acceptedFiles => {
        console.log('Accepted files:', acceptedFiles);
        setFiles(acceptedFiles)
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} className='d-flex justify-content-center align-items-center h-100 bg-white file_uploader p-4'>
            <input {...getInputProps()} />
            <div>
                {files ? <div className='d-flex justify-content-center'>
                    <p className='text-dark text-center'>
                    File Uploaded! Drop Another?
                    <br />
                    
                    <BsFileEarmark  size={30} className='mx-2 my-3' style={{ color: color.primaryBlue }} /> {files[0].name}
                    </p>
                </div>:(<p className='text-dark'>
                    <BsCloudUploadFill size={30} className='mx-2' style={{ color: color.primaryBlue }} />
                    Drag and drop your files here
                    <br />
                    <span className='d-flex justify-content-center my-1'>OR</span>
                    <br />
                    <span className='d-flex justify-content-center'>
                        <CustomButton buttonText={'Choose File'} customClass={'custom_button px-3 py-2'} />
                    </span>
                </p>)}
            </div>
        </div>
    );
};

export default UploadContainer;
