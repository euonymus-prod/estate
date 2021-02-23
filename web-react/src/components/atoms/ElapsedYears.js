import PropTypes from 'prop-types'
import moment from 'moment'
export default function ElapsedYears({ date }) {
  var startDate = moment()
    .year(date.year)
    .month(date.month - 1)
    .date(date.day)
  return moment().diff(startDate, 'years')
}

ElapsedYears.propTypes = {
  date: PropTypes.object,
}
