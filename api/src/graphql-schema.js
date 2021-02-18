import { neo4jgraphql } from 'neo4j-graphql-js'
import fs from 'fs'
import path from 'path'

/*
 * Check for GRAPHQL_SCHEMA environment variable to specify schema file
 * fallback to schema.graphql if GRAPHQL_SCHEMA environment variable is not set
 */

// export const typeDefs = fs
//   .readFileSync(
//     process.env.GRAPHQL_SCHEMA || path.join(__dirname, 'schema.graphql')
//   )
//   .toString('utf-8')

const readText = (filename) => {
  return fs.readFileSync(path.join(__dirname, `schemas/${filename}`)).toString('utf-8')
}

const apartmentBuildingDef = readText('apartment-building.graphql')
const apartmentDef = readText('apartment.graphql')
const apartmentContractDef = readText('apartment-contract.graphql')
const railroadStationDef = readText('railroad-station.graphql')
const yearDef = readText('year.graphql')
const prefectureDef = readText('prefecture.graphql')

const schemaDef = readText('schema.graphql')

export const typeDefs = `
${apartmentBuildingDef}
${apartmentDef}
${apartmentContractDef}
${railroadStationDef}
${yearDef}
${prefectureDef}

${schemaDef}
`
