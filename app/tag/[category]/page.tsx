import PostElement from '@/components/listPost/PostElement'
import { getCategoryPosts } from '@/lib/posts'

async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const posts = getCategoryPosts()
  const categoryPosts = posts[(await params).category]

  return (
    <div className="flex flex-row gap-3 mx-[240px] mt-[100px] font-poppins text-white justify-center">
      {categoryPosts.map((post) => (
        <PostElement key={post.id} {...post} />
      ))}
    </div>
  )
}

export default CategoryPage
