export const capitalize = (str: string) => {
  const [first, ...rest] = str.split('')
  return first?.toUpperCase() + rest.join('').toLowerCase()
}
