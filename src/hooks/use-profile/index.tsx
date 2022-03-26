import { useContext, createContext, useState, useEffect } from 'react'
import { getStorageItem, setStorageItem } from 'utils/localStorage'

const PROFILE_KEY = 'profile'

export type ProfileContextData = {
  userName: string
  hasUserName: boolean
  addProfile: (name: string) => void
  removeProfile: () => void
}

export const ProfileContextDefaultValues = {
  userName: '',
  hasUserName: false,
  addProfile: () => null,
  removeProfile: () => null,
}

export const ProfileContext = createContext<ProfileContextData>(
  ProfileContextDefaultValues
)

export type ProfileProviderProps = {
  children: React.ReactNode
}

const ProfileProvider = ({ children }: ProfileProviderProps) => {
  const [userName, setUserName] = useState<string>('')
  const [hasUserName, setHasUserName] = useState<boolean>(false)

  useEffect(() => {
    const data = getStorageItem(PROFILE_KEY)
    if (data) {
      setUserName(data)
      setHasUserName(true)
    } else {
      setHasUserName(false)
    }
  }, [])

  const addProfile = (name: string) => {
    setUserName(name)
    setStorageItem(PROFILE_KEY, name)
    setHasUserName(true)
  }

  const removeProfile = () => {
    setUserName('')
    window.localStorage.removeItem(`MiguelMachado_${PROFILE_KEY}`)
    setHasUserName(false)
  }

  return (
    <ProfileContext.Provider
      value={{
        hasUserName,
        userName,
        addProfile,
        removeProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}

const useProfile = () => useContext(ProfileContext)

export { ProfileProvider, useProfile }
