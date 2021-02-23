import PropTypes from 'prop-types'
import RelatedFeeSumByType from './RelatedFeeSumByType'

export default function BiYearlyFee({ contract, forPrint }) {
  let ret = RelatedFeeSumByType({
    contract,
    feeType: 'bi_yearly_fees',
    feeObject: 'BiYearlyFee',
  })
  if (forPrint) {
    ret = ret.toLocaleString()
  }
  return ret
}

BiYearlyFee.propTypes = {
  contract: PropTypes.object,
  forPrint: PropTypes.bool,
}
