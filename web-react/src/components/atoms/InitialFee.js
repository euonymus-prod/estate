import PropTypes from 'prop-types'
import RelatedFeeSumByType from './RelatedFeeSumByType'
import SingleFee from './SingleFee'

function RelatedInitialFeeSum({ contract }) {
  const types = [
    {
      feeType: 'yearly_fees',
      feeObject: 'YearlyFee',
    },
    {
      feeType: 'bi_yearly_fees',
      feeObject: 'BiYearlyFee',
    },
    {
      feeType: 'extra_monthly_fees',
      feeObject: 'ExtraMonthlyFee',
    },
  ]
  let ret = 0
  types.forEach(({ feeType, feeObject }) => {
    contract[feeType].forEach((feeRelation) => {
      if (feeRelation[feeObject].pay_also_initially) {
        ret += SingleFee({
          decrared_rental_fee: contract.decrared_rental_fee,
          management_fee: contract.management_fee,
          common_service_fee: contract.common_service_fee,
          amount: feeRelation.amount,
          feeObject: feeRelation[feeObject],
        })
      }
    })
  })
  return ret
}

export default function InitialFee({ contract, forPrint }) {
  let ret = RelatedFeeSumByType({
    contract,
    feeType: 'initial_fees',
    feeObject: 'InitialFee',
  })
  ret += RelatedInitialFeeSum({
    contract,
  })
  if (forPrint) {
    ret = ret.toLocaleString()
  }
  return ret
}

InitialFee.propTypes = {
  contract: PropTypes.object,
  forPrint: PropTypes.bool,
}
