import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import moment from 'moment'
import { remark } from 'remark'
import html from 'remark-html'

import type { PostItem } from '@/types'

const postsDirectory = path.join(process.cwd(), 'posts')

export const getSortedPostsData = () => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      category: matterResult.data.category,
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    const format = 'DD-MM-YYYY'
    const dateA = moment(a.date, format)
    const dateB = moment(b.date, format)
    if (dateA.isBefore(dateB)) {
      return 1
    } else if (dateA.isAfter(dateB)) {
      return -1
    } else {
      return 0
    }
  })
}

export const getCategoryPosts = (): Record<string, PostItem[]> => {
  const sortedPosts = getSortedPostsData()
  const categoryPosts: Record<string, PostItem[]> = {}

  sortedPosts.forEach((posts) => {
    if (!categoryPosts[posts.category]) {
      categoryPosts[posts.category] = []
    }
    categoryPosts[posts.category].push(posts)
  })

  return categoryPosts
}

// export const getHTMLPosts

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    category: matterResult.data.category,
    contentHtml,
  }
}
