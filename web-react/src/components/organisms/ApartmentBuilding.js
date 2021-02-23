import React from 'react'

import { useParams } from 'react-router-dom'

import { useQuery, gql } from '@apollo/client'
import Card from '../atoms/Card'
import DistanceToRailroadStation from '../atoms/DistanceToRailroadStation'
import BuiltOn from '../molecules/BuiltOn'
import Title from '../molecules/Title'
import RowApartment from '../molecules/RowApartment'

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
      address
      built_on_accuracy
      top_floor
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
        id
        name
        size
        mainly_facing_direction
        layout {
          room_layout
        }
        floor {
          floor
        }
        contract {
          currency
          decrared_rental_fee
          management_fee
          common_service_fee
          free_rent_months
          initial_fees {
            amount
            InitialFee {
              payment_unit
              tax_included
              name
            }
          }
          yearly_fees {
            amount
            YearlyFee {
              payment_unit
              tax_included
              pay_also_initially
              name
            }
          }
          bi_yearly_fees {
            amount
            BiYearlyFee {
              payment_unit
              tax_included
              pay_also_initially
              name
            }
          }
          extra_monthly_fees {
            amount
            ExtraMonthlyFee {
              payment_unit
              tax_included
              pay_also_initially
              name
            }
          }
        }
      }
      built_on {
        formatted
        year
        month
        day
      }
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
                  <BuiltOn
                    date={apartmentBuilding.built_on}
                    accuracy={apartmentBuilding.built_on_accuracy}
                  />
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
            <TableBody>
              {apartmentBuilding.apartments.map((row) => (
                <RowApartment key={row.id} apartment={row} />
              ))}
            </TableBody>
          </Table>
        </Card>
      </Grid>
    </React.Fragment>
  )
}
