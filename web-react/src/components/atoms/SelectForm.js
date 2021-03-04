import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
}))

export default function SelectForm({
  label,
  emptyState,
  menuItems,
  data,
  onChangeHandle,
}) {
  const classes = useStyles()

  const handleChange = (event) => {
    onChangeHandle(String(event.target.value))
  }

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id={`${label}-select-outlined-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-select-outlined-label`}
        id={`${label}-select-outlined`}
        value={data}
        onChange={handleChange}
        label={label}
      >
        <MenuItem value="">
          <em>{emptyState}</em>
        </MenuItem>
        {menuItems.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
SelectForm.propTypes = {
  label: PropTypes.string,
  emptyState: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.string,
  onChangeHandle: PropTypes.func,
}
