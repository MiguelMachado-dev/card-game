import PlayTemplate from 'templates/Play'

import { Card, drawInitialCards, shuffleDeck } from 'services/deck'

type PlayProps = {
  initialCards: Array<Card>
  deckId: string
}

export default function Play({ initialCards, deckId }: PlayProps) {
  return <PlayTemplate initialCards={initialCards} deckId={deckId} />
}

export async function getStaticProps() {
  const deck = await shuffleDeck()

  const initialCards = await drawInitialCards(deck.deck_id)

  // Pass data to the page via props
  return {
    props: {
      initialCards: initialCards.cards,
      deckId: deck.deck_id,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  }
}
