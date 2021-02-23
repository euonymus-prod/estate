import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import DistanceToRailroadStation from '../atoms/DistanceToRailroadStation'
import BuiltOn from '../molecules/BuiltOn'

import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

export default function RowApartmentBuilding({ apartmentBuilding, withName }) {
  return (
    <TableRow key={apartmentBuilding.id}>
      {withName ? (
        <TableCell>
          <Link to={`/apartment-building/${apartmentBuilding.id}`}>
            {apartmentBuilding.name}
          </Link>
        </TableCell>
      ) : (
        ''
      )}
      <TableCell>
        {apartmentBuilding.railroad_stations.map((row, id) => (
          <React.Fragment key={id}>
            <DistanceToRailroadStation railroadStation={row} />
            <br />
          </React.Fragment>
        ))}
      </TableCell>
      <TableCell>{apartmentBuilding.address}</TableCell>
      <TableCell>
        <BuiltOn
          date={apartmentBuilding.built_on}
          accuracy={apartmentBuilding.built_on_accuracy}
        />
      </TableCell>
      <TableCell align="right">{apartmentBuilding.top_floor}階建</TableCell>
    </TableRow>
  )
}

RowApartmentBuilding.propTypes = {
  apartmentBuilding: PropTypes.object,
}
