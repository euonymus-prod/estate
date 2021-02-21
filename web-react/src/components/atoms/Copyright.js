import React from 'react'

import { Typography, Link as MUILink } from '@material-ui/core'
import { URL_ME } from '../../constants/urls'

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MUILink color="inherit" href={URL_ME}>
        Estate Real
      </MUILink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
