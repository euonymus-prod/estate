import React from 'react'

import MainMenuTemplate from '../components/templates/MainMenu'
import UserListTemplate from '../components/templates/UserList'

export default function UserList() {
  return (
    <MainMenuTemplate>
      <UserListTemplate />
    </MainMenuTemplate>
  )
}
