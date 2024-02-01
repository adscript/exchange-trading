export function formatNominal(nominal: number | string, currency?: string) {
    if(!nominal) {
        return;
    }
    const numbers = nominal.toString().replace(',','')
    const formattedNumber = Number(numbers)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (!currency) currency = "";

  return currency + formattedNumber;
}
