import React, { useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { FaPlusCircle } from 'react-icons/fa'
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { USERS_UPLOADIMAGE, USERS_REMOVEIMAGE } from '../../common/API-Types'

const FileUpload = (props) => {

    const [loading, setLoading] = useState(false);
    

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: files => {
            setLoading(true)
            let formData = new FormData()
            const config = {
                header: { 'content-type': 'multipart/form-data' }
            }
            formData.append("file", files[0])
            axios.post(USERS_UPLOADIMAGE, formData, config).then(res => {
                setLoading(false)
                props.setUploadedFiles([...props.uploadedFiles, res.data])
            })
        }
    });

    const handleRemoveImage = (id) => {
        axios.get(`${USERS_REMOVEIMAGE}?public_id=${id}`).then(res => {
            let images = props.uploadedFiles.filter(item => {
                return item.public_id !== id
            })
            props.setUploadedFiles(images)
        })
    }

    return (
        <Box component='section'>
            <Box className='dropzone clear'>
                <Box {...getRootProps({ className: 'dropzone_box' })} sx={{ cursor: 'pointer' }}>
                    <input {...getInputProps()} />
                    <Box className='wrap'>
                        <FaPlusCircle />
                    </Box>
                </Box>
                {props.uploadedFiles.map(item => (
                    <Box className='dropzone_box'
                        key={item.public_id}
                        sx={{ width: 'fit-content' }}
                    >
                        <Box component='img'
                            src={item.url}
                            onClick={() => handleRemoveImage(item.public_id)}
                            sx={{ height: '100%', cursor: 'pointer' }} />
                    </Box>
                ))}
                {loading ?
                    <Box className='dropzone_box' sx={{ textAlign: 'center', paddingTop: '60px' }}>
                        <CircularProgress thickness={7} sx={{ color: '#00bcd4' }} />
                    </Box>
                    :
                    null
                }
            </Box>
        </Box>
    );
}

export default FileUpload;