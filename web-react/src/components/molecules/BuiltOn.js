import React from 'react'
import PropTypes from 'prop-types'
import FormattedDate from '../atoms/FormattedDate'
import ElapsedYears from '../atoms/ElapsedYears'

export default function BuiltOn({ date, accuracy }) {
  return (
    <React.Fragment>
      <FormattedDate date={date} accuracy={accuracy} />
      ( 築<ElapsedYears date={date} />年 )
    </React.Fragment>
  )
}

BuiltOn.propTypes = {
  date: PropTypes.object,
  accuracy: PropTypes.string,
}
