export const parseToBrl = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const getTotalPrice = (items: Game[]) => {
  return items.reduce(
    (acc, currentValue) => acc + currentValue.prices.current!,
    0
  )
}
