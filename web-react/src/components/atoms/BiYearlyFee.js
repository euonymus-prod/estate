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
