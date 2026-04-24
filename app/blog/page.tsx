import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', params.slug)
    .eq('published', true)
    .single()

  if (!post) notFound()

  return (
    <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
      {post.cover_image && (
        <img
          src={post.cover_image}
          alt={post.title}
          className="w-full h-64 object-cover"
        />
      )}
      <div className="p-8">
        <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          {post.category}
        </span>
        <h1 className="text-3xl font-bold text-gray-800 mt-4 mb-2">{post.title}</h1>
        <div className="flex gap-4 text-sm text-gray-400 mb-8">
          <span>{new Date(post.created_at).toLocaleDateString('pt-BR')}</span>
          <span>👁 {post.views} views</span>
        </div>

        <div className="bg-gray-100 rounded-xl p-4 text-center text-sm text-gray-400 mb-8">
          📢 Espaço para anúncio (Google AdSense)
        </div>

        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
          {post.content}
        </div>
      </div>
    </article>
  )
}