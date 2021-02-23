import PropTypes from 'prop-types'
export default function FormattedDate({ date, accuracy }) {
  if (accuracy == 'year') {
    return `${date.year}年`
  } else if (accuracy == 'month') {
    return `${date.year}年${date.month}月`
  }
  return `${date.year}年${date.month}月${date.day}日`
}

FormattedDate.propTypes = {
  date: PropTypes.object,
  accuracy: PropTypes.string,
}
