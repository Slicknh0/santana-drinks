export interface Drink {
  name: string;
  description?: string;
  /** Texto livre, ex.: "R$ 38". Só preencher com preço confirmado. */
  price?: string;
}

/** Carta ainda não confirmada. Ao preencher, a lista aparece na seção Drinks. */
export const drinks: Drink[] = [];
