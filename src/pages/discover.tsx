import { SearchIcon } from '@heroicons/react/outline'
import Feed from '../components/feed'
import Layout from '../components/discover/layout'
import Publisher from '../components/publisher'
import Trends from '../components/trends'
import Tabs from '../components/tabs'

const Discover = () => {
  return (
    <Layout>
      <div className="max-w-[37.5rem] border-x-[1px]">
        <section className="sticky top-0 px-4 py-6 bg-white ">
          <h1 className="text-[1.25rem] font-bold">Discover page</h1>
          <>
          <Tabs />
          </>
        </section>
        
    
      </div>
      {/* <div className="laptop:block hidden px-8 space-y-2">
     
        <Trends />
      </div> */}
    </Layout>
  )
}

export default Discover
