import { getPostData } from '@/lib/posts';
import { notFound } from 'next/navigation';

async function IdPage({
  params,
}: {
  params: Promise<{ category: string; id: string }>
}) {
  const id = (await params).id

  const post = await getPostData(id)

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col mx-[240px] mt-[100px] font-lexend text-white">
      <div className='fit-content bg-black/80 p-4'>
        <div className='text-center text-4xl font-bold mb-4'>{post.title}</div>
        <div className='text-center text-lg font-extralight italic'>Ngày viết: {post.date}</div>
        <article
        className="flex flex-col font-poppins text-white"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        ></article>
      </div>
    </div>
  )
}

export default IdPage
