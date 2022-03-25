import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { useProfile } from 'hooks/use-profile'

export default function Play() {
  const router = useRouter()
  const { userName } = useProfile()

  useEffect(() => {
    if (typeof window !== 'undefined' && !userName) {
      router.push('/')
    }
  }, [router, userName])

  return (
    <>
      <p>Seu nome é: {userName}</p>
    </>
  )
}
