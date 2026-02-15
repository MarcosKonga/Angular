export interface Food {
  id: string,
  name: string,
  description: string,
  price: number,
  category: 'entrantes'|'principales'|'postres'|'bebidas',
  enabled: boolean,
  image?: string
}
