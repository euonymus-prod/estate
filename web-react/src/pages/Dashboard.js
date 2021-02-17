import React from 'react'

import MainMenuTemplate from '../components/templates/MainMenu'
import DashboardTemplate from '../components/templates/Dashboard'

export default function Dashboard() {
  return (
    <MainMenuTemplate>
      <DashboardTemplate />
    </MainMenuTemplate>
  )
}
