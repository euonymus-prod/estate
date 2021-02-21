import SingleFee from './SingleFee'

export default function RelatedFeeSumByType({ contract, feeType, feeObject }) {
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
  return ret
}
