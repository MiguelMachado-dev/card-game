import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Base from 'templates/Base'
import Loading from 'templates/Loading'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { useProfile } from 'hooks/use-profile'

import * as S from './styles'

const Home = () => {
  const { addProfile, hasUserName } = useProfile()
  const router = useRouter()

  const [name, setName] = useState<string>('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addProfile(name)
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && hasUserName) {
      router.push('/play')
    }
  }, [router, hasUserName])

  if (hasUserName) {
    return <Loading />
  }

  const formValidaton = name.length >= 2

  return (
    <Base>
      <S.Main>
        <S.Title>Card Game</S.Title>

        <S.Form onSubmit={handleSubmit}>
          <S.Subtitle>Olá, me diga seu nome para jogarmos!</S.Subtitle>
          <S.FormWrapper>
            <TextField
              placeholder="Nome"
              label="Nome"
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.currentTarget.value)}
            />

            <Button type="submit" fullWidth minimal disabled={!formValidaton}>
              Jogar!
            </Button>
          </S.FormWrapper>
        </S.Form>
      </S.Main>
    </Base>
  )
}

export default Home
