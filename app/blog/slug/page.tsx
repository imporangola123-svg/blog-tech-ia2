import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    slug: string
  }
}

export default async function PostPage({ params }: PageProps) {
  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', params.slug)
    .eq('published', true)
    .single()

  if (!post) notFound()


  return (
    <article className="bg-white rounded-2xl p-8 shadow-sm">
      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
        {post.category}
      </span>
      <h1 className="text-3xl font-bold mt-4 mb-2">{post.title}</h1>
      <div className="flex gap-4 text-sm text-gray-400 mb-8">
        <span>{new Date(post.created_at).toLocaleDateString('pt-BR')}</span>

        <span>👁 {post.views} views</span>
      </div>

      {/* Bloco de anúncio */}
      <div className="bg-gray-100 rounded-xl p-4 text-center text-sm text-gray-400 mb-8">
        📢 Espaço para anúncio (Google AdSense)
      </div>

      <div className="prose max-w-none text-gray-700 leading-relaxed">

        {post.content}
      </div>
    </article>
  )
}
