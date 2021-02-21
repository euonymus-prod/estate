import React from 'react'

import { Link, useParams } from 'react-router-dom'

import { useQuery, gql } from '@apollo/client'
import Card from '../atoms/Card'
import DistanceToRailroadStation from '../atoms/DistanceToRailroadStation'
import FormattedDate from '../atoms/FormattedDate'
import ElapsedYears from '../atoms/ElapsedYears'
import Title from '../molecules/Title'

import { Grid } from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const GET_APARTMENT_BUILDINGS_QUERY = gql`
  query ApartmentBuilding($id: Int!) {
    ApartmentBuilding(id: $id, first: 1) {
      id
      name
      railroad_stations {
        distance
        RailroadStation {
          name
          line {
            name
          }
        }
      }
      address
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
      built_on_accuracy
      top_floor
    }
  }
`

export default function ApartmentBuilding() {
  const { apartmentBuildingId } = useParams()
  const { loading, error, data } = useQuery(GET_APARTMENT_BUILDINGS_QUERY, {
    variables: {
      id: parseInt(apartmentBuildingId),
    },
  })
  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  const apartmentBuilding = data.ApartmentBuilding[0]
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Card>
          <Title>{apartmentBuilding.name}</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>最寄駅</TableCell>
                <TableCell>所在地</TableCell>
                <TableCell>築年数</TableCell>
                <TableCell align="right">建物階数</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={apartmentBuilding.id}>
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
                  <FormattedDate
                    date={apartmentBuilding.built_on}
                    accuracy={apartmentBuilding.built_on_accuracy}
                  />
                  ( 築<ElapsedYears date={apartmentBuilding.built_on} />年 )
                </TableCell>
                <TableCell align="right">
                  {apartmentBuilding.top_floor}階建
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <Title>部屋一覧</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Built on</TableCell>
                <TableCell>Station</TableCell>
                <TableCell align="right">Floors</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={apartmentBuilding.id}>
                <TableCell>
                  <Link to={`/apartment-building/${apartmentBuilding.id}`}>
                    {apartmentBuilding.name}
                  </Link>
                </TableCell>
                <TableCell>{apartmentBuilding.built_on.formatted}</TableCell>
                <TableCell>
                  {apartmentBuilding.railroad_stations[0].RailroadStation.name}
                </TableCell>
                <TableCell align="right">
                  {apartmentBuilding.top_floor}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </Grid>
    </React.Fragment>
  )
}
