import React from 'react'
import PropTypes from 'prop-types'

import SelectForm from '../atoms/SelectForm'
import { MENU_ITEM_AREA_SIZE } from '../../constants/menu-items'

export default function SelectMinAreaSize({ data, onChangeHandle }) {
  return (
    <SelectForm
      label="専有面積下限"
      emptyState="下限なし"
      menuItems={MENU_ITEM_AREA_SIZE}
      data={data}
      onChangeHandle={onChangeHandle}
    />
  )
}
SelectMinAreaSize.propTypes = {
  data: PropTypes.string,
  onChangeHandle: PropTypes.func,
}
