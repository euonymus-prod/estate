import PropTypes from 'prop-types'
import RelatedFeeSumByType from './RelatedFeeSumByType'

export default function YearlyFee({ contract, forPrint }) {
  let ret = RelatedFeeSumByType({
    contract,
    feeType: 'yearly_fees',
    feeObject: 'YearlyFee',
  })
  if (forPrint) {
    ret = ret.toLocaleString()
  }
  return ret
}

YearlyFee.propTypes = {
  contract: PropTypes.object,
  forPrint: PropTypes.bool,
}
