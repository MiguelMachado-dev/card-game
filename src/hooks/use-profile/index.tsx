import { useContext, createContext } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
export type ProfileContextData = {}

export const ProfileContextDefaultValues = {}

export const ProfileContext = createContext<ProfileContextData>(
  ProfileContextDefaultValues
)

export type ProfileProviderProps = {
  children: React.ReactNode
}

const ProfileProvider = ({ children }: ProfileProviderProps) => {
  return (
    <ProfileContext.Provider value={{}}>{children}</ProfileContext.Provider>
  )
}

const useProfile = () => useContext(ProfileContext)

export { ProfileProvider, useProfile }
