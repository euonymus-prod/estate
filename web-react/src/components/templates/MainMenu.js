import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline, Container } from '@material-ui/core'
import SiteFrame from '../organisms/SiteFrame'
import Footer from '../molecules/Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

export default function MainMenu(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <SiteFrame />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {props.children}
          <Footer />
        </Container>
      </main>
    </div>
  )
}
