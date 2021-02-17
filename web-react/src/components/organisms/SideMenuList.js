import React from 'react'

import { List } from '@material-ui/core'
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
} from '@material-ui/icons'
import SideMenuRow from '../molecules/SideMenuRow'

export default function SideMenuList() {
  const data = [
    {
      link: '/',
      icon: <DashboardIcon />,
      caption: 'Dashboard',
    },
    {
      link: '/users',
      icon: <PeopleIcon />,
      caption: 'Users',
    },
    {
      link: '/apartment-buildings',
      icon: <PeopleIcon />,
      caption: 'Apartment Buildings',
    },
  ]

  return (
    <List>
      {data.map((row) => (
        <SideMenuRow
          key={row.link}
          link={row.link}
          icon={row.icon}
          caption={row.caption}
        />
      ))}
    </List>
  )
}
