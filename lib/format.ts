interface FormatPriceOptions {
  locale?: string;
  currency?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
}

export const formatPrice = (
  price: number,
  options: FormatPriceOptions = {}
) => {
  const {
    locale = "en-US",
    currency = "USD",
    minimumFractionDigits = 2,
    maximumFractionDigits = 2,
  } = options;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(price);
};




// export const formatPrice = (price: number) => {
//   return new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD"
//   }).format(price)
// }