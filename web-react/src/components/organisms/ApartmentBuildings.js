import React from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { useQuery, gql } from '@apollo/client'
import Title from '../molecules/Title'
import RowApartmentBuilding from '../molecules/RowApartmentBuilding'

const GET_APARTMENT_BUILDINGS_QUERY = gql`
  {
    ApartmentBuilding(first: 10) {
      id
      name
      address
      railroad_stations {
        distance
        RailroadStation {
          name
          line {
            name
          }
        }
      }
      apartments {
        name
        layout {
          room_layout
        }
        floor {
          floor
        }
      }
      built_on {
        formatted
        year
        month
        day
      }
      top_floor
    }
  }
`

export default function ApartmentBuildings() {
  const { loading, error, data } = useQuery(GET_APARTMENT_BUILDINGS_QUERY)
  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  return (
    <React.Fragment>
      <Title>マンション一覧</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>建物名</TableCell>
            <TableCell>最寄駅</TableCell>
            <TableCell>所在地</TableCell>
            <TableCell>築年数</TableCell>
            <TableCell align="right">建物階数</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.ApartmentBuilding.map((row) => (
            <RowApartmentBuilding
              key={row.id}
              apartmentBuilding={row}
              withName={true}
            />
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}
