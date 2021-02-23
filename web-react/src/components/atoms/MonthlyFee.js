import PropTypes from 'prop-types'
import RelatedFeeSumByType from './RelatedFeeSumByType'

export default function MonthlyFee({ contract, forPrint }) {
  let ret = RelatedFeeSumByType({
    contract,
    feeType: 'extra_monthly_fees',
    feeObject: 'ExtraMonthlyFee',
  })
  ret +=
    contract.decrared_rental_fee +
    contract.management_fee +
    contract.common_service_fee

  if (forPrint) {
    ret = ret.toLocaleString()
  }

  return ret
}

MonthlyFee.propTypes = {
  contract: PropTypes.object,
  forPrint: PropTypes.bool,
}
