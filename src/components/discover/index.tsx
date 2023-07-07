import Header from '../layout/header'
import Discover from './layout'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="grid-cols-[auto,1fr] desktop:max-w-7xl laptop:max-w-5xl max-w-2xl mx-auto">
      <Header />
      <Discover>{children}</Discover>
    </div>
  )
}

export default Layout
