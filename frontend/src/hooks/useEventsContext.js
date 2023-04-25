import { EventsContext } from "../components/context/EventsContext"
import { useContext } from "react"

export const useEventsContext = () => {
  const context = useContext(EventsContext)

  if(!context) {
    throw Error('useEventsContext must be used inside an WorkoutsContextProvider')
  }

  return context
}