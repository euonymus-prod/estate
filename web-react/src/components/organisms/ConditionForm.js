import React from 'react'

import SelectMonthlyFeeRange from '../molecules/SelectMonthlyFeeRange'

import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Title from '../molecules/Title'

const useStyles = makeStyles(() => ({
  formTableHead: {
    fontWeight: 'bold',
  },
  formTableCategory: {
    width: '300px',
    backgroundColor: '#FFEDED',
  },
}))

export default function ConditionForm() {
  const classes = useStyles()
  const [minMonthlyFee, setMinMonthlyFee] = React.useState('')
  const onChangeMinMonthlyFee = (value) => {
    setMinMonthlyFee(value)
  }

  const [maxMonthlyFee, setMaxMonthlyFee] = React.useState('')
  const onChangeMaxMonthlyFee = (value) => {
    setMaxMonthlyFee(value)
  }
  return (
    <React.Fragment>
      <Title>物件検索</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell className={classes.formTableHead}>項目</TableCell>
            <TableCell className={classes.formTableHead}>条件</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={classes.formTableCategory}>賃料</TableCell>
            <TableCell>
              <SelectMonthlyFeeRange
                minData={minMonthlyFee}
                onMinChangeHandle={onChangeMinMonthlyFee}
                maxData={maxMonthlyFee}
                onMaxChangeHandle={onChangeMaxMonthlyFee}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.formTableCategory}>
              専有面積
            </TableCell>
            <TableCell>hoge</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.formTableCategory}>間取り</TableCell>
            <TableCell>hoge</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.formTableCategory}>
              駅徒歩分
            </TableCell>
            <TableCell>hoge</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.formTableCategory}>
              主要採光面
            </TableCell>
            <TableCell>hoge</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  )
}
