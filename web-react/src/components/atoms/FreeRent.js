import PropTypes from 'prop-types'

export default function FreeRent({ contract, forPrint }) {
  console.log(contract.free_rent_months)
  console.log(contract.decrared_rental_fee)
  let ret = contract.free_rent_months * contract.decrared_rental_fee
  if (forPrint) {
    ret = ret.toLocaleString()
  }
  return ret
}

FreeRent.propTypes = {
  contract: PropTypes.object,
  forPrint: PropTypes.bool,
}
