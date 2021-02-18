import React from 'react'
import { Grid } from '@material-ui/core'

import Card from '../atoms/Card'
import ApartmentBuildingsOrg from '../organisms/ApartmentBuildings'

export default function ApartmentBuildings() {
  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card>
            <ApartmentBuildingsOrg />
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
