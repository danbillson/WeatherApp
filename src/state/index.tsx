import React, { createContext, useState, useContext } from 'react'
import createPersistedState from 'use-persisted-state'

const useFavouriteState = createPersistedState('favourites')

export const useFavourites = () => {
  const [favourites, setFavourites] = useFavouriteState<number[]>([])
  const { triggerPopup } = usePopup()
  const limit = 10

  return {
    favourites,
    limit,
    addFavourite: (id: number) =>
      favourites.length < limit
        ? setFavourites([...favourites, id])
        : triggerPopup(
            `Sorry, the limit of ${limit} favourites has been reached.`
          ),
    removeFavourite: (id: number) =>
      setFavourites(favourites.filter((fav) => fav !== id)),
  }
}

interface Popup {
  value: string
  clearPopup: () => void
  triggerPopup: (text: string) => void
}

const PopupContext = createContext<Popup>({
  value: '',
  clearPopup: () => {},
  triggerPopup: (text: string) => {},
})

export const PopupProvider = ({ children }: any) => {
  const [value, setValue] = useState('')
  const clearPopup = () => setValue('')
  const triggerPopup = (text: string) => setValue(text)

  return (
    <PopupContext.Provider value={{ value, clearPopup, triggerPopup }}>
      {children}
    </PopupContext.Provider>
  )
}

export const usePopup = () => useContext(PopupContext)
