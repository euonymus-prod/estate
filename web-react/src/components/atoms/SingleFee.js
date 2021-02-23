import PropTypes from 'prop-types'
const TAX_RATE = 0.1

export default function SingleFee({
  decrared_rental_fee,
  management_fee,
  common_service_fee,
  amount,
  feeObject,
}) {
  let tmp = 0
  if (feeObject.payment_unit == 'relative') {
    tmp = decrared_rental_fee * amount
  } else if (feeObject.payment_unit == 'relative_to_full') {
    tmp = (decrared_rental_fee + management_fee + common_service_fee) * amount
  } else if (feeObject.payment_unit == 'exact') {
    tmp = amount
  } else {
    return false
  }
  if (!feeObject.tax_included) {
    tmp = tmp * (1 + TAX_RATE)
  }
  return Math.floor(tmp, 0)
}

SingleFee.propTypes = {
  decrared_rental_fee: PropTypes.number,
  management_fee: PropTypes.number,
  common_service_fee: PropTypes.number,
  amount: PropTypes.number,
  feeObject: PropTypes.object,
}
