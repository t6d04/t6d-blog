import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'

const Home = () => {
  return (
    <div className="h-svh w-full flex flex-col justify-center items-center">
      <Image
        className="mb-10 rounded-full w-[250px] h-[250px] object-cover object-center"
        src="/seal.jpg"
        alt="seal"
        width={500}
        height={500}
      />
      <div className="font-sourceCodePro font-medium text-4xl">
        t<span className="text-red-500">6</span>d&apos;s blog
      </div>
      <div className="font-sourceCodePro font-normal text-2xl italic mb-8">
        The past is the key to the future
      </div>
      <div className="flex gap-7">
        <Link href={'https://github.com/t6d04'}>
          <FaGithub className="size-8 scale-100 transition-all ease-in-out delay-50 duration-300 hover:scale-150" />
        </Link>
        <Link href={'https://www.facebook.com/namlph2784/'}>
          <FaFacebook className="size-8 scale-100 transition-all ease-in-out delay-50 duration-300 hover:scale-150" />
        </Link>
        <Link href={''}>
          <FaSquareInstagram className="size-8 scale-100 transition-all ease-in-out delay-50 duration-300 hover:scale-150" />
        </Link>
        <Link href={''}>
          <FaLinkedin className="size-8 scale-100 transition-all ease-in-out delay-50 duration-300 hover:scale-150" />
        </Link>
      </div>
    </div>
  )
}
export default Home
