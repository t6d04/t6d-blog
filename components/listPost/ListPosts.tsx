import { getCategoryPosts } from "@/lib/posts";
import PostElement from "./PostElement";
import { PostItem } from "@/types";

const ListPosts: React.FC<PostItem> = ({category}) => {
    const posts = getCategoryPosts();
    const categoryPosts = posts[category];

    console.log(categoryPosts)

    return (
    <div className="flex flex-col gap-4 w-[20%]">
        {categoryPosts.map((post) => 
        (
            <PostElement key={post.id} {...post} />
        )
        )}
    </div>
    )
}
export default ListPosts;