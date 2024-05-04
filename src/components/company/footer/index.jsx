import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import { FADE_COLOR } from '../../../lib/constants/Colors'
import ApplyButton from '../../buttons/applyButton'
import ReferButton from '../../buttons/referButton'
import { ElectricBolt } from '@mui/icons-material'

function CompanyFooterComponent({minExp=0}) {
  return (
    <>
    <Typography color={FADE_COLOR} fontWeight={700}>Minimun Experience</Typography>
    <Typography>{minExp} years</Typography>
    <Stack spacing={2}>
        <ApplyButton startIcon={<ElectricBolt color="warning"/>} buttonStyle={{color:"black",fontWeight:"600"}}>Easy Apply</ApplyButton>
        <ReferButton startIcon={<Stack spacing={1} direction="row">
            <Avatar/>
            <Avatar/>
        </Stack>
        }>Unlock referral asks</ReferButton>
    </Stack>
    </>
  )
}

export default CompanyFooterComponent