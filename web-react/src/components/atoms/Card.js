import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

export default function Card(props) {
  const theme = useTheme()

  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
  }))
  const classes = useStyles(theme)
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  const decidedClasses = props.isFixedHeight ? fixedHeightPaper : classes.paper

  return <Paper className={decidedClasses}>{props.children}</Paper>
}

Card.propTypes = {
  children: PropTypes.node,
  isFixedHeight: PropTypes.bool,
}
