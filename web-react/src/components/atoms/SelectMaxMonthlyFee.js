import React from 'react'
import SelectForm from '../atoms/SelectForm'
import { MENU_ITEM_MONTHLY_FEE } from '../../constants/menu-items'

export default function SelectMaxMonthlyFee({ data, onChangeHandle }) {
  return (
    <SelectForm
      label="月額上限"
      emptyState="上限なし"
      menuItems={MENU_ITEM_MONTHLY_FEE}
      data={data}
      onChangeHandle={onChangeHandle}
    />
  )
}
