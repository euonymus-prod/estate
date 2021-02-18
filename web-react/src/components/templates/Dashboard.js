import React from 'react'
import { Grid } from '@material-ui/core'

import Card from '../atoms/Card'
import RatingsChart from '../organisms/RatingsChart'
import UserCount from '../organisms/UserCount'
import RecentReviews from '../organisms/RecentReviews'

export default function Dashboard() {
  return (
    <React.Fragment>
      <Grid container spacing={4}>
        {/* Ratings Chart */}
        <Grid item xs={12} md={8} lg={7}>
          <Card isFixedHeight={true}>
            <RatingsChart />
          </Card>
        </Grid>
        {/* User Count */}
        <Grid item xs={12} md={4} lg={5}>
          <Card isFixedHeight={true}>
            <UserCount />
          </Card>
        </Grid>
        {/* Recent Reviews */}
        <Grid item xs={12}>
          <Card>
            <RecentReviews />
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
