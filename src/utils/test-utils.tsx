import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import {
  ProfileContext,
  ProfileContextData,
  ProfileContextDefaultValues,
} from 'hooks/use-profile'

import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

type CustomRenderProps = {
  cartProviderProps?: ProfileContextData
} & Omit<RenderOptions, 'queries'>

const customRender = (
  ui: ReactElement,
  {
    cartProviderProps = ProfileContextDefaultValues,
    ...renderOptions
  }: CustomRenderProps = {}
) =>
  render(
    <ThemeProvider theme={theme}>
      <ProfileContext.Provider value={cartProviderProps}>
        {ui}
      </ProfileContext.Provider>
    </ThemeProvider>,
    renderOptions
  )

export * from '@testing-library/react'
export { customRender as render }
