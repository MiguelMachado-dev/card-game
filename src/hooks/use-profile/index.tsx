import { useContext, createContext, useState, useEffect } from 'react'
import { getStorageItem, setStorageItem } from 'utils/localStorage'

const PROFILE_KEY = 'profile'

export type ProfileContextData = {
  userName: string
  addProfile: (name: string) => void
}

export const ProfileContextDefaultValues = {
  userName: '',
  addProfile: () => null,
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

  const addProfile = (name: string) => {
    setUserName(name)
    setStorageItem(PROFILE_KEY, name)
  }

  return (
    <ProfileContext.Provider
      value={{
        userName,
        addProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}

const useProfile = () => useContext(ProfileContext)

export { ProfileProvider, useProfile }
