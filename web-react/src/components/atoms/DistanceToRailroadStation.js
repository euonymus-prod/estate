import PropTypes from 'prop-types'

export default function DistanceToRailroadStation({ railroadStation }) {
  return `${railroadStation.RailroadStation.line.name}${
    railroadStation.RailroadStation.name
  }駅 徒歩${Math.round(railroadStation.distance / (80 / 1000), 0)}分`
}

DistanceToRailroadStation.propTypes = {
  RailroadStation: PropTypes.object,
  distance: PropTypes.number,
}
