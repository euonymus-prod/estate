import React from 'react'
import PropTypes from 'prop-types'

import SelectMinAreaSize from '../atoms/SelectMinAreaSize'
import SelectMaxAreaSize from '../atoms/SelectMaxAreaSize'

import { makeStyles } from '@material-ui/core/styles'
import FormHelperText from '@material-ui/core/FormHelperText'

const useStyles = makeStyles(() => ({
  formHelper: {
    color: 'red',
  },
}))

export default function SelectAreaSizeRange({
  minData,
  onMinChangeHandle,
  maxData,
  onMaxChangeHandle,
}) {
  const classes = useStyles()

  let hasError = false
  if (parseInt(minData) > parseInt(maxData)) {
    hasError = true
  }
  return (
    <React.Fragment>
      <SelectMinAreaSize data={minData} onChangeHandle={onMinChangeHandle} />
      ~
      <SelectMaxAreaSize data={maxData} onChangeHandle={onMaxChangeHandle} />
      {hasError && (
        <FormHelperText className={classes.formHelper}>
          専有面積上限は専有面積下限より大きい数値を設定してください。
        </FormHelperText>
      )}
    </React.Fragment>
  )
}
SelectAreaSizeRange.propTypes = {
  minData: PropTypes.string,
  onMinChangeHandle: PropTypes.func,
  maxData: PropTypes.string,
  onMaxChangeHandle: PropTypes.func,
}
