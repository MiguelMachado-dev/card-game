import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { useProfile } from 'hooks/use-profile'

export default function Home() {
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
    <>
      <h2>Olá, ainda não nos conhecemos</h2>
      <p>Qual o seu nome?</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name={name}
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
        />

        <input type="submit" value="Enviar" />
      </form>

      {userName && <p>Seu nome é: {userName}</p>}
    </>
  )
}
