import React from 'react'
import { Grid } from '@material-ui/core'

import ApartmentBuildingOrg from '../organisms/ApartmentBuilding'

export default function ApartmentBuilding() {
  return (
    <Grid container spacing={4}>
      <ApartmentBuildingOrg />
    </Grid>
  )
}
