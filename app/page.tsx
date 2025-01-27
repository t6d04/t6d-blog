import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="bg-black h-svh w-full flex flex-col justify-center items-center">
      <div className="font-sourceCodePro font-medium text-4xl">t<span className="text-red-500">6</span>d&apos;s blog</div>
      <div className="font-sourceCodePro font-normal text-2xl italic mb-8">The past is the key to the future</div>
      <div className="flex gap-7">
        <Link href={"https://github.com/t6d04"}>
          <FaGithub className="size-8 scale-100 transition-all ease-in-out delay-50 duration-300 hover:scale-150"/>
        </Link>
        <Link href={"https://www.facebook.com/namlph2784/"}>
          <FaFacebook className="size-8 scale-100 transition-all ease-in-out delay-50 duration-300 hover:scale-150"/>
        </Link>
        <Link href={"https://www.instagram.com/namlph.04/"}>
          <FaSquareInstagram className="size-8 scale-100 transition-all ease-in-out delay-50 duration-300 hover:scale-150"/>
        </Link>
        <Link href={""}>
          <FaLinkedin className="size-8 scale-100 transition-all ease-in-out delay-50 duration-300 hover:scale-150"/>
        </Link>
      </div>

    </div>
  )
}
export default Home;