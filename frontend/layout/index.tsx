import {ReactLenis} from 'lenis/react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main>
      <ReactLenis root />
      {children}
    </main>
  )
}

export default Layout
