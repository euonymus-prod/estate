import SingleFee from './SingleFee'

export default function YearlyFee({ contract }) {
  const feeType = 'yearly_fees'
  const feeObject = 'YearlyFee'
  let ret = 0
  contract[feeType].forEach((feeRelation) => {
    ret += SingleFee({
      decrared_rental_fee: contract.decrared_rental_fee,
      management_fee: contract.management_fee,
      common_service_fee: contract.common_service_fee,
      amount: feeRelation.amount,
      feeObject: feeRelation[feeObject],
    })
  })
  return ret.toLocaleString()
}
