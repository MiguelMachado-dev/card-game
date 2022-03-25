import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { toast } from 'react-toastify'

import { useProfile } from 'hooks/use-profile'

import { Card, drawInitialCards, shuffleDeck, drawOneCard } from 'services/deck'
import Loading from 'templates/Loading'
import Button from 'components/Button'

type PlayProps = {
  initialCards: Array<Card>
  deckId: string
}

/**
 * TODO: Save deck_id to state and context API
 * TODO: Save initialCard to state and context API
 * TODO: Reshuffle initialCard that is on context API
 * TODO: Create Play as Template
 */

export default function Play({ initialCards, deckId }: PlayProps) {
  const router = useRouter()
  const { userName, hasUserName } = useProfile()
  const [userCards, setUserCards] = useState<Array<Card>>(initialCards)

  const CARD_VALIDATION = userCards.length === 8

  useEffect(() => {
    if (typeof window !== 'undefined' && !userName) {
      router.push('/')
    }
  }, [router, userName])

  const drawOneMoreCard = async () => {
    if (CARD_VALIDATION) return

    toast.info('Comprando mais uma carta...')

    const { cards } = await drawOneCard(deckId)
    setUserCards([...userCards, cards[0]])
  }

  const shuffleDrawedCards = (deck: Card[]) => {
    const newDeck = [...deck]
    const test = newDeck.sort(() => Math.random() - 0.5)
    setUserCards(test)
  }

  if (!hasUserName) {
    return <Loading />
  }

  return (
    <>
      <p style={{ fontSize: '3rem', color: '#3CD3C1' }}>
        Seu nome é: {userName}
      </p>

      <Button onClick={drawOneMoreCard} disabled={CARD_VALIDATION}>
        Comprar carta
      </Button>

      <Button onClick={() => shuffleDrawedCards(userCards)}>
        Embaralhar cartas
      </Button>

      <section>
        {userCards.map((card) => (
          <Image
            key={card.code}
            src={card.image}
            alt={card.value}
            width={226}
            height={314}
          />
        ))}
      </section>
    </>
  )
}

export async function getStaticProps() {
  // Fetch data from external API
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
    revalidate: 10, // In seconds
  }
}
