import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import { Box, Divider } from '@mui/material';
const BottomNav = () => {
    const nav = [
        {
            name: 'Terms & Conditions',
            icon: <TextSnippetOutlinedIcon sx={{color: 'orange', fontSize: '3rem'}} />
        },
        {
            name: 'Return Policy',
            icon: <ReplyOutlinedIcon sx={{color: 'orange', fontSize: '3rem'}} />
        },
        {
            name: 'Support Policy',
            icon: <SupportOutlinedIcon sx={{color: 'orange', fontSize: '3rem'}} />
        },
        {
            name: 'Privacy Policy',
            icon: <ErrorOutlineIcon sx={{color: 'orange', fontSize: '3rem'}} />
        },
    ]
  return (
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap',}} my='2rem' backgroundColor='white'>
        {
            nav.map((item) => {
                return (
                    <>
                        <div className='select-none cursor-pointer flex flex-col items-center justify-center py-[1.5rem]  lg:border-r px-[4rem]'>
                            <p className='text-orange '>{item.icon}</p>
                            <p>{item.name}</p>
                        </div>
                    </>
                )
            })
        }
    </Box>
  )
}

export default BottomNav