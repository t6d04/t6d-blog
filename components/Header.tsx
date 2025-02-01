import Link from 'next/link'

const Header = () => {
  return (
    <div className="bg-black/80 fixed top-0 left-0 right-0 flex px-[200px] py-4 space justify-between items-center text-white font-poppins font-extralight">
      <Link className="font-light text-2xl" href={'/'}>
        t<span className="text-red-500">6</span>d
      </Link>
      <div className="flex flex-row gap-10">
        <div className="cursor-pointer overflow-hidden w-fit h-fit transition ease-in-out delay-50 duration-300 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-red-500/40">
          <Link className="flex px-4 py-2" href={'/'}>
            Home
          </Link>
        </div>
        <div className="cursor-pointer overflow-hidden w-fit h-fit transition ease-in-out delay-50 duration-300 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-red-500/40">
          <Link className="flex px-4 py-2" href={'/tag/ctf'}>
            CTFs
          </Link>
        </div>
        <div className="cursor-pointer overflow-hidden w-fit h-fit transition ease-in-out delay-50 duration-300 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-red-500/40">
          <Link className="flex px-4 py-2" href={'/tag/learning'}>
            Learning
          </Link>
        </div>
        <div className="cursor-pointer overflow-hidden w-fit h-fit transition ease-in-out delay-50 duration-300 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-red-500/40">
          <Link className="flex px-4 py-2" href={'/tag/story'}>
            Story
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
