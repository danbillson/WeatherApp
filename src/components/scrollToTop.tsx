import { useEffect } from 'react'
import { useLocation, RouteComponentProps } from '@reach/router'

interface ScrollToTopProps extends RouteComponentProps {
  children: any
}

const ScrollToTop = ({ children }: ScrollToTopProps) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children
}

export default ScrollToTop
