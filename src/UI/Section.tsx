import { ReactNode } from 'react'

export type TChildren =
  | string
  | JSX.Element
  | JSX.Element[]
  | ReactNode
  | ReactNode[]

type TSection = {
  id?: string
  className?: string
  children: TChildren
}

const Section = ({ id, className, children }: TSection) => {
  return (
    <section
      id={id}
      className={`w-full overflow-hidden grid grid-cols-container py-24 ${className}`}
    >
      {children}
    </section>
  )
}

export default Section
