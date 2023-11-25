import { Outlet } from 'react-router-dom'
import { Nav, Footer } from '../UI'
import { BreakpointContextProvider } from '../context/context'
const Root = () => {
  return (
    <BreakpointContextProvider>
      <Nav />
      <Outlet />
      <Footer />
    </BreakpointContextProvider>
  )
}

export default Root
