import { PostItem } from "@/types"
import Link from "next/link";

const PostElement: React.FC<PostItem> = ({ id, title, date, category }) => {

    return (
        <div className="flex flex-col bg-black text-white pl-4 py-2 font-light w-full cursor-pointer transition ease-in-out delay-50 duration-100 hover:bg-white hover:text-black hover:scale-105 hover:shadow-md hover:shadow-red-500/50">
            <Link className="w-full h-fit" href={`/${category}/${id}`}>
                <div className="font-medium">{title}</div>
                <div className="font-light">{date}</div>
                {/* <div>{category}</div> */}
            </Link>
        </div>
    )
}

export default PostElement;