const TAX_RATE = 0.1
export default function YearlyFee({ contract }) {
  const feeType = 'yearly_fees'
  const feeObject = 'YearlyFee'
  let ret = 0
  contract[feeType].forEach((feeRelation) => {
    let tmp = 0
    if (feeRelation[feeObject].payment_unit == 'relative') {
      tmp = contract.decrared_rental_fee * feeRelation.amount
    } else if (feeRelation[feeObject].payment_unit == 'relative_to_full') {
      tmp =
        (contract.decrared_rental_fee +
          contract.management_fee +
          contract.common_service_fee) *
        feeRelation.amount
    } else if (feeRelation[feeObject].payment_unit == 'exact') {
      tmp = feeRelation.amount
    } else {
      return false
    }
    if (feeRelation[feeObject].tax_included) {
      tmp = tmp * (1 + TAX_RATE)
    }
    tmp = Math.floor(tmp, 0)

    ret += tmp
  })
  return ret.toLocaleString()
}
