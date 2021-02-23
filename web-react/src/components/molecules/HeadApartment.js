import React from 'react'

import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

export default function HeadApartment() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>面積(土地面積)</TableCell>
        <TableCell>間取り</TableCell>
        <TableCell>階</TableCell>
        <TableCell>主要採光面</TableCell>
        <TableCell align="right">実質家賃</TableCell>
        <TableCell align="right">実質更新料</TableCell>
        <TableCell align="right">初期費用</TableCell>
        <TableCell align="right">初期支払額</TableCell>
        <TableCell align="right">年毎費用</TableCell>
      </TableRow>
    </TableHead>
  )
}
