import { HashLink } from 'react-router-hash-link'
import { projects } from '../data'
import { useContext, useEffect, useRef, useState } from 'react'
import { BreakpointContext, SelectedProjectsContext } from '../context/context'

const links = [
  { label: 'Start', to: '#hero' },
  { label: 'About', to: '#about' },
  {
    label: 'Projects',
    to: '#projects',
    children: projects,
  },
  { label: 'Contact', to: '#contact' },
]

const Nav = () => {
  // const { isMobile, isSubMenuOpen, toggleSubMenu } =
  //   useContext(BreakpointContext)
  const { isMobile } = useContext(BreakpointContext)
  const { amountOfSelectetProjects } = useContext(SelectedProjectsContext)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const submenu = useRef(null)

  useEffect(() => {
    if (isMobile) {
      setIsSubMenuOpen(false)
    }
  }, [isMobile])

  const toggleSubMenu = (state: boolean) => {
    isMobile && setIsSubMenuOpen(state)
  }

  return (
    <nav
      aria-label="Main Navigation"
      className={`glass md:bg-spring/50 md:text-black dark:md:bg-pine/50  dark:md:text-white shadow-md w-full flex justify-between items-center fixed bottom-0 md:sticky md:top-0 z-50 px-4 py-2 md:py-2 md:px-4 
      `}
      onMouseLeave={() => toggleSubMenu(false)}
    >
      {!isMobile && (
        <HashLink to={'#hero'} className="text-h1 font-bold" smooth>
          Emma Spitz
        </HashLink>
      )}
      <ul className={`flex w-screen left-0 md:w-min justify-between md:gap-4`}>
        {links.map((i) => (
          <li
            key={i.label.replace(' ', '-').toLowerCase()}
            className={`nav-link !flex align-middle has-submenu md:relative `}
          >
            {isMobile && i.children ? (
              <button
                className="has-submenu"
                onMouseEnter={() => toggleSubMenu(true)}
                onClick={() => toggleSubMenu(true)}
              >
                {i.label}
              </button>
            ) : (
              <HashLink
                to={i.to}
                className={`nav-link ${
                  i.label == 'Contact' && 'btn btn-orange'
                }`}
                smooth
              >
                {i.label}
              </HashLink>
            )}
            {i.children && (
              <ul
                className={`absolute bg-orange text-white py-4 px-4 left-0 bottom-[72px] w-full rounded-t-3xl md:py-2 md:w-max md:bottom-auto md:left-auto md:right-0 md:top-10 md:rounded-3xl md:shadow-md
                ${isSubMenuOpen ? 'block' : 'hidden'}
                `}
                ref={submenu}
              >
                {isMobile && (
                  <li>
                    <HashLink
                      to={i.to}
                      className="py-2 inline-block"
                      smooth
                      onClick={() => toggleSubMenu(false)}
                    >
                      All {i.label}
                    </HashLink>
                  </li>
                )}
                {i.children.map(
                  (j, index) =>
                    index <= amountOfSelectetProjects && (
                      <li key={j.name.replace(' ', '-').toLowerCase()}>
                        <HashLink
                          to={'#' + j.name.replace(' ', '-').toLowerCase()}
                          className="py-2 inline-block"
                          smooth
                          onClick={() => toggleSubMenu(false)}
                        >
                          {j.name}
                        </HashLink>
                      </li>
                    )
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
