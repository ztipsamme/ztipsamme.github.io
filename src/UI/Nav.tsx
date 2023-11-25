import { HashLink } from 'react-router-hash-link'
import { projects } from '../data'
import { useContext } from 'react'
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
  const { isMobile, isSubMenuOpen, toggleSubMenu } =
    useContext(BreakpointContext)
  const { amountOfSelectetProjects } = useContext(SelectedProjectsContext)

  return (
    <nav
      aria-label="Main Navigation"
      className={`glass rounded-t-2xl shadow-md md:rounded-t-none md:rounded-b-xl w-full flex justify-between items-center fixed bottom-0 md:sticky md:top-0 z-50 px-4 py-2 md:py-2 md:px-4 
      `}
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
              <button onClick={isMobile && toggleSubMenu}>{i.label}</button>
            ) : (
              <HashLink
                to={i.to}
                className={`nav-link ${
                  i.label == 'Contact' && 'btn btn-primary'
                }`}
                smooth
              >
                {i.label}
              </HashLink>
            )}
            {i.children && (
              <ul
                className={`absolute bg-primary text-fontwhite py-4 px-4 left-0 bottom-[72px] w-full rounded-t-3xl md:py-2 md:w-max md:bottom-auto md:left-auto md:right-0 md:top-10 md:rounded-3xl md:shadow-md ${
                  isMobile && (isSubMenuOpen ? 'block' : 'hidden')
                }`}
              >
                {isMobile && (
                  <li>
                    <HashLink to={i.to} className="py-2 inline-block" smooth>
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

// const Nav = () => {
//   const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

//   const toggleSubMenu = () => {
//     if (isSubMenuOpen) {
//       setIsSubMenuOpen(false)
//     } else {
//       setIsSubMenuOpen(true)
//     }
//     console.log(isSubMenuOpen)
//   }

//   return (
//     <nav
//       aria-label="Main Navigation"
//       className={`w-full ${
//         isMobile ? 'fixed bottom-0' : 'sticky top-0'
//       } flex justify-between items-center py-2 px-4`}
//     >
//       {!isMobile && (
//         <HashLink to={'#start'} className="text-h1 font-bold" smooth>
//           Emma Spitz
//         </HashLink>
//       )}
//       <ul className={`flex ${isMobile ? 'w-full justify-between' : 'gap-4'}`}>
//         {links.map((i) => (
//           <li
//             key={i.label.replace(' ', '-').toLowerCase()}
//             className={`${
//               !isMobile && 'has-submenu relative'
//             } font-bold flex align-middle`}
//           >
//             {isMobile && i.children ? (
//               <button onClick={toggleSubMenu}>{i.label}</button>
//             ) : (
//               <HashLink
//                 to={i.to}
//                 className={`py-2 inline-block ${
//                   i.label == 'Contact' &&
//                   'bg-primary text-fontwhite rounded-full px-2 shadow-md'
//                 }`}
//                 smooth
//               >
//                 {i.label}
//               </HashLink>
//             )}
//             {i.children && (
//               <ul
//                 className={`absolute bg-primary text-fontwhite py-2 px-4 ${
//                   isMobile
//                     ? `left-0 bottom-14 w-full  ${
//                         isSubMenuOpen ? 'block' : 'hidden'
//                       }`
//                     : 'right-0 top-10 rounded shadow-md w-max'
//                 }`}
//               >
//                 {i.children.map((j) => (
//                   <li key={j.name.replace(' ', '-').toLowerCase()}>
//                     <HashLink
//                       to={'#' + j.name.replace(' ', '-').toLowerCase()}
//                       className="py-2 inline-block"
//                       smooth
//                     >
//                       {j.name}
//                     </HashLink>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   )
// }

export default Nav
