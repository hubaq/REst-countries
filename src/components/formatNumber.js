 
 export default function formatNumber(number) {
  const formatted = new Intl.NumberFormat('en-us').format(number)
  return formatted
}