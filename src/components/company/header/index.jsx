import React from 'react'
import PaperComponent from '../../paperComponent'
import { Stack, Typography } from '@mui/material'
import { FADE_COLOR } from '../../../lib/constants/Colors'
import { CURRENCY_ICON } from '../../../lib/constants/Text'
import {  CheckBox, HourglassBottom } from '@mui/icons-material'

function CompanyHeaderComponent({img="",companyName="",jobRole="",location="",minJdSalary=0,maxJdSalary=0}) {
  return (
   <>
   <PaperComponent paperStyle={{width:"110px",my:2,borderRadius:"18px",p:0.5,alignItems:"center",display:"flex",ml:0,elevation:0}}><HourglassBottom fontSize="small"/>
   <Typography fontSize={10}>
    Posted 10 Days Ago
    </Typography>
   </PaperComponent>
   <Stack direction="row" spacing={1}>
    <Stack>
      <img src={img} style={{height:"30px", width:"30px"}} alt="Company Logo" />
    </Stack>
    <Stack>
      <Typography color={FADE_COLOR}  textTransform="capitalize" letterSpacing={1.5}>{companyName}</Typography>
      <Typography fontSize={18}  textTransform="capitalize">{jobRole}</Typography>
      <Typography fontSize={12} textTransform="capitalize">{location}</Typography>
    </Stack>
   </Stack>
      <Stack direction="row"  alignItems="center" justifyContent="flex-start">
      <Typography fontSize={14} alignItems="center">Estimated Salary: {`${CURRENCY_ICON}${minJdSalary}-${maxJdSalary} LPA  `} </Typography> <CheckBox color="success"/>
      </Stack>

   </>
  )
}

export default CompanyHeaderComponent