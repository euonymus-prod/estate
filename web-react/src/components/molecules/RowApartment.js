import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import MonthlyFee from '../atoms/MonthlyFee'
import InitialFee from '../atoms/InitialFee'
import InitialPayment from '../atoms/InitialPayment'
import YearlyFee from '../atoms/YearlyFee'
import BiYearlyFee from '../atoms/BiYearlyFee'

import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

export default function RowApartment({ apartment }) {
  return (
    <TableRow key={apartment.id}>
      <TableCell>
        <Link to={`/apartment/${apartment.id}`}>{apartment.name}</Link>
      </TableCell>
      <TableCell>
        {apartment.size}m<sup>2</sup>
      </TableCell>
      <TableCell>{apartment.layout.room_layout}</TableCell>
      <TableCell>{apartment.floor.floor}階</TableCell>
      <TableCell>{apartment.mainly_facing_direction}</TableCell>
      <TableCell align="right">
        <MonthlyFee contract={apartment.contract} forPrint={true} />
        {apartment.contract.currency}
      </TableCell>
      <TableCell align="right">
        <BiYearlyFee contract={apartment.contract} forPrint={true} />
        {apartment.contract.currency}
      </TableCell>
      <TableCell align="right">
        <InitialFee contract={apartment.contract} forPrint={true} />
        {apartment.contract.currency}
      </TableCell>
      <TableCell align="right">
        <InitialPayment contract={apartment.contract} forPrint={true} />
        {apartment.contract.currency}
      </TableCell>
      <TableCell align="right">
        <YearlyFee contract={apartment.contract} forPrint={true} />
        {apartment.contract.currency}
      </TableCell>
    </TableRow>
  )
}

RowApartment.propTypes = {
  apartment: PropTypes.object,
}
