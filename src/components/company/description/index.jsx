import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

function CompanyDescriptionComponent({jobDetailsFromCompany}) {
    const [showMore,setShowMore] = useState(false)
  return (

    <>
    <Typography variant='h6'>About Company:</Typography>
    <Typography fontSize={18} fontWeight={700}>About us</Typography>
    <Typography> {showMore ? jobDetailsFromCompany:`${jobDetailsFromCompany.substring(0,250)}...`  }</Typography>
    <Button sx={{textTransform:"capitalize"}} onClick={()=>{
        setShowMore(!showMore);
    }}>{showMore ? "Show Less":"Show more"
}</Button>
    </>
  )
}

export default CompanyDescriptionComponent