const APP_KEY = 'MiguelMachado'

export function getStorageItem(key: string) {
  // no Next via Server/Static não tem window
  if (typeof window === 'undefined') return

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return JSON.parse(data!)
}

export function setStorageItem(key: string, value: string[] | string) {
  // no Next via Server/Static não tem window
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}
