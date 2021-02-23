import PropTypes from 'prop-types'
import InitialFee from './InitialFee'
import MonthlyFee from './MonthlyFee'

export default function InitialPayment({ contract, forPrint }) {
  const initialFee = InitialFee({ contract })
  const monthlyFee = MonthlyFee({ contract })
  // TODO: free rent
  // const freeRent = 0
  let ret = initialFee + monthlyFee

  if (forPrint) {
    ret = ret.toLocaleString()
  }
  return ret
}

InitialPayment.propTypes = {
  contract: PropTypes.object,
  forPrint: PropTypes.bool,
}
