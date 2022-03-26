import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { toast } from 'react-toastify'

import { useProfile } from 'hooks/use-profile'

import Base from 'templates/Base'
import Loading from 'templates/Loading'

import Button from 'components/Button'
import { Card, drawOneCard } from 'services/deck'

import * as S from './styles'

type PlayProps = {
  initialCards: Array<Card>
  deckId: string
}

export default function PlayTemplate({ initialCards, deckId }: PlayProps) {
  const router = useRouter()
  const { userName, hasUserName, removeProfile } = useProfile()
  const [userCards, setUserCards] = useState<Array<Card>>(initialCards)
  const [isLoading, setIsLoading] = useState(false)

  const CARD_VALIDATION = userCards.length === 8

  useEffect(() => {
    if (typeof window !== 'undefined' && !userName) {
      router.push('/')
    }
  }, [router, userName])

  const drawOneMoreCard = async () => {
    if (CARD_VALIDATION) return

    toast.info('Comprando mais uma carta...', {
      toastId: 'draw-card',
    })
    setIsLoading(true)

    try {
      const { cards } = await drawOneCard(deckId)
      setUserCards([...userCards, cards[0]])
      setIsLoading(false)
    } catch (err) {
      toast.error('😥 Erro ao comprar carta, tente novamente.')
      console.log(err)
      setIsLoading(false)
    }
  }

  const shuffleCurrentCards = (deck: Card[]) => {
    const newDeck = [...deck]
    const test = newDeck.sort(() => Math.random() - 0.5)
    setUserCards(test)
  }

  if (!hasUserName) {
    return <Loading />
  }

  return (
    <>
      <S.Header>
        <p className="name">{userName}</p>
        <Button className="button" onClick={removeProfile}>
          Trocar nome
        </Button>
      </S.Header>

      <Base>
        <S.Actions>
          <Button
            onClick={drawOneMoreCard}
            disabled={CARD_VALIDATION || isLoading}
          >
            Comprar carta
          </Button>

          <Button onClick={() => shuffleCurrentCards(userCards)}>
            Embaralhar cartas
          </Button>
        </S.Actions>

        <S.CardsSection>
          {userCards.map((card) => (
            <S.Card key={card.code}>
              <Image
                src={card.image}
                alt={card.code}
                width={226}
                height={314}
                layout="responsive"
                quality={100}
              />
            </S.Card>
          ))}
        </S.CardsSection>
      </Base>
    </>
  )
}
