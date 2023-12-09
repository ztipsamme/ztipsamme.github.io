import { ReactNode, createContext, useEffect, useState } from 'react'

type TBreakpointContext = {
  isMobile: boolean
  isSubMenuOpen: boolean
  toggleIsMobile?: () => void
  toggleSubMenu?: (state?: boolean) => void
}

type TBreakpointContextProvider = {
  children: ReactNode
}

export const BreakpointContext = createContext<TBreakpointContext>({
  isMobile: false,
  isSubMenuOpen: false,
})

export const BreakpointContextProvider = (
  props: TBreakpointContextProvider
) => {
  const [isMobile, setIsMobile] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

  const toggleSubMenu = (state?: boolean) => {
    setIsSubMenuOpen(state !== undefined ? state : !isSubMenuOpen)
  }

  const toggleIsMobile = () => {
    if (window.innerWidth > 768) {
      setIsMobile(false)
      setIsSubMenuOpen(false)
    } else {
      setIsMobile(true)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      toggleIsMobile()
    })

    window.addEventListener('load', () => {
      toggleIsMobile()
    })
  })

  return (
    <BreakpointContext.Provider
      value={{
        isMobile,
        isSubMenuOpen,
        toggleSubMenu: toggleSubMenu,
      }}
    >
      {props.children}
    </BreakpointContext.Provider>
  )
}

export const SelectedProjectsContext = createContext({
  amountOfSelectetProjects: 2,
})
