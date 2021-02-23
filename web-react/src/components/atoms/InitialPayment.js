import PropTypes from 'prop-types'
import InitialFee from './InitialFee'
import MonthlyFee from './MonthlyFee'
import FreeRent from './FreeRent'

export default function InitialPayment({ contract, forPrint }) {
  const initialFee = InitialFee({ contract })
  const monthlyFee = MonthlyFee({ contract })
  const freeRent = FreeRent({ contract })
  let ret = initialFee + monthlyFee - freeRent

  if (forPrint) {
    ret = ret.toLocaleString()
  }
  return ret
}

InitialPayment.propTypes = {
  contract: PropTypes.object,
  forPrint: PropTypes.bool,
}
