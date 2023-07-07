import Path from './path'
import { HomeIcon } from '@heroicons/react/solid'
import { FiZap, FiCompass, FiClipboard, FiHexagon, FiSearch } from "react-icons/fi";
import {
  HashtagIcon,
  BellIcon,
  MailIcon,
  BookmarkIcon,
  ViewListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from '@heroicons/react/outline'
import Logo from './logo'
import Tweet from './tweet'
import Me from './me'
import { SearchIcon } from '@heroicons/react/outline'
import NSFW from "./nsfw"


const Navbar = () => {
  return (
    <nav className="flex-col gap-5 px-2 py-4 min-h-screen justify-between items-center hidden tablet:flex">
      <div className="flex flex-col gap-5 items-center desktop:items-stretch w-full">
        <div className="px-4">
          {/* <Logo /> */}
          <div className=' mobile:flex desktop:hidden'> 
            <Path Icon={FiSearch} name="" active={true} href='' />
            </div>
          <section className="sticky top-0 py-3 bg-white z-20 hidden desktop:inline-block">
          <div className="flex items-center gap-4 px-4 py-2 bg-gray-100 rounded-full border-2 border-white hover:border-gray-400 hover:border-2">
            <SearchIcon className="w-5 h-8 text-gray-500" />
            <input
              type="text"
              placeholder="Search Twitter"
              className="text-base placeholder:text-base focus:outline-none bg-transparent"
            />
          </div>
        
         
        </section>  
        </div>
        <div>
        <Me />
        <NSFW />
        </div>
     
        <div className="space-y-3">
          <Path Icon={HomeIcon} name="Home" active={true} href='' />
          <Path Icon={FiZap} name="Explore" active={false} href='' />
          <Path Icon={FiCompass} name="Discover" active={false} href='/discover'/>
          <Path Icon={MailIcon} name="Messages" active={false} href=''/>
          <Path Icon={FiClipboard} name="Lists" active={false}href='' />
          <Path Icon={BookmarkIcon} name="Bookmarks" active={false} href=''/>
          
          {/* <Path Icon={UserIcon} name="Profile" active={false} /> */}
          <Path Icon={FiHexagon} name="Preferences" active={false}href='' />
        </div>
        <Tweet />
      </div>
      {/* <Me /> */}
    </nav>
  )
}

export default Navbar
