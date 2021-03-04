import React from 'react'
import PropTypes from 'prop-types'

import SelectForm from '../atoms/SelectForm'
import { MENU_ITEM_AREA_SIZE } from '../../constants/menu-items'

export default function SelectMaxAreaSize({ data, onChangeHandle }) {
  return (
    <SelectForm
      label="専有面積上限"
      emptyState="上限なし"
      menuItems={MENU_ITEM_AREA_SIZE}
      data={data}
      onChangeHandle={onChangeHandle}
    />
  )
}
SelectMaxAreaSize.propTypes = {
  data: PropTypes.string,
  onChangeHandle: PropTypes.func,
}
