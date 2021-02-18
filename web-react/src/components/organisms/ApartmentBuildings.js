import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { useQuery, gql } from '@apollo/client'
import Title from '../molecules/Title'

const GET_APARTMENT_BUILDINGS_QUERY = gql`
  {
    ApartmentBuilding(first: 10) {
      id
      name
      railroad_stations {
        RailroadStation {
          name
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
            <TableCell>Date</TableCell>
            <TableCell>Business Name</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Review Text</TableCell>
            <TableCell align="right">Review Stars</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.ApartmentBuilding.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.built_on.formatted}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                {row.railroad_stations[0].RailroadStation.name}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.top_floor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}
