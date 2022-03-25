import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { useProfile } from 'hooks/use-profile'

import { initialCardsProps, drawInitialCards, shuffleDeck } from 'services/deck'
import Loading from 'templates/Loading'

type PlayProps = {
  initialCards: initialCardsProps
}

/**
 * TODO: Save deck_id to state and context API
 * TODO: Save initialCard to state and context API
 * TODO: Reshuffle initialCard that is on context API
 * TODO: Create Play as Template
 */

export default function Play({ initialCards }: PlayProps) {
  const router = useRouter()
  const { userName, hasUserName } = useProfile()

  useEffect(() => {
    if (typeof window !== 'undefined' && !userName) {
      router.push('/')
    }
  }, [router, userName])

  useEffect(() => {
    console.log('initialCards: ', initialCards)
  }, [initialCards])

  if (!hasUserName) {
    return <Loading />
  }

  return (
    <>
      <p style={{ fontSize: '3rem', color: '#3CD3C1' }}>
        Seu nome é: {userName}
      </p>

      {initialCards.cards.map((card) => (
        <Image
          key={card.code}
          src={card.image}
          alt={card.value}
          width={226}
          height={314}
        />
      ))}
    </>
  )
}

export async function getStaticProps() {
  // Fetch data from external API
  const deck = await shuffleDeck()

  const initialCards = await drawInitialCards(deck.deck_id)

  // Pass data to the page via props
  return { props: { initialCards } }
}
