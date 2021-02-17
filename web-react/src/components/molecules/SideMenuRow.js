import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  navLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
}))

export default function SideMenuRow(props) {
  const classes = useStyles()

  return (
    <Link key={props.link} to={props.link} className={classes.navLink}>
      <ListItem button>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.caption} />
      </ListItem>
    </Link>
  )
}
