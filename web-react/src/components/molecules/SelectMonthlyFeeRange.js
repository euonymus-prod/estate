import React from 'react'
import PropTypes from 'prop-types'

import SelectMinMonthlyFee from '../atoms/SelectMinMonthlyFee'
import SelectMaxMonthlyFee from '../atoms/SelectMaxMonthlyFee'

import { makeStyles } from '@material-ui/core/styles'
import FormHelperText from '@material-ui/core/FormHelperText'

const useStyles = makeStyles(() => ({
  formHelper: {
    color: 'red',
  },
}))

export default function SelectMonthlyFeeRange({
  minData,
  onMinChangeHandle,
  maxData,
  onMaxChangeHandle,
}) {
  const classes = useStyles()

  let hasError = false
  if (minData > maxData) {
    hasError = true
  }
  return (
    <React.Fragment>
      <SelectMinMonthlyFee data={minData} onChangeHandle={onMinChangeHandle} />
      ~
      <SelectMaxMonthlyFee data={maxData} onChangeHandle={onMaxChangeHandle} />
      {hasError && (
        <FormHelperText className={classes.formHelper}>
          上限額は下限額より大きい数値を設定してください。
        </FormHelperText>
      )}
    </React.Fragment>
  )
}
SelectMonthlyFeeRange.propTypes = {
  minData: PropTypes.string,
  onMinChangeHandle: PropTypes.func,
  maxData: PropTypes.string,
  onMaxChangeHandle: PropTypes.func,
}
