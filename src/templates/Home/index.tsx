import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Base from 'templates/Base'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { useProfile } from 'hooks/use-profile'

import * as S from './styles'

const Home = () => {
  const { addProfile, userName } = useProfile()
  const router = useRouter()

  const [name, setName] = useState<string>('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addProfile(name)
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && userName) {
      router.push('/play')
    }
  }, [router, userName])

  return (
    <Base>
      <S.Main>
        <S.Title>Card game</S.Title>

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

            <Button type="submit" fullWidth minimal>
              Jogar!
            </Button>
          </S.FormWrapper>
        </S.Form>
      </S.Main>
    </Base>
  )
}

export default Home