import { Typography } from '@mui/material'
import React from 'react'

function CompanyDescriptionComponent({jobDetailsFromCompany}) {
  return (

    <>
    <Typography variant='h6'>About Company:</Typography>
    <Typography fontSize={18} fontWeight={700}>About us</Typography>
    <Typography>{jobDetailsFromCompany}</Typography>
    </>
  )
}

export default CompanyDescriptionComponent