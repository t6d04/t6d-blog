import { getPostData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = {
  params: { id: string; category: string; };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostData(params.id);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
  };
}

async function IdPage({ params }: Props) {
  const post = await getPostData(params.id);

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
