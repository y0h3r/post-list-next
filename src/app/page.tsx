import { notFound } from 'next/navigation'
 
interface Post {
  id: string
  title: string
  content: string
}
 
async function getArticles(id: string) {
  const res = await fetch(`https://api.vercel.app/blog/${id}`, {
    cache: 'force-cache',
  })
  const post: Post = await res.json()
  if (!post) notFound()
  return post
}
 
export async function generateStaticParams() {
  const posts = await fetch('https://api.vercel.app/blog', {
    cache: 'force-cache',
  }).then((res) => res.json())
 
  return posts.map((post: Post) => ({
    id: String(post.id),
  }))
}
 
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post = await getArticles("12")
 
  return {
    title: post.title,
  }
}
 
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post = await getArticles("12")
 
  console.log(post)
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}