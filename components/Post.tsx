import { getPostData } from "@/lib/posts";
import { PostItem } from "@/types";

const Post: React.FC<PostItem> = async ({id}) => {

    const post = await getPostData(id);

    return (
        <div className="flex flex-col font-poppins text-white" dangerouslySetInnerHTML={{__html: post.contentHtml}}>
            
        </div>
    );
}

export default Post;