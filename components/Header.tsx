import Link from "next/link";

const Header = () => {
    return (
        <div className="fixed top-0 right-0 left-0 bg-black flex px-[200px] py-4 space justify-between items-center text-white font-poppins font-extralight shadow-sm shadow-white/5">
            <div className="font-light text-2xl">t<span className="text-red-500">6</span>d</div>
            <ul className="flex flex-row gap-10">
                <li className="cursor-pointer overflow-hidden w-fit h-fit bg-black transition ease-in-out delay-50 duration-300 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-red-500/40"><Link className="flex px-4 py-2" href={"/"}>Home</Link></li>
                <li className="cursor-pointer overflow-hidden w-fit h-fit bg-black transition ease-in-out delay-50 duration-300 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-red-500/40"><Link className="flex px-4 py-2" href={"/ctf"}>CTFs</Link></li>
                <li className="cursor-pointer overflow-hidden w-fit h-fit bg-black transition ease-in-out delay-50 duration-300 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-red-500/40"><Link className="flex px-4 py-2" href={"/learning"}>Learning</Link></li>
                <li className="cursor-pointer overflow-hidden w-fit h-fit bg-black transition ease-in-out delay-50 duration-300 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-red-500/40"><Link className="flex px-4 py-2" href={"/story"}>Story</Link></li>
            </ul>
        </div>
    )
}

export default Header;