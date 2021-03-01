import React from 'react'
import SelectForm from '../atoms/SelectForm'
import { MENU_ITEM_MONTHLY_FEE } from '../../constants/menu-items'

export default function SelectMinMonthlyFee({ data, onChangeHandle }) {
  return (
    <SelectForm
      label="月額下限"
      emptyState="下限なし"
      menuItems={MENU_ITEM_MONTHLY_FEE}
      data={data}
      onChangeHandle={onChangeHandle}
    />
  )
}
