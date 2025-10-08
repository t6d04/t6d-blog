import { getPostData } from '@/lib/posts'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postData = await getPostData(params.id)
  if (!postData) {
    return {}
  }
  return {
    title: postData.title,
  }
}

export default async function Post({ params }: Props) {
  const postData = await getPostData(params.id)

  if (!postData) {
    notFound()
  }

  return (
    <article>
      <h1 className="text-3xl font-bold">{postData.title}</h1>
      <div className="text-gray-500 mb-4">
        {/* TODO: Consider formatting date for display and using a machine-readable format for dateTime */}
        <time dateTime={postData.date}>{postData.date}</time>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </article>
  )
}