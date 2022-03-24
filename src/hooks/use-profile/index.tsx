import { useContext, createContext, useState, useEffect } from 'react'
import { getStorageItem } from 'utils/localStorage'

const PROFILE_KEY = 'profile'

export type ProfileContextData = {
  userName: string
}

export const ProfileContextDefaultValues = {
  userName: '',
}

export const ProfileContext = createContext<ProfileContextData>(
  ProfileContextDefaultValues
)

export type ProfileProviderProps = {
  children: React.ReactNode
}

const ProfileProvider = ({ children }: ProfileProviderProps) => {
  const [userName, setUserName] = useState<string>('')

  useEffect(() => {
    const data = getStorageItem(PROFILE_KEY)
    if (data) {
      setUserName(data)
    }
  }, [])

  return (
    <ProfileContext.Provider
      value={{
        userName,
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}

const useProfile = () => useContext(ProfileContext)

export { ProfileProvider, useProfile }
