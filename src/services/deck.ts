import { api } from '.'

export type Card = {
  image: string
  value: string
  suit: string
  code: string
}

export type shuffleDeckProps = {
  success: boolean
  deck_id: string
  shuffled: boolean
  remaining: number
}

export type initialCardsProps = {
  success: boolean
  cards: Array<Card>
  deck_id: string
  remaining: boolean
}

export const shuffleDeck = async (): Promise<shuffleDeckProps> => {
  const { data } = await api.get('/new/shuffle/?deck_count=1')
  return data
}

export const drawInitialCards = async (
  deckId: string
): Promise<initialCardsProps> => {
  const { data } = await api.get(`/${deckId}/draw/?count=5`)
  return data
}

export const drawOneCard = async (
  deckId: string
): Promise<initialCardsProps> => {
  const { data } = await api.get(`/${deckId}/draw/?count=1`)
  return data
}
