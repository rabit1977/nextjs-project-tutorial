interface FormatPriceOptions {
  locale?: string;
  currency?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
}

// Define a default options object to avoid repeating the default values
const defaultOptions: FormatPriceOptions = {
  locale: 'en-US',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

export const formatPrice = (
  price: number,
  // Use the spread operator to merge the default options with the user-provided options
  options: FormatPriceOptions = { ...defaultOptions }
) => {
  // Use object destructuring to get the options values
  const { locale, currency, minimumFractionDigits, maximumFractionDigits } =
    options;

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(price);
};
