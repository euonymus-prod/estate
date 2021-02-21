import React from 'react'
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
