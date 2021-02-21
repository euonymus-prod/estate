export default function FormattedDate({ date, accuracy }) {
  if (accuracy == 'year') {
    return `${date.year}年`
  } else if (accuracy == 'month') {
    return `${date.year}年${date.month}月`
  }
  return `${date.year}年${date.month}月${date.day}日`
}
