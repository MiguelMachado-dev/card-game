import { Loader } from 'components/Loader'

import * as S from './styles'

const Loading = () => {
  return (
    <S.Main>
      <Loader />
      <S.Title>Carregando...</S.Title>
    </S.Main>
  )
}

export default Loading
